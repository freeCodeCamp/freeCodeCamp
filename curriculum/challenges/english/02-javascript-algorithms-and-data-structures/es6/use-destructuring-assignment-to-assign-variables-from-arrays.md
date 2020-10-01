---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
forumTopicId: 301213
---

## Description
<section id='description'>
ES6 makes destructuring arrays as easy as destructuring objects.
One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
Destructuring an array lets us do exactly that:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

The variable <code>a</code> is assigned the first value of the array, and <code>b</code> is assigned the second value of the array.
We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

</section>

## Instructions
<section id='instructions'>
Use destructuring assignment to swap the values of <code>a</code> and <code>b</code> so that <code>a</code> receives the value stored in <code>b</code>, and <code>b</code> receives the value stored in <code>a</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Value of <code>a</code> should be 6, after swapping.
    testString: assert(a === 6);
  - text: Value of <code>b</code> should be 8, after swapping.
    testString: assert(b === 8);
  - text: You should use array destructuring to swap a and b.
    testString: assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 8, b = 6;
// Only change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
let a = 8, b = 6;
[a, b] = [b, a];
```

</section>
