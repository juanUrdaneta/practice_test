const isSubsequence = (str1,str2) => {//checks if the characters in str1 appera in str2 in the same order regardless of interruptions
  let a = 0;
  let b = 0;
  while(a<str1.split('').length){
    if(b === str2.split('').length){
      return false;
    }else if(str1.split('')[a] === str2.split('')[b]){
      if(a == str1.split('').length-1){
        return true;
      }else{
        a++;
        b++;
      }
    }else{
      b++;
    }
  }
  return false;
};


console.log(isSubsequence('abcd','abcdf'));
console.log(isSubsequence('aFbc','abcf'));
console.log(isSubsequence('sing','sting'));
console.log(isSubsequence('abc','abracadabra'));