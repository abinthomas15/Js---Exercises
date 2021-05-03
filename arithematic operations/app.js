const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Enter the first number'));
const num2 = parseInt(prompt('Enter the Second number'));

// Additon
function add(num1,num2) {
  let sum = (num1 + num2) ;
  return sum;
}
console.log("Sum of these numbers are :", add(num1, num2));

// Subtraction
function subtract(num1,num2) {
  let sum = (num1 - num2)
  return sum
}
console.log("differnce of these numbers are :", subtract(num1, num2));

// Mulitiplication
function multpliy(num1,num2) {
  let sum = (num1 * num2)
  return sum
}
console.log(" When multiplied these numbers we get :", multpliy(num1, num2));

// Division
function divide(num1,num2) {
  let sum = (num1 / num2)
  return sum
}
console.log(" When divide these numbers we get :", divide(num1, num2));

// Modulus
function modulus(num1,num2) {
  let sum = (num1 % num2)
  return sum
}
console.log(" modulus of these numbers are :", modulus(num1, num2));

// Greater than
function greaterThan(num1,num2) {
  if(num1 > num2) {
    return num1 ;
  } else {
    return num2 ; 
  }
}
console.log( greaterThan(num1, num2), "is the greatest of these two");

// Less than
function lessThan(num1,num2) {
  if(num1 < num2) {
    return num1 ;
  } else {
    return num2 ; 
  }
}
console.log( lessThan(num1, num2), "is the smallest of these two");

// Equal to
function equalTo(num1,num2) {
  if(num1 === num2) {
    console.log("Both these numbers are equal") ;
  } else {
    console.log("These numbers are not equal") ;
  }
}

equalTo(num1,num2)




