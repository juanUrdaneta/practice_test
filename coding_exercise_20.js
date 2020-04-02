const nestedEvenSum = obj => {
  const nums = [];
  let x = 0;

  const helper = (ob) => {
    const keys = Object.keys(ob) || 0;
    if(keys.length === 0) return;
    if(typeof ob[keys[0]] === "number" && ob[keys[0]]%2 === 0) nums.push(ob[keys[0]]);
    if(typeof ob[keys[0]] === "object") helper(ob[keys[0]]);
    delete ob[keys[0]]
    helper(ob);
  };

  helper(obj);

  nums.forEach(el=>{x+=el})

  return x;
};


console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};