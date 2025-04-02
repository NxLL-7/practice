let count = 0;
const interval = setInterval(() => {
  console.log(count);
  if (count === 10) {
    clearInterval(interval);
  }
  count++;
}, 600);
