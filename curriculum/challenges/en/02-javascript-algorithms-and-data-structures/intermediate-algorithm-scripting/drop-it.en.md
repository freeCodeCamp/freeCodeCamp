---
id: a5deed1811a43193f9f1c841
title: Drop it
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Given the array <code>arr</code>, iterate through and remove each element starting from the first element (the 0 index) until the function <code>func</code> returns <code>true</code> when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, <code>arr</code> should be returned as an empty array.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '<code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.'
  testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], ''<code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.'');'
- text: '<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.'
  testString: 'assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], ''<code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.'');'
- text: '<code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.'
  testString: 'assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], ''<code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.'');'
- text: '<code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.'
  testString: 'assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], ''<code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.'');'
- text: '<code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.'
  testString: 'assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], ''<code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.'');'
- text: '<code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.'
  testString: 'assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], ''<code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

</div>



</section>

## Solution
<section id='solution'>


```js
function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

</section>
