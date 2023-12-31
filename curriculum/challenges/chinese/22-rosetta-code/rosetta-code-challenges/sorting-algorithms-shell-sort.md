---
id: 5a23c84252665b21eecc8010
title: Sorting algorithms/Shell sort
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Write a function to sort an array of elements using the Shell sort algorithm, a diminishing increment sort. The function should return the sorted array.

The Shell sort (also known as Shellsort or Shell's method) is named after its inventor, Donald Shell, who published the algorithm in 1959.

Shell sort is a sequence of interleaved insertion sorts based on an increment sequence. The increment size is reduced after each pass until the increment size is 1.

With an increment size of 1, the sort is a basic insertion sort, but by this time the data is guaranteed to be almost sorted, which is insertion sort's "best case".

Any sequence will sort the data as long as it ends in 1, but some work better than others.

Empirical studies have shown a geometric increment sequence with a ratio of about 2.2 work well in practice.

# --hints--

`shellSort` should be a function.

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` should return an array.

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` should return `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` should return `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` should return `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` should return `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` should return `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

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
