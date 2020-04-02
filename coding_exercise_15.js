const reverse = str => {//use recursion to reverse a string
  if (str === "") return "";
  return str[str.length-1] + reverse(str.slice(0,-1));
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
