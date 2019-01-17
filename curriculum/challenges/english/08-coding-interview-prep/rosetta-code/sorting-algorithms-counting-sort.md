---
id: 5a23c84252665b21eecc8006
title: Sorting algorithms/Counting sort
challengeType: 5
---

## Description
<section id='description'>
Implement the <a href="https://en.wikipedia.org/wiki/Counting sort">Counting sort</a>. This is a way of sorting integers when the minimum and maximum value are known.
Pseudocode:
<pre>
<b>function</b> <i>countingSort</i>(array, min, max):
  count: <b>array of</b> (max - min + 1) <b>elements</b>
  <b>initialize</b> count <b>with</b> 0
  <b>for each</b> number <b>in</b> array <b>do</b>
    count[number - min] := count[number - min] + 1
  <b>done</b>
  z := 0
  <b>for</b> i <b>from</b> min <b>to</b> max <b>do</b>
    <b>while</b> ( count[i - min] > 0 ) <b>do</b>
      array[z] := i
      z := z+1
      count[i - min] := count[i - min] - 1
    <b>done</b>
  <b>done</b>
</pre>
Write a function to implement the above pseudo code. The function should return the sorted array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>countSort</code> should be a function.
    testString: assert(typeof countSort == 'function', '<code>countSort</code> should be a function.');
  - text: <code>countSort([25, 32, 12, 7, 20],7, 32)</code> should return a array.
    testString: assert(Array.isArray(countSort([25, 32, 12, 7, 20], 7, 32)), '<code>countSort([25, 32, 12, 7, 20],7, 32)</code> should return a array.');
  - text: <code>countSort([25, 32, 12, 7, 20],7, 32)</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(countSort([25, 32, 12, 7, 20], 7, 32), [7, 12, 20, 25, 32], '<code>countSort([25, 32, 12, 7, 20],7, 32)</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>countSort([38, 45, 35, 8, 13],8, 45)</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(countSort([38, 45, 35, 8, 13], 8, 45), [8, 13, 35, 38, 45], '<code>countSort([38, 45, 35, 8, 13],8, 45)</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>countSort([43, 36, 20, 34, 24],20, 43)</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(countSort([43, 36, 20, 34, 24], 20, 43), [20, 24, 34, 36, 43], '<code>countSort([43, 36, 20, 34, 24],20, 43)</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>countSort([12, 33, 26, 18, 1, 16, 38],1, 38)</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(countSort([12, 33, 26, 18, 1, 16, 38], 1, 38), [1, 12, 16, 18, 26, 33, 38], '<code>countSort([12, 33, 26, 18, 1, 16, 38],1, 38)</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>countSort([3, 39, 48, 16, 1, 4, 29],1, 48)</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(countSort([3, 39, 48, 16, 1, 4, 29], 1, 48), [1, 3, 4, 16, 29, 39, 48], '<code>countSort([3, 39, 48, 16, 1, 4, 29],1, 48)</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function countSort (arr, min, max) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function countSort (arr, min, max) {
  var i, z = 0,
    count = [];

  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
  return arr;
}
```

</section>
