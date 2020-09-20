---
id: 5a23c84252665b21eecc8010
title: Sorting algorithms/Shell sort
challengeType: 5
forumTopicId: 302317
---

## Description

<section id='description'>
Write a function to sort an array of elements using the <a href="https://en.wikipedia.org/wiki/Shell sort" target="_blank">Shell sort</a> algorithm, a diminishing increment sort. The function should return the sorted array.
The Shell sort (also known as Shellsort or Shell's method) is named after its inventor, Donald Shell, who published the algorithm in 1959.
Shell sort is a sequence of interleaved insertion sorts based on an increment sequence. The increment size is reduced after each pass until the increment size is 1.
With an increment size of 1, the sort is a basic insertion sort, but by this time the data is guaranteed to be almost sorted, which is insertion sort's "best case".
Any sequence will sort the data as long as it ends in 1, but some work better than others.
Empirical studies have shown a geometric increment sequence with a ratio of about 2.2 work well in practice.
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>shellSort</code> should be a function.
    testString: assert(typeof shellSort == 'function');
  - text: <code>shellSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
  - text: <code>shellSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>shellSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>shellSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>shellSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>shellSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function shellSort(a) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```

</section>
