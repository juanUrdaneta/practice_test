//LO HICISTE AL REVEZ
const isSubsequence = (str1,str2) => {
  let a = 0;
  let b = 0;
  while(a<str1.length){
    if(b === str2.length){
      return false;
    }else if(str1[a] === str2[b]){
      if(a == str1.length-1){
        return true;
      }else{
        a++;
        b++;
      }
    }
    b++;
  }
  return false;
};

function isSubsequenceB(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('abcd','abcdf'));
console.log(isSubsequence('aFbc','abcf'));
console.log(isSubsequence('sing','sting'));
console.log(isSubsequence('abc','abracadabra'));

console.log(isSubsequenceB('abcd','abcdf'));
console.log(isSubsequenceB('aFbc','abcf'));
console.log(isSubsequenceB('sing','sting'));
console.log(isSubsequenceB('abc','abracadabra'));