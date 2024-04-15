---
id: 661bc0e16083b65a7f3a3cb1
title: Check Existance of an Element in an Array
challengeType: 1
dashedName: ckeck-existance
---

# --description--

Write a program to take the size of an array, the array itself, and a target number as input from the user, and check whether the target exists in the array or not.

**Examples:**

Given array `[1, 2, 3, 4, 5, 6, 7]` with a size of `7` and a target of `3`, the output should be:

```js
checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3); // Output: Yes
```

After calling the function, capture its output and compare it with the expected result to verify if the function is returning the correct value.

```js
const expectedOutput = 'Yes'; // Change this to the expected output
const actualOutput = checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3); // Call the function
assert(actualOutput === expectedOutput, `Expected output: ${expectedOutput}, but got: ${actualOutput}`);
```

# --instructions--

Write a JavaScript function called `checkTargetExists` that takes three parameters: `size` (size of the array), `arr` (the array itself), and `target` (the target number to check). The function should return 'Yes' if the target exists in the array, and 'No' otherwise.

# --hints--

Use a loop to iterate through the array elements and check if the target exists in the array.


```js
assert(code.match(/for\s*\(/));

```

# --seed--
## --seed-contents--

```js
function checkTargetExists(size, arr, target) {
   // Only change code below this line


   // Only change code above this line
}

console.log(checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3));
```

# --solutions--

```js
function checkTargetExists(size, arr, target) {
   for (let i = 0; i < size; i++) {
       if (arr[i] === target) {
           return 'Yes';
       }
   }
   return 'No';
}

```
