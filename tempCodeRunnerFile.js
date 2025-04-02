const numbers = [1, 2, 3, 4, 5];
const sqr = numbers.map((i) => {
  return {
    i: i,
    sqr: i * i,
  };
});
console.log(sqr);
