// function vowelsCount(str) {
//   str = str.toLowerCase();
//   count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ("a" || "o" || "e" || "i" || "u")) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowelsCount("JavaScript"));

// function checkNum(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i], " is a even");
//     } else {
//       console.log(array[i], " is a odd");
//     }
//   }
// }
// checkNum([1, 4, 7, 10]);

// function longest(str) {
//   let array = str.split(" ");
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i].length > max.length) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log(longest("I love JavaScript programming"));

// function fuzz() {
//   for (let i = 2; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i, " FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log(i, " Fizz");
//     } else if (i % 5 === 0) {
//       console.log(i, " Buzz");
//     }
//   }
// }
// fuzz();

// function secondLarge(array) {
//   let largest = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < array.length; i++) {
//     if (largest < array[i]) {
//       second = largest;
//       largest = array[i];
//     }
//     if (second < array[i] && array[i] < largest) {
//       second = array[i];
//     }
//   }
//   return second;
// }

// console.log(secondLarge([-10, -5, -20, 8, -12]));

// let inp = [1, [2, [3, 4], 5], 6];

// function flat(array, isRec) {
//   if (!isRec) temp = [];

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "object") {
//       isRec = true;
//       flat(array[i], isRec);
//     } else {
//       temp.push(array[i]);
//     }
//   }
//   return temp;
// }

// console.log(flat(inp, false));
