---
id: 5a23c84252665b21eecc8012
title: Sorting algorithms/Stooge sort
challengeType: 5
isHidden: false
forumTopicId: 302318
---

## Description

<section id='description'>
Write a function to perform <a href="https://en.wikipedia.org/wiki/Stooge sort" target="_blank">Stooge Sort</a> on an array of integers. The function should return a sorted array.
The Stooge Sort algorithm is as follows:
<pre>
<b>algorithm</b> stoogesort(<b>array</b> L, i = 0, j = <b>length</b>(L)-1)
  <b>if</b> L[j] < L[i] <b>then</b>
    L[i] <b>↔</b> L[j]
  <b>if</b> j - i > 1 <b>then</b>
    t <b>:=</b> (j - i + 1)/3
    stoogesort(L, i , j-t)
    stoogesort(L, i+t, j )
    stoogesort(L, i , j-t)
  <b>return</b> L
</pre>
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>stoogeSort</code> should be a function.
    testString: assert(typeof stoogeSort == 'function');
  - text: <code>stoogeSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(stoogeSort([25, 32, 12, 7, 20])));
  - text: <code>stoogeSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(stoogeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>stoogeSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(stoogeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>stoogeSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(stoogeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>stoogeSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(stoogeSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>stoogeSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(stoogeSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function stoogeSort(arr) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function stoogeSort(arr) {
  function stoogeSortRecurse(array, i, j) {
    if (j === undefined) {
      j = array.length - 1;
    }

    if (i === undefined) {
      i = 0;
    }

    if (array[j] < array[i]) {
      var aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }

    if (j - i > 1) {
      var t = Math.floor((j - i + 1) / 3);
      stoogeSortRecurse(array, i, j - t);
      stoogeSortRecurse(array, i + t, j);
      stoogeSortRecurse(array, i, j - t);
    }
  }
  stoogeSortRecurse(arr);
  return arr;
}
```

</section>
