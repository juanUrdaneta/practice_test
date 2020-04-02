const capitalizeWords = arr => {//set to uppercase all of the words.
  return arr.map(el => el.toUpperCase());
};
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))