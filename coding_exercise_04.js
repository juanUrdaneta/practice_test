const areThereDuplicates = (...args) => {//checks if there are duplicates in the argument passed
  for (let index = 0; index < args.length; index++){
    let j = index+1;
    while (j<args.length) {
      if(args[index] === args[j]) return true;
      j++;
    }
  };
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 2, 4));
