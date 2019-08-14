---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
---

## Description
<section id='description'>
Remember in the last challenge we mentioned that <code>splice()</code> can take up to three parameters? Well, in addition to removing elements with the first two parameters, we can use that third parameter, comprised of one or more element(s), to add them as well. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```js
const numbers = [10, 11, 12, 12, 15]
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14)
// the second entry of 12 is removed, and we add 13 and 14 at the same index

console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

Here we begin with an array of numerical values. Using <code>splice()</code>, we have taken an index at which to begin removing elements (3), the number of elements to be removed (1), and the values (13, 14) to be inserted at that same index. Note that the values passed in the third parameter are separated by commas, but require no additional formatting.
</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>htmlColorNames</code>, which takes an array of HTML colors as an argument. Modify the function using <code>splice()</code> to remove the first two elements of the array and add <code>'DarkSalmon'</code> and <code>'BlanchedAlmond'</code> in their respective places.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>
    testString: assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']);
  - text: The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method
    testString: assert(/.splice/.test(code));
  - text: You should not use <code>shift()</code> or <code>unshift()</code>.
    testString: assert(!/shift|unshift/.test(code));
  - text: You should not use array bracket notation.
    testString: assert(!/\[\d\]\s*=/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```

</section>
