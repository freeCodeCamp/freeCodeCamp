---
id: 5a23c84252665b21eecc8009
title: Sorting algorithms/Insertion sort
challengeType: 5
---

## Description
<section id='description'>
An <span style="font-family: serif"><a href="http://rosettacode.org/wiki/O">O</a>(<i>n</i><sup>2</sup>)</span> sorting algorithm which moves elements one at a time into the correct position. The algorithm consists of inserting one element at a time into the previously sorted part of the array, moving higher ranked elements up as necessary. To start off, the first (or smallest, or any arbitrary) element of the unsorted array is considered to be the sorted part.
Although insertion sort is an <span style="font-family: serif"><a href="http://rosettacode.org/wiki/O">O</a>(<i>n</i><sup>2</sup>)</span> algorithm, its simplicity, low overhead, good locality of reference and efficiency make it a good choice in two cases:
(i) small <span style="font-family: serif"><i>n</i></span>,
(ii) as the final finishing-off algorithm for <span style="font-family: serif"><a href="http://rosettacode.org/wiki/O">O</a>(<i>n</i> log<i>n</i>)</span> algorithms such as <a href="http://rosettacode.org/wiki/Merge sort">mergesort</a> and <a href="http://rosettacode.org/wiki/quicksort">quicksort</a>.
The algorithm is as follows (from <a href="https://en.wikipedia.org/wiki/Insertion_sort#Algorithm">wikipedia</a>):
<pre>
<b>function</b> <i>insertionSort</i>(array A)
  <b>for</b> i <b>from</b> 1 <b>to</b> length[A]-1 <b>do</b>
    value := A[i]
    j := i-1
    <b>while</b> j >= 0 <b>and</b> A[j] > value <b>do</b>
      A[j+1] := A[j]
      j := j-1
    <b>done</b>
    A[j+1] = value
  <b>done</b>
</pre>
Write a function that performs insertion sort on a given array. The function should return the sorted array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>insertionSort</code> should be a function.
    testString: assert(typeof insertionSort == 'function', '<code>insertionSort</code> should be a function.');
  - text: <code>insertionSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(insertionSort([25, 32, 12, 7, 20])), '<code>insertionSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>insertionSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(insertionSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>insertionSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>insertionSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(insertionSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>insertionSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>insertionSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(insertionSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>insertionSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>insertionSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(insertionSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>insertionSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>insertionSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(insertionSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>insertionSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function insertionSort (a) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function insertionSort (a) {
    for (var i = 0; i < a.length; i++) {
        var k = a[i];
        for (var j = i; j > 0 && k < a[j - 1]; j--)
            a[j] = a[j - 1];
        a[j] = k;
    }
    return a;
}
```

</section>
