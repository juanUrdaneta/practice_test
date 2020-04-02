const isPalindrome = (str) => {//use recursion to figure out whether str is a palindrome or not.
  if (str.length <= 1)return true;
  return Boolean((str[0] === str[str.length-1]) * isPalindrome(str.slice(1,-1)))
};

console.log(isPalindrome("asdccdsa"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacaaalpanama"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("a"));