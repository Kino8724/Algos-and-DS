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
// pushFront([4, 5, 6, 7], 4)

// -------------------------

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
//
// Examples:
//
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

const popFront = arr => {
  console.log("initial array:")
  console.log(arr)
  let popValue = arr[0]
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1]
    console.log(arr)
  }
  arr.length = arr.length - 1
  console.log(`New Array: [${arr}]\nPopped value: ${popValue}`)
}
popFront([1, 2, 3, 4])
