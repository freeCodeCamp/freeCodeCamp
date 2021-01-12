---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using `console.log()` can uncover buggy behavior related to resetting, or failing to reset a variable.

# --instructions--

The following function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeroes. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0], [0, 0], [0, 0]]`.

# --hints--

Your code should set the `matrix` variable to an array holding 3 rows of 2 columns of zeroes each.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

The `matrix` variable should have 3 rows.

```js
assert(matrix.length == 3);
```

The `matrix` variable should have 2 columns in each row.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```
