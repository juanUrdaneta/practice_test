const factorial = num => {//use recursion to calc factorial
  if (num === 0 ) return 1;
  if (num === 2) return 2;
  return num * factorial(num - 1);
};

console.log(factorial(4));