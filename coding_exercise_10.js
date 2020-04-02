const power = (base,expo) => {//use recursion to do the Math.power function
  if (expo===0) return 1;
  return base * power(base,expo-1);
}

console.log(power(2,4));