---
title: Large sum
---

## Problem 13: Large sum
Challenge: Work out the first ten digits of the sum of one-hundred 50-digit numbers.

## Spoiler Alert!

## One Solution:
```
function largeSum(arr) {
  let sum = arr.reduce((acc, item) => acc + Number(item), 0);   // 8.348422521139211e+49
  let str = sum.toString().split('e')[0];   // '8.348422521139211'
  return 1e+9 * str.slice(0,11);   // 8348422521
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
```
### Code Explanation:

*   The function receives an array of strings
*   The first line converts the strings to numbers and adds them 
*   The second line converts the large sum to a string with toString, then gets everything to the left of 'e' using String.split().
*   The third line multiplies 1,000,000,000 by the first 11 characters to implicitly coerce the string to a 10 digit number
*   Note: One regular expression could accomplish the same task as the second and third lines together

### Resources

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce' target='_blank' rel='nofollow'>Array.reduce()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>String.split()</a>
