---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
---

## Description
<section id='description'>
It's time we see how powerful arrow functions are when processing data.
Arrow functions work really well with higher order functions, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>, that take other functions as arguments for processing collections of data.
Read the following code:
<blockquote>FBPosts.filter(function(post) {<br>&nbsp;&nbsp;return post.thumbnail !== null && post.shares > 100 && post.likes > 500;<br>})</blockquote>
We have written this with <code>filter()</code> to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:
<blockquote>FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)</blockquote>
This code is more succinct and accomplishes the same task with fewer lines of code.
</section>

## Instructions
<section id='instructions'>
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array <code>realNumberArray</code> and store the new array in the variable <code>squaredIntegers</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+squaredIntegers/g), '<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).');
  - text: <code>squaredIntegers</code> should be an <code>array</code>
    testString: assert(Array.isArray(squaredIntegers), '<code>squaredIntegers</code> should be an <code>array</code>');
  - text: <code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>
    testString: assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], '<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>');
  - text: <code>function</code> keyword was not used.
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '<code>function</code> keyword was not used.');
  - text: loop should not be used
    testString: getUserInput => assert(!getUserInput('index').match(/(for)|(while)/g), 'loop should not be used');
  - text: <code>map</code>, <code>filter</code>, or <code>reduce</code> should be used
    testString: getUserInput => assert(getUserInput('index').match(/map|filter|reduce/g), '<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map((x) => x * x);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```
</section>
