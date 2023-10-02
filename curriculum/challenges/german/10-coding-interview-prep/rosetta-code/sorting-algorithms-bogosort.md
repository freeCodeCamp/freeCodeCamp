---
id: 5a23c84252665b21eecc8002
title: Sorting algorithms/Bogosort
challengeType: 1
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

Bogosort a list of numbers.

Bogosort simply shuffles a collection randomly until it is sorted.

"Bogosort" is a perversely inefficient algorithm only used as an in-joke.

Its average run-time is O(n!) because the chance that any given shuffle of a set will end up in sorted order is about one in *n* factorial, and the worst case is infinite since there's no guarantee that a random shuffling will ever produce a sorted sequence.

Its best case is O(n) since a single pass through the elements may suffice to order them.

Pseudocode:

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` sollte eine Funktion sein.

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` sollte `[7, 12, 20, 25, 32]` zurückgeben.

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` sollte `[8, 13, 35, 38, 45]` zurückgeben.

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` sollte `[20, 24, 34, 36, 43]` zurückgeben.

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` sollte `[1, 12, 16, 18, 26, 33, 38]` zurückgeben.

```js
assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`bogosort([3, 39, 48, 16, 1, 4, 29])` sollte `[1, 3, 4, 16, 29, 39, 48]` zurückgeben.

```js
assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [
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
function bogosort(v) {

}
```

# --solutions--

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```
