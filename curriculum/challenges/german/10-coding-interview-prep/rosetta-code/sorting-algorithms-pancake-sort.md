---
id: 5a23c84252665b21eecc800b
title: Sorting algorithms/Pancake sort
challengeType: 1
forumTopicId: 302315
dashedName: sorting-algorithmspancake-sort
---

# --description--

Write a function to sort an array of integers (of any convenient size) into ascending order using Pancake sorting. The function should return the sorted array.

In short, instead of individual elements being sorted, the only operation allowed is to "flip" one end of the list, like so:

<pre>Vorher:
<b>6 7 8 9</b> 2 5 3 4 1<br>
Nachher:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>

Only one end of the list can be flipped; this should be the low end, but the high end is okay if it's easier to code or works better, but it **must** be the same end for the entire solution. (The end flipped can't be arbitrarily changed.)

# --hints--

`pancakeSort` sollte eine Funktion sein.

```js
assert(typeof pancakeSort == 'function');
```

`pancakeSort([25, 32, 12, 7, 20])` should return an array.

```js
assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
```

`pancakeSort([25, 32, 12, 7, 20])` sollte `[7, 12, 20, 25, 32]` zurückgeben.

```js
assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`pancakeSort([38, 45, 35, 8, 13])` sollte `[8, 13, 35, 38, 45]` zurückgeben.

```js
assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`pancakeSort([43, 36, 20, 34, 24])` sollte `[20, 24, 34, 36, 43]` zurückgeben.

```js
assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`pancakeSort([12, 33, 26, 18, 1, 16, 38])` sollte `[1, 12, 16, 18, 26, 33, 38]` zurückgeben.

```js
assert.deepEqual(pancakeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`pancakeSort([3, 39, 48, 16, 1, 4, 29])` sollte `[1, 3, 4, 16, 29, 39, 48]` zurückgeben.

```js
assert.deepEqual(pancakeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function pancakeSort(arr) {

}
```

# --solutions--

```js
function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    var new_slice;

    // flip arr max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx + 1).reverse();
      for (var j = 0; j <= max_idx; j++) arr[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i + 1).reverse();
    for (var j = 0; j <= i; j++) arr[j] = new_slice[j];
  }
  return arr;
}
```
