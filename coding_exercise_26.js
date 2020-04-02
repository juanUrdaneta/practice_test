const naiveString = (string, substr) => {//search substr inside string looping only once through the array.
  let match = 0;
  let count = 0;
  for(char of string){

    if(char === substr[count]) count++;
    else count = 0;

    if(count === substr.length){
      match +=1;
      count = 0;
    }

  }

  return match;
};

console.log(naiveString("1omgm oagomga oamg omg","omg"));
console.log(naiveString("lorem ipsum loremipsum","loremipsum"));
console.log(naiveString("lorem ipsum lorem ipsum","lorem ipsum"));