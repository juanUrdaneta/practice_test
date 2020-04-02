const flatten = arrs => {//receive array nested inside arrays. return a single array with all the memebers
  let final = [];

  const helper = args => {
    if(args.length ===  0) return;
    if(typeof args[0] == "number") final.push(args[0]);
    else if (typeof args[0] == "object") helper(args[0]);
    helper(args.slice(1))
  }

  helper(arrs);

  return final;
}

console.log(flatten([1,2,[3,4]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[1],[2],[13]]));