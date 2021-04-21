// let a = [1,2,3,4,5];
// function showArrayElements(arr) {
//   for(let i=0; i<=arr.length; i++){
//     if( i%2 === 0) {
//       console.log(arr[i]);
//     }
//   }
  
// }

// showArrayElements(a)



let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

showEvenArrayElemnts(a);

function showEvenArrayElemnts(arr) {
  for(let i=0; i<=arr.length; i+=2) {
    console.log(arr[i]);
  }
}




