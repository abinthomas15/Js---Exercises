  const num = 1234;
  const numb = num.toString();
  const numb2 = numb.split('');

  function reverseNum (num) {
    let b;
    for(i=3; i>=0; i--) {
      b.push(num[i])
    }
    return b;
  }

  reverseNum(numb2);

// console.log(reverseNum(numb2));

// const a = [2,6,2,3,1,4,4,5,3]

// b = [... new Set(a)];

// console.log(b)

// function fibinocci() {
//   let b = [];
//   for(i=0; i<=100; i++) {
//     if(i === 0) {
//       b = i;
//     } else {
//       b = i + (i+1);
//     }
//   }
//   return b
// }

// fibinocci();