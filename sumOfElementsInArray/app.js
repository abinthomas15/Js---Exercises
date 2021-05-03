// Sum Of elements in an array
a = [1,2,7];

s = 0;

function sumOfElements(arr) {
  for(let i=0; i<arr.length; i++){
    s = s+arr[i];
  }
  return s;
}

console.log(sumOfElements(a));
 
// Write a function to print all the elements whose value is a multiple of 3 and multiple of 5
a = [1,2,3,4,5,6,7,8,9,10,15,20,22,23,45,65,34,41,43,47];

function valueOfElements(arr) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%3 === 0 || arr[i]%5 === 0) {
      console.log(arr[i]);
    }
  }
}

valueOfElements(a);

// Write a function to multiply elements of an array to itself ( find the square of each elements in the array) ?
a = [1,2,3,4,25,9,7]

function squareOfElements(arr) {
  s = 0;
  for(let i=0; i<arr.length; i++) {
    s = arr[i]*arr[i];
    console.log(s)
  }
}
squareOfElements(a);

// Declare 2 arrays of the same size and print the values of both using one for loop
a = [1,2,3,1,15];
b = [1,2,3,2,15];

function sumOfTwoArrays(arr,arr1) {
  s=0;
  for (i=0; i<arr.length; i++){
    console.log(arr[i]);
    console.log(arr1[i]);
  }
  return ;
}
sumOfTwoArrays(a,b);

// Write a program to compare the current item in the array to the next item and print if they are equal or not 
a = [1,1,2,2,3];

function equalOrNot (arr) {
  for(i=0; i+1<arr.length; i++){
    if(arr[i] === arr[i+1]) {
      console.log("They are equal")
    } else {
      console.log("They are not equal")
    }
  }
}
equalOrNot(a);

// Print the array in reverse order
a = [1,2,3,4,5]

function reverseArray (arr) {
  sampleArray = [];
  for(i=(arr.length-1); i >=0; i--){
    sampleArray.push(arr[i]);
  }
  return sampleArray;
}
console.log(reverseArray(a));

// Write a function to print the square of a number and call this function for each element of an array 

function squareOfNumber (num) {
  return num*num ;
}

a = [1,2,3,8,11];

function squareOfNumbersInArray (arr) {
  sampleArray = [];
  for (i=0; i<arr.length; i++){
     square = squareOfNumber(arr[i]) ;
     sampleArray.push(square) ;
  }
  return sampleArray
}

console.log(squareOfNumbersInArray(a));