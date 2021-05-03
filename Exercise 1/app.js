// https://www.codecademy.com/articles/getting-user-input-in-node-js

const prompt = require('prompt-sync')();
const num = prompt('Enter the number : ')
if (num%2 === 0) {
  console.log('it is an even number')
} else {
  console.log('It is an odd number')
}

