// let arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1.map((x) => x * 3));

// let arr1 = [1, 2, 3, 1, 2, 4, 4, 6, 4, 5, 6];
// console.log(
//   arr1.filter((value, index, array) => array.indexOf(value) === index)
// );

let arr = [
  { name: "hussam", age: 30 },
  { name: "Ali", age: 40 },
  { name: "Ahmad", age: 22 },
];

console.log(arr.sort((a, b) => a.age - b.age));
