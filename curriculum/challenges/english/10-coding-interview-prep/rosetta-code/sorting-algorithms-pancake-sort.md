---
id: 5a23c84252665b21eecc800b
title: Sorting algorithms/Pancake sort
challengeType: 5
forumTopicId: 302315
---

## Description

<section id='description'>
Write a function to sort an array of integers (of any convenient size) into ascending order using <a href="https://en.wikipedia.org/wiki/Pancake sorting" target="_blank">Pancake sorting</a>. The function should return the sorted array.
In short, instead of individual elements being sorted, the only operation allowed is to "flip" one end of the list, like so:
<pre>
Before:
<b>6 7 8 9</b> 2 5 3 4 1<br>
After:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>
Only one end of the list can be flipped; this should be the low end, but the high end is okay if it's easier to code or works better, but it <b>must</b> be the same end for the entire solution. (The end flipped can't be arbitrarily changed.)
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>pancakeSort</code> should be a function.
    testString: assert(typeof pancakeSort == 'function');
  - text: <code>pancakeSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
  - text: <code>pancakeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>pancakeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>pancakeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>pancakeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(pancakeSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>pancakeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(pancakeSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function pancakeSort(arr) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    var new_slice;

    // flip arr max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx + 1).reverse();
      for (var j = 0; j <= max_idx; j++) arr[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i + 1).reverse();
    for (var j = 0; j <= i; j++) arr[j] = new_slice[j];
  }
  return arr;
}
```

</section>
