---
id: 5a23c84252665b21eecc8001
title: Sorting algorithms/Bead sort
challengeType: 5
isHidden: false
forumTopicId: 302310
---

## Description

<section id='description'>
Sort an array of positive integers using the <a href="https://en.wikipedia.org/wiki/Bead_sort" target="_blank">Bead Sort Algorithm</a>.
A  <i>bead sort</i>  is also known as a  <i>gravity sort</i>.
The algorithm has  O(S),  where  S  is the sum of the integers in the input set:  Each bead is moved individually.
This is the case when bead sort is implemented without a mechanism to assist in finding empty spaces below the beads, such as in software implementations.
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>beadSort</code> should be a function.
    testString: assert(typeof beadSort == 'function');
  - text: <code>beadSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
  - text: <code>beadSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>beadSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>beadSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>beadSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(beadSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>beadSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(beadSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function beadSort(arr) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function beadSort(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  var grid = new Array(arr.length);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  var levelcount = new Array(max);
  levelcount.fill(0);
  for (var i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (var j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    for (var j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  var sorted = new Array(arr.length);
  sorted.fill(0);
  for (var i = 0; i < arr.length; i++) {
    var putt = 0;
    for (
      var j = 0;
      j < max &&
      (function(c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
      })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0);
      j++
    )
      putt++;
    sorted[i] = putt;
  }
  return sorted;
}
```

</section>
