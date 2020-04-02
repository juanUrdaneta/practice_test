//sliding window
const maxSubarraySum = (arr, size) => {
  let sum = 0;
  let tempSum = 0;

  if (size > arr.length) return null;

  for (let i = 0; i < size; i++) {
    tempSum += arr[i];
  }
  sum = tempSum;
  //toma el valor de la primera secuencia
  //empieza a iterar sobre el numero qeu sigue (size)
  for (let i = size; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - size];
    sum = tempSum > sum ? tempSum : sum;
  }

  return sum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));
console.log(maxSubarraySum([2,3], 3));