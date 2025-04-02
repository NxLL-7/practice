//  Spread

// let nums = [1, 2, 3, 4, 5];
// let max = Math.max(...nums);
// let min = Math.min(...nums);
// console.log(max);
// console.log(min);

// Rest

// function fridge(...foods) {
//   console.log(foods);
// }
// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "pasta";
// const food4 = "dew";
// const food5 = "fries";
// fridge(food1, food2, food3, food4, food5);
// function sum(...nums) {
//   let Result = 0;
//   for (let x of nums) {
//     Result = Result + x;
//   }
//   return Result;
// }
// const total = sum(1, 2, 3, 4, 5);
// console.log(total);

// .map()

// const nums = [1, 2, 3, 4, 5];
// let newNums = nums.map(function square(x) {
//   return x * 2;
// });
// console.log(newNums);
// let alphabets = ["siddhartha"];
// let ALPHABETS = alphabets.map(function (str) {
//   let Capital = str.toUpperCase(str);
//   return Capital;
// });
// console.log(ALPHABETS);

// .filter()

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNums = nums.filter(function isODD(x) {
  if (x % 2 != 0) {
    return x;
  }
});
let evenNums = nums.filter(function isEVEN(x) {
  if (x % 2 == 0) {
    return x;
  }
});
let all = [...oddNums, ...evenNums];
console.log(all);
console.log(oddNums);
console.log(evenNums);

// .reduce()

// let nums = [5, 10, 15, 20, 25];
// let sumOfNums = nums.reduce((x, y) => {
//   return x + y;
// });
// console.log(sumOfNums);
