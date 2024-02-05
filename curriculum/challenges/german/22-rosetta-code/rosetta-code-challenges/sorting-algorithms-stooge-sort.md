---
id: 5a23c84252665b21eecc8012
title: Sortieralgorithmen / Stooge-Sortierung
challengeType: 1
forumTopicId: 302318
dashedName: sorting-algorithmsstooge-sort
---

# --description--

Write a function to perform Stooge Sort on an array of integers. The function should return a sorted array.

Der Stooge Sortieralgorithmus lautet wie folgt:

<pre><b>algorithm</b> stoogesort(<b>array</b> L, i = 0, j = <b>length</b>(L)-1)
  <b>if</b> L[j] &#x3C; L[i] <b>then</b>
    L[i] <b>↔</b> L[j]
  <b>if</b> j - i > 1 <b>then</b>
    t <b>:=</b> (j - i + 1)/3
    stoogesort(L, i , j-t)
    stoogesort(L, i+t, j )
    stoogesort(L, i , j-t)
  <b>return</b> L
</pre>

# --hints--

`stoogeSort` sollte eine Funktion zurückgeben.

```js
assert(typeof stoogeSort == 'function');
```

`stoogeSort([25, 32, 12, 7, 20])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(stoogeSort([25, 32, 12, 7, 20])));
```

`stoogeSort([25, 32, 12, 7, 20])` sollte `[7, 12, 20, 25, 32]` zurückgeben.

```js
assert.deepEqual(stoogeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`stoogeSort([38, 45, 35, 8, 13])` sollte `[8, 13, 35, 38, 45]` zurückgeben.

```js
assert.deepEqual(stoogeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`stoogeSort([43, 36, 20, 34, 24])` sollte `[20, 24, 34, 36, 43]` zurückgeben.

```js
assert.deepEqual(stoogeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`stoogeSort([12, 33, 26, 18, 1, 16, 38])` sollte `[1, 12, 16, 18, 26, 33, 38]` zurückgeben.

```js
assert.deepEqual(stoogeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`stoogeSort([3, 39, 48, 16, 1, 4, 29])` sollte `[1, 3, 4, 16, 29, 39, 48]` zurückgeben.

```js
assert.deepEqual(stoogeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function stoogeSort(arr) {

}
```

# --solutions--

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
