const capitalizeFirst = args => {
  return args.map(el=>{
    return el[0].toUpperCase().concat(el.slice(1))
  })
};

console.log(capitalizeFirst(['car','jungle']));