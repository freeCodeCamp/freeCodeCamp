---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
forumTopicId: 301194
---

## Description
<section id='description'>
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.
Printing variable values with each cycle of your loop by using <code>console.log()</code> can uncover buggy behavior related to resetting, or failing to reset a variable.
</section>

## Instructions
<section id='instructions'>
The following function is supposed to create a two-dimensional array with <code>m</code> rows and <code>n</code> columns of zeroes. Unfortunately, it's not producing the expected output because the <code>row</code> variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like <code>[[0, 0], [0, 0], [0, 0]]</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>matrix</code> variable to an array holding 3 rows of 2 columns of zeroes each.
    testString: assert(JSON.stringify(matrix) == "[[0,0],[0,0],[0,0]]");
  - text: The <code>matrix</code> variable should have 3 rows.
    testString: assert(matrix.length == 3);
  - text: The <code>matrix</code> variable should have 2 columns in each row.
    testString: assert(matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
