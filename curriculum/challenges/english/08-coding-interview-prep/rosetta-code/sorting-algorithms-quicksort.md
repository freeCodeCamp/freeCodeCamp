---
id: 5a23c84252665b21eecc800d
title: Sorting algorithms/Quicksort
challengeType: 5
---

## Description
<section id='description'>
  <p>Write a function to sort an array elements using the <a href="https://en.wikipedia.org/wiki/Quicksort"><i>quicksort</i></a>
    algorithm. The function should return the sorted array.</p>
  <p>The elements must have a <a href="https://en.wikipedia.org/wiki/Weak_ordering">strict weak order</a> and the index
    of the array can be of any discrete type.</p>
  <p>Quicksort, also known as <i>partition-exchange sort</i>, uses these steps.</p>
  <p>Choose any element of the array to be the pivot.</p>
  <p>Divide all other elements (except the pivot) into two partitions.</p>
  <p>All elements less than the pivot must be in the first partition.</p>
  <p>All elements greater than the pivot must be in the second partition.</p>
  <p>Use recursion to sort both partitions.</p>
  <p>Join the first sorted partition, the pivot, and the second sorted partition.</p>
  <p>The best pivot creates partitions of equal length (or lengths differing by <b>1</b>).</p>
  <p>The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted
    array).</p>
  <p>The run-time of Quicksort ranges from <i><a href="http://rosettacode.org/wiki/O">O</a>(n </i>log<i> n)</i> with the
    best pivots, to <i><a href="http://rosettacode.org/wiki/O">O</a>(n<sup>2</sup>)</i> with the worst pivots, where <i>n</i>
    is the number of elements in the array.</p>
  <p>This is a simple quicksort algorithm, adapted from Wikipedia.</p>
  <p><b>function</b> <i>quicksort</i>(array)</p>
  <p>less, equal, greater <b>:=</b> three empty arrays</p>
  <p><b>if</b> length(array) > 1</p>
  <p>pivot <b>:=</b> <i>select any element of</i> array</p>
  <p><b>for each</b> x <b>in</b> array</p>
  <p><b>if</b> x < pivot <b>then add</b> x <b>to</b> less</p>
  <p><b>if</b> x = pivot <b>then add</b> x <b>to</b> equal</p>
  <p><b>if</b> x > pivot <b>then add</b> x <b>to</b> greater</p>
  <p>quicksort(less)</p>
  <p>quicksort(greater)</p>
  <p>array <b>:=</b> concatenate(less, equal, greater)</p>
  <p>A better quicksort algorithm works in place, by swapping elements within the array, to avoid the memory allocation
    of more arrays.</p>
  <p><b>function</b> <i>quicksort</i>(array)</p>
  <p><b>if</b> length(array) > 1</p>
  <p>pivot <b>:=</b> <i>select any element of</i> array</p>
  <p>left <b>:= first index of</b> array</p>
  <p>right <b>:=</b> <b>last index of</b> array</p>
  <p><b>while</b> left ≤ right</p>
  <p><b>while</b> array[left] < pivot</p> <p>left := left + 1</p>
  <p><b>while</b> array[right] > pivot</p>
  <p>right := right - 1</p>
  <p><b>if</b> left ≤ right</p>
  <p><b>swap</b> array[left] <b>with</b> array[right]</p>
  <p>left := left + 1</p>
  <p>right := right - 1</p>
  <p>quicksort(array <b>from first index to</b> right)</p>
  <p>quicksort(array <b>from</b> left <b>to last index</b>)</p>
  <p>Quicksort has a reputation as the fastest sort. Optimized variants of quicksort are common features of many
    languages and libraries. One often contrasts quicksort with <a href="http://rosettacode.org/wiki/../Merge sort">merge
      sort</a>, because both sorts have an average time of <i><a href="http://rosettacode.org/wiki/O">O</a>(n </i>log<i>
      n)</i>.</p>
  <p><i>"On average, mergesort does fewer comparisons than quicksort, so it may be better when complicated comparison
      routines are used. Mergesort also takes advantage of pre-existing order, so it would be favored for using sort() to
      merge several sorted arrays. On the other hand, quicksort is often faster for small arrays, and on arrays of a few
      distinct values, repeated many times."</i> — http://perldoc.perl.org/sort.html</p>
  <p>Quicksort is at one end of the spectrum of divide-and-conquer algorithms, with merge sort at the opposite end.<ul>
      <li>Quicksort is a conquer-then-divide algorithm, which does most of the work during the partitioning and the
        recursive calls. The subsequent reassembly of the sorted partitions involves trivial effort.</li>
  </p>
  <p>
    <li>Merge sort is a divide-then-conquer algorithm. The partioning happens in a trivial way, by splitting the input
      array in half. Most of the work happens during the recursive calls and the merge phase.</li>
    </ul>
  </p>
  <p>With quicksort, every element in the first partition is less than or equal to every element in the second partition.
    Therefore, the merge phase of quicksort is so trivial that it needs no mention!</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>quickSort</code> should be a function.
    testString: assert(typeof quickSort == 'function', '<code>quickSort</code> should be a function.');
  - text: <code>quickSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(quickSort([25, 32, 12, 7, 20])), '<code>quickSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>quickSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(quickSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>quickSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>quickSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(quickSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>quickSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>quickSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(quickSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>quickSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>quickSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(quickSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>quickSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>quickSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(quickSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>quickSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function quickSort (array) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function quickSort (array) {

  function swap(i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
  }

  function quicksort(left, right) {

    if (left < right) {
      var pivot = array[left + Math.floor((right - left) / 2)],
          left_new = left,
          right_new = right;

      do {
        while (array[left_new] < pivot) {
          left_new += 1;
        }
        while (pivot < array[right_new]) {
          right_new -= 1;
        }
        if (left_new <= right_new) {
          swap(left_new, right_new);
          left_new += 1;
          right_new -= 1;
        }
      } while (left_new <= right_new);

      quicksort(left, right_new);
      quicksort(left_new, right);

    }
  }

  quicksort(0, array.length - 1);

  return array;
}
```

</section>