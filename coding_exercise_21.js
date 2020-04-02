const capitalizeWords = arr => {
  return arr.map(el => el.toUpperCase());
};
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))