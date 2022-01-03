// Setup
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// Only change code below this line

// for(let i = 0; i < myArr.length; i++) {
//   total = total + myArr[i]
// }
// console.log(total);
// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
      
      
//       console.log(arr[i][j]);
//     }
//   }
  
// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for( let i=0; i<arr.length; i++){
//         for( let j=0; j<arr[i].length; j++){
//             //console.log(arr[i][j]);
//             product = product * arr[i][j]
//         }
//     }
//     // Only change code above this line
//     return product;
//   }
  
//   console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//   const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// console.log(ourArray);

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }
// console.log(multiply([1,2], 2));

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  console.log(randomRange(2, 4));