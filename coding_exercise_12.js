const productOfArray = args =>{//use recursion to calc the product of an array
  if (args.length === 0)  return 1;
  return args[0] * productOfArray(args.slice(1));
}

console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))