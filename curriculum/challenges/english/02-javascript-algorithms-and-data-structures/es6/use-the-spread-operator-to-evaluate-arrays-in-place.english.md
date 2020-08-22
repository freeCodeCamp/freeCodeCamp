---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
isHidden: false
forumTopicId: 301222
---

## Description
<section id='description'>
ES6 introduces the <dfn>spread operator</dfn>, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
The ES5 code below uses <code>apply()</code> to compute the maximum value in an array:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

We had to use <code>Math.max.apply(null, arr)</code> because <code>Math.max(arr)</code> returns <code>NaN</code>. <code>Math.max()</code> expects comma-separated arguments, but not an array.
The spread operator makes this syntax much better to read and maintain.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

<code>...arr</code> returns an unpacked array. In other words, it <em>spreads</em> the array.
However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```js
const spreaded = ...arr; // will throw a syntax error
```

</section>

## Instructions
<section id='instructions'>
Copy all contents of <code>arr1</code> into another array <code>arr2</code> using the spread operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code> should be correct copy of <code>arr1</code>.
    testString: assert(arr2.every((v, i) => v === arr1[i]));
  - text: <code>...</code> spread operator should be used to duplicate <code>arr1</code>.
    testString: assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
  - text: <code>arr2</code> should remain unchanged when <code>arr1</code> is changed.
    testString: assert((arr1, arr2) => {arr1.push('JUN'); return arr2.length < arr1.length});

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```

</section>
