let arr = [1, 5, 9, 6, 3, 87, 72, 23];

// function maxNumber(arr1) {
//   maxNum = arr[0];
//   for (let i = 1; i < arr1.length - 1; i++) {
//     if (maxNum < arr1[i]) {
//       maxNum = arr1[i];
//     }
//   }
//   return maxNum;
// }

// console.log(maxNumber(arr));

// function rev(arr1) {
//   for (let i = 0; i < arr1.length / 2; i++) {
//     [arr1[i], arr1[arr1.length - 1 - i]] = [arr1[arr1.length - 1 - i], arr1[i]];
//   }
//   return arr1;
// }

// console.log(rev(arr));

// function func(arr1, x) {
//   for (let i = 0; i < arr1.length - 1; i++) {
//     for (let j = 0; j < arr1.length - 1; j++) {
//       if (arr1[i] + arr1[j] === x && i !== j) {
//         return [arr1[i], arr1[j]];
//       }
//     }
//   }
//   return null;
// }

// arr.sort((a, b) => a - b);

// function func(arr1, x) {
//   let i = 0,
//     j = arr1.length - 1;
//   while (i < j) {
//     let sum = arr1[i] + arr1[j];

//     if (sum === x) {
//       return [arr1[i], arr1[j]];
//     }
//     if (sum > x) {
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return null;
// }
// console.log(func(arr, 9));
