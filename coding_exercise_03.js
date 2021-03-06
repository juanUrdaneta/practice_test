const sameFrequency = (num1, num2) => {//checks if both args have the same numbers inside regardless of order.
  if (num1.toString().split("").length !== num2.toString().split("").length)
    return false;

  let n1O = {};
  let n2O = {};

  num1
    .toString()
    .split('')
    .forEach(item => {
      n1O[item] = (n1O[item] || 0) + 1;
    });
  num2
    .toString()
    .split('')
    .forEach(item => {
      n2O[item] = (n2O[item] || 0) + 1;
    });

  for (let key in n1O) {
    if (!n2O[key]) return false;
    if (n1O[key] !== n2O[key]) return false;
  }

  return true;
};

console.log(sameFrequency(182,821));
 