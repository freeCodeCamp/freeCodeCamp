---
id: 5a23c84252665b21eecc8012
title: Sorting algorithms/Stooge sort
challengeType: 5
forumTopicId: 302318
dashedName: sorting-algorithmsstooge-sort
---

# --description--

Write a function to perform Stooge Sort on an array of integers. The function should return a sorted array.

The Stooge Sort algorithm is as follows:

<pre><b>algorithm</b> stoogesort(<b>array</b> elements, firstElementPosition = 0, lastElementPosition = <b>length</b>(elements)-1)
  <b>if</b> elements[lastElementPosition] &#x3C; elements[firstElementPosition] <b>then</b>
    elements[firstElementPosition] <b>↔</b> elements[lastElementPosition]
  <b>if</b> lastElementPosition - firstElementPosition > 1 <b>then</b>
    elementsPositionedBetween <b>:=</b> (lastElementPosition - firstElementPosition + 1)/3
    stoogesort(elements, firstElementPosition , lastElementPosition - elementsPositionedBetween)
    stoogesort(elements, firstElementPosition + elementsPositionedBetween, lastElementPosition )
    stoogesort(elements, firstElementPosition , lastElementPosition - elementsPositionedBetween)
  <b>return</b> elements
</pre>

# --hints--

`stoogeSort` should be a function.

```js
assert(typeof stoogeSort == 'function');
```

`stoogeSort([25, 32, 12, 7, 20])` should return an array.

```js
assert(Array.isArray(stoogeSort([25, 32, 12, 7, 20])));
```

`stoogeSort([25, 32, 12, 7, 20])` should return `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(stoogeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`stoogeSort([38, 45, 35, 8, 13])` should return `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(stoogeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`stoogeSort([43, 36, 20, 34, 24])` should return `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(stoogeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`stoogeSort([12, 33, 26, 18, 1, 16, 38])` should return `[1, 12, 16, 18, 26, 33, 38]`.

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

`stoogeSort([3, 39, 48, 16, 1, 4, 29])` should return `[1, 3, 4, 16, 29, 39, 48]`.

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
  function stoogeSortRecurse(array, firstElementPosition, lastElementPosition) {
    if (lastElementPosition === undefined) {
      lastElementPosition = array.length - 1;
    }

    if (firstElementPosition === undefined) {
      firstElementPosition = 0;
    }

    if (array[lastElementPosition] < array[firstElementPosition]) {
      var aux = array[firstElementPosition];
      array[firstElementPosition] = array[lastElementPosition];
      array[lastElementPosition] = aux;
    }

    if (lastElementPosition - firstElementPosition > 1) {
      var elementsPositionedBetween = Math.floor((lastElementPosition - firstElementPosition + 1) / 3);
      stoogeSortRecurse(array, firstElementPosition, lastElementPosition - elementsPositionedBetween);
      stoogeSortRecurse(array, firstElementPosition + elementsPositionedBetween, lastElementPosition);
      stoogeSortRecurse(array, firstElementPosition, lastElementPosition - elementsPositionedBetween);
    }
  }
  stoogeSortRecurse(arr);
  return arr;
}
```
