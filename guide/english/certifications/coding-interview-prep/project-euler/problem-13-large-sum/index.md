---
title: Large Sum
---
## Problem 13: Multiples of 3 and 5

### Method:
- We need to convert each object of the array from strings to floating point numbers.
- Next, we need to then add the floating point numbers together
- Finally we need to convert our number back into a string to slice it down to 11 characters (10 digits, 1 decimal point) and multiply to get rid of the decimal point.


### Solution:
```js
/*
Function Name: addString
Function Purpose: Convert a string to a float and add it to a number.
Inputs: str (a string), sum (a number)
Outputs: sum
 */
function addString(str, sum) {
  var int;
  int = parseFloat(str);            // convert the string to a number (float)
  sum += int;                       // add the new float to the sum
  return sum;                       // output the new sum
}

function largeSum(arr) {
  var arrLen = arr.length;          // find number of objects in the array
  var sum = 0;

  for (var i = 0; i < arrLen; i++){ // for each object in the array
    sum = addString(arr[i],sum);    // run the object through addString
  }

/* These lines change sum (a number) to a string and slices it down to the first 11 characters (the ten we want and one decimal point)
*/
  var myString = sum.toString();  
  myString = myString.slice(0,11);
  
  var float = parseFloat(myString); // change myString (string) into a float
  float *= 10**9;                   // do math to remove decimal
  return float;                     // output what we want
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums); // We want 8348422521
```
- [Run Code](https://repl.it/@bibbca/Project-Euler-Problem-13-Large-Sum)


### Reference:
- [Parse Float](https://guide.freecodecamp.org/javascript/converting-strings-to-numbers/)
- [Number to String](https://www.w3schools.com/jsref/jsref_tostring_number.asp)
- [String slice](https://www.w3schools.com/jsref/jsref_slice_string.asp)