// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
//
// Examples:
//
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
const pushFront = (arr, val) => {
  // add extra room to swap stuff over
  let length = arr.length
  arr[length] = arr[length - 1]
  let temp = arr[0]
  arr[0] = val
  // start swapping from beginning
  for (let i = 1; i < length; i++) {
    console.log(`temp: ${temp}`);
    let swap = temp;
    temp = arr[i];
    arr[i] = swap;
    console.log(arr);
  }
}
pushFront([4, 5, 6, 7], 4)
