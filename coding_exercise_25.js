const binarySearch = (arr,val) => {//perform a binary search on arr to find val
  let left = 0;
  let rigth = arr.length - 1;
  if(arr[left] === val) return left;
  if(arr[rigth] === val) return rigth;
  while(rigth-left>1){
    let middle = Math.floor((rigth - left) / 2) + left;
    if(arr[middle] === val) return middle;
    if(arr[middle] > val) rigth = middle;
    else if(arr[middle] < val) left = middle;
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],8))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],3))
console.log(binarySearch([1,2,3,4,5,6,10],9))
console.log(binarySearch([-2,1,2,3,4,5,6,10],-2))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],11))