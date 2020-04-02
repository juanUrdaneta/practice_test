const countUniqueVal = vals => {//count how many different values are inside vals
  let i = 0;
  let j = 1;

  while (j < vals.length) {
    if (vals[i] !== vals[j]) {
      i++;
      vals[i] = vals[j];
      j++;
    } else j++;
  }

  return vals.slice(0, i + 1).length;
};

console.log(countUniqueVal([1, 1, 1, 1, 1, 2]));
console.log(countUniqueVal([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueVal([]));
console.log(countUniqueVal([-2, -1, -1, 0, 1]));
