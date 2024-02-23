---
id: 5a23c84252665b21eecc7e84
title: Maior número subsequencial
challengeType: 1
forumTopicId: 302278
dashedName: greatest-subsequential-sum
---

# --description--

Dada uma sequência de números inteiros, encontre uma subsequência contínua que maximize a soma de seus elementos, ou seja, os elementos de nenhuma outra subsequência somam um valor superior a este.

Uma subsequência vazia é considerada ter a soma de \\( 0 \\). Portanto, se todos os elementos são negativos, o resultado deve ser a sequência vazia.

# --hints--

`maximumSubsequence` deve ser uma função.

```js
assert(typeof maximumSubsequence == 'function');
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` deve retornar um array.

```js
assert(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10])));
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` deve retornar `[ 1, 2, -1, 3, 10 ]`.

```js
assert.deepEqual(maximumSubsequence([1, 2, -1, 3, 10, -10]), [1, 2, -1, 3, 10]);
```

`maximumSubsequence([ 0, 8, 10, -2, -4, -1, -5, -3 ])` deve retornar `[ 0, 8, 10 ]`.

```js
assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [
  0,
  8,
  10
]);
```

`maximumSubsequence([ 9, 9, -10, 1 ])` deve retornar `[ 9, 9 ]`.

```js
assert.deepEqual(maximumSubsequence([9, 9, -10, 1]), [9, 9]);
```

`maximumSubsequence([ 7, 1, -5, -3, -8, 1 ])` deve retornar `[ 7, 1 ]`.

```js
assert.deepEqual(maximumSubsequence([7, 1, -5, -3, -8, 1]), [7, 1]);
```

`maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])` deve retornar `[ 6, -1, 4 ]`.

```js
assert.deepEqual(maximumSubsequence([-3, 6, -1, 4, -4, -6]), [6, -1, 4]);
```

`maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])` deve retornar `[ 3, 5, 6, -2, -1, 4 ]`.

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
