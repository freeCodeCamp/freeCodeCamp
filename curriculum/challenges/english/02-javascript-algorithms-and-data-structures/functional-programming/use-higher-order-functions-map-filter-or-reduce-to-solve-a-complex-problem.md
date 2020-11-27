---
id: 587d7b88367417b2b2512b45
title: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
challengeType: 1
forumTopicId: 301311
---

## Description

<section id='description'>

Now that you have worked through a few challenges using higher-order functions like `map()`, `filter()`, and `reduce()`, you now get to apply them to solve a more complex challenge.

</section>

## Instructions

<section id='instructions'>

We have defined a function named `squareList`. You need to complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()` so that it returns a new array containing only the square of *only* the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is `[-3, 4.8, 5, 3, -3.2]`.

**Note:** Your function should not use any kind of `for` or `while` loops or the `forEach()` function.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>squareList</code> should be a <code>function</code>.
    testString: assert.typeOf(squareList, 'function'), '<code>squareList</code> should be a <code>function</code>';
  - text: <code>for</code>, <code>while</code>, and <code>forEach</code> should not be used.
    testString: assert(!__helpers.removeJSComments(code).match(/for|while|forEach/g));
  - text: <code>map</code>, <code>filter</code>, or <code>reduce</code> should be used.
    testString: assert(__helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/\.(map|filter|reduce)\(/g));
  - text: The function should return an <code>array</code>.
    testString: assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
  - text: <code>squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])</code> should return <code>[16, 1764, 36]</code>.
    testString: assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [16, 1764, 36]);
  - text: <code>squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])</code> should return <code>[9, 100, 49]</code>.
    testString: assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [9, 100, 49]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

</div>

</section>

## Solution

<section id='solution'>

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```

</section>
