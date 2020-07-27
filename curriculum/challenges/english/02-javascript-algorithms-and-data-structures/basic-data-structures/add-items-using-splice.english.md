---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
isHidden: false
forumTopicId: 301152
---

## Description
<section id='description'>
Remember in the last challenge we mentioned that <code>splice()</code> can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

Here we begin with an array of numbers. We then pass the following to <code>splice()</code>. The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index. Note that there can be any number of elements (separated by commas) following <code>amountToDelete</code>, each of which gets inserted.
</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>htmlColorNames</code>, which takes an array of HTML colors as an argument. Modify the function using <code>splice()</code> to remove the first two elements of the array and add <code>'DarkSalmon'</code> and <code>'BlanchedAlmond'</code> in their respective places.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]</code>
    testString: assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']);
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
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
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
