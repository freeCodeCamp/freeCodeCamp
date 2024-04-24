---
id: 66288d9daeeabf161b9ccb3c
title: Print Pattern from an Array
challengeType: 1
dashedName: print-pattern
---

# --description--

Write a program that takes an array of numbers as input from the user. The program should then print a pattern based on the elements of the array, where each element determines the number of characters to be printed in each line.

# --instructions--


Write a function `printPattern` that takes an `array` of numbers as input and prints a pattern based on the elements of the array.

# --hints--

Ensure that the output pattern matches the expected pattern for `[2, 3, 5, 2, 1]`.

```js
assert(printPattern([2, 3, 5, 2, 1]) === ">>\n>>>\n>>>>>\n>>\n>");
```

# --seed--
## --seed-contents--

```js
function printPattern(arr) {
  // Only change code below this line
  
  // Only change code above this line
}

printPattern([2, 3, 5, 2, 1]);
```

# --solutions--

```js
function printPattern(arr) {
 for (let numIndex = 0; numIndex < arr.length; numIndex++) {
    let pattern = "";
    for (let i = 0; i < arr[numIndex]; i++) {
      pattern += ">";
    }
    console.log(pattern);
    if (numIndex !== arr.length - 1) {
      console.log(""); 
    }
  }
}

```
