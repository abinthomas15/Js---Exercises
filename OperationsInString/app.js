// concatenation 
const string1 = "Hello";
const string2 = "World";
concat = string1 + string2 ;

console.log(concat) ;


// Reversing a String
const string = 'Hello';
const str = string.split('');

function reverseString(str) {
  let newString ='';
  for(i=str.length-1; i>=0 ; i--) {
    newString =newString+str[i];
  }
  return newString
}

console.log(reverseString(str));

// Reverse Concatentaion
const string1 = 'Hello World';
const str1 = string1.split('');
const string2 = 'Its a good day';
const str2 = string2.split('');

function reverseString(str) {
  let newString ='';
  for(i=str.length-1; i>=0 ; i--) {
    newString =newString+str[i];
  }
  return newString
}

console.log(reverseString(str1) + reverseString(str2));

// mix the letters
const string1 = 'one';
const str1 = string1.split('');
const string2 = 'two';
const str2 = string2.split('');

function mixTheLetters (str1,str2) {
  let finalString = '';
  for(i=0, j=0; i<str1.length, j<str2.length; i++,j++) {
    finalString += (str1[i]+str2[j]);
  }
  console.log(finalString);
}

mixTheLetters(str1,str2);

//  split in half
const string = 'four';
const str = string.split('');

function splitInhalf(str) {
  let split = [];
  let secondHalf;
  let firstHalf ;
  for(let i=0; i<str.length; i++) {
    split.push(str[i]);
  }
  half = Math.ceil(split.length/2);
  firstHalf = split.splice(0, half);
  secondHalf = split.splice(-half)
  console.log(firstHalf);
  console.log(secondHalf);
}

splitInhalf(str);

// // add a character after every specific letter
string = 'dedication';
str = string.split('')

function addCharacter (str) {
  let char = ''
  for(let i=0; i<str.length; i++){
    if(str[i] === "d") {
      str[i] = 'da';
    }
    char = char+ str[i]
  }
  console.log(char);
  
}

addCharacter(str);