let a = [1,2,3,4,5,6,7];

function elemetnsReplacetoZero(arr) {
  for(let i=0; i<arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(elemetnsReplacetoZero(a));