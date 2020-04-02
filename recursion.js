const factorial = num => {
  if (num == 0 ) return 1;
  if (num === 2) return 2;
  return num * factorial(num - 1);
};
console.log(factorial(7));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
