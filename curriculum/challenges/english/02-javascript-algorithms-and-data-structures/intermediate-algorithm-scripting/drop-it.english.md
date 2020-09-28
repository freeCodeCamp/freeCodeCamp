---
id: a5deed1811a43193f9f1c841
title: Drop it
challengeType: 5
forumTopicId: 16010
---

## Description
<section id='description'>
Given the array <code>arr</code>, iterate through and remove each element starting from the first element (the 0 index) until the function <code>func</code> returns <code>true</code> when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, <code>arr</code> should be returned as an empty array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
  - text: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.
    testString: assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1]);
  - text: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3]);
  - text: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), []);
  - text: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4]);
  - text: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.
    testString: assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dropElements(arr, func) {
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
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```

</section>
