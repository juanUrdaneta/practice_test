const areThereDuplicates = (...args) => {
  //iterar sobre el array usando multiple pointers.
  for (let index = 0; index < args.length; index++){
    let j = index+1;
    while (j<args.length) {
      console.log(`index=: ${index} while j=: ${j}`);
      if(args[index] === args[j]) return true;
      j++;
    }
  };
  return false;
};

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2, 3, 2, 4));
