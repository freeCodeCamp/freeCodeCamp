---
id: 5a23c84252665b21eecc8007
title: Sorting algorithms/Gnome sort
challengeType: 5
---

## Description
<section id='description'>
  <p>Gnome sort is a sorting algorithm which is similar to <a href="http://rosettacode.org/wiki/Insertion sort">Insertion
      sort</a>, except that moving an element to its proper place is accomplished by a series of swaps, as in <a href="http://rosettacode.org/wiki/Bubble Sort">Bubble
      Sort</a>.</p>
  <p>The pseudocode for the algorithm is:</p>
  <p><b>function</b> <i>gnomeSort</i>(a[0..size-1])</p>
  <p>i := 1</p>
  <p>j := 2</p>
  <p><b>while</b> i < size <b>do</b></p>
  <p><b>if</b> a[i-1] <= a[i] <b>then</b></p>
  <p><i>/// for descending sort, use >= for comparison</i></p>
  <p>i := j</p>
  <p>j := j + 1</p>
  <p><b>else</b></p>
  <p><b>swap</b> a[i-1] <b>and</b> a[i]</p>
  <p>i := i - 1</p>
  <p><b>if</b> i = 0 <b>then</b></p>
  <p>i := j</p>
  <p>j := j + 1</p>
  <p><b>endif</b></p>
  <p><b>endif</b></p>
  <p><b>done</b></p>
  <p>Write a function to implement the above pseudo code. The function should return the sorted array.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>gnomeSort</code> should be a function.
    testString: assert(typeof gnomeSort == 'function', '<code>gnomeSort</code> should be a function.');
  - text: <code>gnomeSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(gnomeSort([25, 32, 12, 7, 20])), '<code>gnomeSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>gnomeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(gnomeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>gnomeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>gnomeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(gnomeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>gnomeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>gnomeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(gnomeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>gnomeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>gnomeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(gnomeSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>gnomeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>gnomeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(gnomeSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>gnomeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function gnomeSort(a) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function gnomeSort(a) {
  function moveBack(i) {
    for (; i > 0 && a[i - 1] > a[i]; i--) {
      var t = a[i];
      a[i] = a[i - 1];
      a[i - 1] = t;
    }
  }
  for (var i = 1; i < a.length; i++) {
    if (a[i - 1] > a[i]) moveBack(i);
  }
  return a;
}
```

</section>