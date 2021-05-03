const prompt = require('prompt-sync')();
const string = prompt('Enter a word to check wheather it is pallindrome ?')
const str = string.split('');

function pallindrome (str) {
  for(i=0,j=(str.length-1); i<str.length,j>=0; i++,j--){
   if(str[i] === str[j]) {
     return 'The given string is a pallindrome'
   } else {
     return 'The given string is not a pallindrome'
   }
   
  }
  
}

console.log(pallindrome(str));