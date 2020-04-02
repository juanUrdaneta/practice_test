const averagePair = (args,avg) => {//get the pair of consecutive numbers in the first arg that avg the second arg
  for (let index = 0; index < args.length; index++){
    let j = index+1;
    while (j<args.length) {
      if((args[index] + args[j])/2 == avg) return true;
      j++;
    }
  };
  return false;
};

console.log(averagePair([1,2,3,4,5],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));