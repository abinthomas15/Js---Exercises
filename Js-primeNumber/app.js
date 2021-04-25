const prompt = require('prompt-sync')();
const numb = prompt('Enter the number ');

const num = parseInt(numb);

function primNumb(num) {
for (let i=2; i<num; i++) {
  if(num%i === 0) {
    console.log("it is not a prime number")
  } 
}
}

primNumb(num)