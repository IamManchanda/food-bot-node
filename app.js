/**
 * Node.js
 */

const fs = require('fs');
const commandLineArgs = require('command-line-args');
const optionsDefinitions = [
  {
    name: 'name',
    type: String
  },
  {
    name: 'order',
    type: String
  },
  {
    name: 'payment',
    type: Number
  },
  {
    name: 'exit',
    type: Boolean
  },
];

const options = commandLineArgs(optionsDefinitions);

let getJson = fs.readFileSync('db.json');
let data = JSON.parse(getJson);

const saveIt = (newData) => {
  const convertDataToString = JSON.stringify(data);
  fs.writeFileSync('db.json', convertDataToString);
};

if (options.name) {
  data.name = options.name;
  console.log(`Hello, ${options.name}. We are selling Dhokla, Dosa and Chowmein! Your order please:`);
  saveIt(data);
} else if (options.order) {
  data.order = options.order;
  console.log(`Cool ${data.name}! That will be Rs50. May I have your payment please?`);
  saveIt(data);
} else if (options.payment) {
  data.payment = options.payment;
  console.log(`Your Change is ${options.payment - 50}, thanks for eating at Gujrat Namkeen. Type --exit to exit.`);
  saveIt(data);
} else if (options.exit) {
  console.log(data);
  console.log(`We hope you return to Gujrat Namkeen soon.`);

  data.name = ''; data.order = ''; data.payment = '';
  saveIt(data);
} else {
  console.log(`Hello, Please enter your name:`);
}