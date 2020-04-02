const fib = (num,prev = 0,current = 1) => {//get the n'th (num) number of the fibonacci sequence
  if (num === 1) return current;
  let actual = prev + current;
  return fib(num - 1, current, actual);
}

console.log(fib(7));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));