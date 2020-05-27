---
id: 5a23c84252665b21eecc8007
title: Sorting algorithms/Gnome sort
challengeType: 5
isHidden: false
forumTopicId: 302314
---

## Description

<section id='description'>
Gnome sort is a sorting algorithm which is similar to <a href="https://rosettacode.org/wiki/Insertion sort" target="_blank">Insertion sort</a>, except that moving an element to its proper place is accomplished by a series of swaps, as in <a href="https://rosettacode.org/wiki/Bubble Sort" target="_blank">Bubble Sort</a>.
The pseudocode for the algorithm is:
<pre>
<b>function</b> <i>gnomeSort</i>(a[0..size-1])
  i := 1
  j := 2
  <b>while</b> i < size <b>do</b>
    <b>if</b> a[i-1] <= a[i] <b>then</b>
      <i>/// for descending sort, use >= for comparison</i>
      i := j
      j := j + 1
    <b>else</b>
      <b>swap</b> a[i-1] <b>and</b> a[i]
      i := i - 1
      <b>if</b> i = 0 <b>then</b>
        i := j
        j := j + 1
      <b>endif</b>
    <b>endif</b>
  <b>done</b>
</pre>
</section>

## Instructions

<section id='instructions'>
Write a function to implement the above pseudo code. The function should return the sorted array.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>gnomeSort</code> should be a function.
    testString: assert(typeof gnomeSort == 'function');
  - text: <code>gnomeSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(gnomeSort([25, 32, 12, 7, 20])));
  - text: <code>gnomeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(gnomeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>gnomeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(gnomeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>gnomeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(gnomeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>gnomeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(gnomeSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>gnomeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(gnomeSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
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
