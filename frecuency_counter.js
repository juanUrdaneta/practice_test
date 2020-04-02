const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  
  //convert each string into an object that have the count for each character.
  let fc1 = {};
  let fc2 = {};
  str1.split("").forEach(el => {
    fc1[el] = (fc1[el] || 0) + 1;
  });

  str2.split("").forEach(el => {
    fc2[el] = (fc2[el] || 0) + 1;
  });

  //check if the values of the ocurrencies of each character are equal.

  for (let key in fc1) {
    if (!fc2[key]) return false;
    if (fc1[key] !== fc2[key]) return false;
  }

  return true;

};

console.log(anagram("aaz", "zaa"));
console.log(anagram("anagram", "anamgra"));
console.log(anagram("juan", "naju"));
console.log(anagram("robert", "bertoro"));
console.log(anagram("pawn", "napaaw"));
console.log(anagram("pawn", "napawwwwa"));
console.log(anagram("eduardo", "doeduar"));
console.log(anagram("nadia", "diana"));