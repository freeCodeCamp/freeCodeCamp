---
id: 5a23c84252665b21eecc7e84
title: Größte Folgesumme
challengeType: 1
forumTopicId: 302278
dashedName: greatest-subsequential-sum
---

# --description--

Given a sequence of integers, find a continuous subsequence which maximizes the sum of its elements, that is, the elements of no other single subsequence add up to a value larger than this one.

Eine leere Teilfolge hat die Summe von \\( 0 \\); wenn also alle Elemente negativ sind, muss das Ergebnis die leere Folge sein.

# --hints--

`maximumSubsequence` sollte eine Funktion sein.

```js
assert(typeof maximumSubsequence == 'function');
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10])));
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` sollte `[ 1, 2, -1, 3, 10 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([1, 2, -1, 3, 10, -10]), [1, 2, -1, 3, 10]);
```

`maximumSubsequence([ 0, 8, 10, -2, -4, -1, -5, -3 ])` sollte `[ 0, 8, 10 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [
  0,
  8,
  10
]);
```

`maximumSubsequence([ 9, 9, -10, 1 ])` sollte `[ 9, 9 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([9, 9, -10, 1]), [9, 9]);
```

`maximumSubsequence([ 7, 1, -5, -3, -8, 1 ])` sollte `[ 7, 1 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([7, 1, -5, -3, -8, 1]), [7, 1]);
```

`maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])` sollte `[ 6, -1, 4 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([-3, 6, -1, 4, -4, -6]), [6, -1, 4]);
```

`maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])` sollte `[ 3, 5, 6, -2, -1, 4 ]` zurückgeben.

```js
assert.deepEqual(maximumSubsequence([-1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1]), [
  3,
  5,
  6,
  -2,
  -1,
  4
]);
```

# --seed--

## --seed-contents--

```js
function maximumSubsequence(population) {

}
```

# --solutions--

```js
function maximumSubsequence(population) {
  function sumValues(arr) {
      var result = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
          result += arr[i];
      }
      return result;
  }
  var greatest;
  var maxValue = 0;

  for (var i = 0, len = population.length; i < len; i++) {
      for (var j = i; j <= len; j++) {
          var subsequence = population.slice(i, j);
          var value = sumValues(subsequence);
          if (value > maxValue) {
              maxValue = value;
              greatest = subsequence;
          };
      }
  }

  return greatest;
}
```
