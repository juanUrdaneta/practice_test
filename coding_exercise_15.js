const reverse = str => {
  if (str === "") return "";
  return str[str.length-1] + reverse(str.slice(0,-1));
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));

// let str = "asdb";

// console.log(str.slice(-1));