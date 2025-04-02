let arr = [1, 2, 3, 4, 5];
let arrOfobj = arr.map((x) => {
  let tempObj = { Number: x, Square: Math.pow(x, 2) };
  return tempObj;
});
console.log(arrOfobj);
