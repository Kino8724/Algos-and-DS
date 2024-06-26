// Strings To Do 1
//
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment.
// Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// ----------------------

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
//
// Examples:
//
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

const removeBlanks = (str) => {
  let newString = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      newString += str[i]
    }
  }
  return newString
}
// console.log(removeBlanks("I Cannot Believe Its Not Butter"))


// ----------------------

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
//
// Examples:
//
// getDigits("abc8c0d1ngd0j0!8") => 801008
//
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

const getDigits = (str) => {
  let numbers = ""
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      numbers += str[i]
    }
  }
  return Number(numbers)

}
// console.log(getDigits("jkl342j3kl4j23lhb523o"))

// ----------------------

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
//
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
//
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
  let words = str.split(" ");
  let result = "";
  console.log(words)
  words.forEach(word => {
    if (word != "") {
      result += word[0].toUpperCase();
    }
  });
  return result
}
// console.log(acronym(" there's no free lunch - gotta pay yer way. "))

// ----------------------

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
//
// Examples:
//
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count += 1
    }
  }
  return count
}
// console.log(countNonSpaces("Hello world !"))


// ----------------------

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
//
// Examples:
//
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


function removeShorterStrings(arr, val) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= val) {
      newArray[newArray.length] = arr[i]
    }
  }
  return newArray
}
// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
