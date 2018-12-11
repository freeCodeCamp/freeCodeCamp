---
id: 5a23c84252665b21eecc800a
title: Sorting algorithms/Merge sort
challengeType: 5
---

## Description
<section id='description'>
  <p>The <b>merge sort</b> is a recursive sort of order n*log(n).</p>
  <p>It is notable for having a worst case and average complexity of <i>O(n*log(n))</i>, and a best case complexity of <i>O(n)</i>
    (for pre-sorted input).</p>
  <p>The basic idea is to split the collection into smaller groups by halving it until the groups only have one element
    or no elements (which are both entirely sorted groups).</p>
  <p>Then merge the groups back together so that their elements are in order.</p>
  <p>This is how the algorithm gets its <i>divide and conquer</i> description.</p>
  <p>Write a function to sort a collection of integers using the merge sort. The function should return the sorted array.</p>
  <p>The merge sort algorithm comes in two parts:</p>
  <p>a sort function and</p>
  <p>a merge function</p>
  <p>The functions in pseudocode look like this:</p>
  <p><b>function</b> <i>mergesort</i>(m)</p>
  <p><b>var</b> list left, right, result</p>
  <p><b>if</b> length(m) ≤ 1</p>
  <p><b>return</b> m</p>
  <p><b>else</b></p>
  <p><b>var</b> middle = length(m) / 2</p>
  <p><b>for each</b> x <b>in</b> m <b>up to</b> middle - 1</p>
  <p><b>add</b> x <b>to</b> left</p>
  <p><b>for each</b> x <b>in</b> m <b>at and after</b> middle</p>
  <p><b>add</b> x <b>to</b> right</p>
  <p>left = mergesort(left)</p>
  <p>right = mergesort(right)</p>
  <p><b>if</b> last(left) ≤ first(right)</p>
  <p><b>append</b> right <b>to</b> left</p>
  <p><b>return</b> left</p>
  <p>result = merge(left, right)</p>
  <p><b>return</b> result</p>
  <p><b>function</b> <i>merge</i>(left,right)</p>
  <p><b>var</b> list result</p>
  <p><b>while</b> length(left) > 0 and length(right) > 0</p>
  <p><b>if</b> first(left) ≤ first(right)</p>
  <p><b>append</b> first(left) <b>to</b> result</p>
  <p>left = rest(left)</p>
  <p><b>else</b></p>
  <p><b>append</b> first(right) <b>to</b> result</p>
  <p>right = rest(right)</p>
  <p><b>if</b> length(left) > 0</p>
  <p><b>append</b> rest(left) <b>to</b> result</p>
  <p><b>if</b> length(right) > 0</p>
  <p><b>append</b> rest(right) <b>to</b> result</p>
  <p><b>return</b> result</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>mergeSort</code> should be a function.
    testString: assert(typeof mergeSort == 'function', '<code>mergeSort</code> should be a function.');
  - text: <code>mergeSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(mergeSort([25, 32, 12, 7, 20])), '<code>mergeSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>mergeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(mergeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>mergeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>mergeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(mergeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>mergeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>mergeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(mergeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>mergeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>mergeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(mergeSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>mergeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>mergeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(mergeSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>mergeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function mergeSort (array) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function mergeSort (array) {
  function merge(left, right, arr) {
    var a = 0;

    while (left.length && right.length) {
      arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
    }
    while (left.length) {
      arr[a++] = left.shift();
    }
    while (right.length) {
      arr[a++] = right.shift();
    }
  }

  function mergeSortRecurse(arr) {
    var len = arr.length;

    if (len === 1) {
      return;
    }

    var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

    mergeSortRecurse(left);
    mergeSortRecurse(right);
    merge(left, right, arr);
  }
  mergeSortRecurse(array)
  return array;
}
```

</section>