---
id: 5a23c84252665b21eecc7e84
title: 最大部分配列
challengeType: 1
forumTopicId: 302278
dashedName: greatest-subsequential-sum
---

# --description--

与えられた整数の数列において、その要素の和が最大となる部分配列を求めます。 つまり、他の単一の部分配列の合計値がこの部分配列の合計値より大きくなることはありません。

空の部分配列は、\\( 0 \\); の和を取るとみなされるため、すべての要素が負の場合、結果は空の数列でなければなりません。

# --hints--

`maximumSubsequence` は関数とします。

```js
assert(typeof maximumSubsequence == 'function');
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` は配列を返す必要があります。

```js
assert(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10])));
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` は`[ 1, 2, -1, 3, 10 ]`を返す必要があります。

```js
assert.deepEqual(maximumSubsequence([1, 2, -1, 3, 10, -10]), [1, 2, -1, 3, 10]);
```

`maximumSubsequence([ 0, 8, 10, -2, -4, -1, -5, -3 ])` は`[ 0, 8, 10 ]`を返す必要があります。

```js
assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [
  0,
  8,
  10
]);
```

`maximumSubsequence([ 9, 9, -10, 1 ])` は`[ 9, 9 ]`を返す必要があります。

```js
assert.deepEqual(maximumSubsequence([9, 9, -10, 1]), [9, 9]);
```

`maximumSubsequence([ 7, 1, -5, -3, -8, 1 ])` は`[ 7, 1 ]`を返す必要があります。

```js
assert.deepEqual(maximumSubsequence([7, 1, -5, -3, -8, 1]), [7, 1]);
```

`maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])` は `[ 6, -1, 4 ]`を返す必要があります。

```js
assert.deepEqual(maximumSubsequence([-3, 6, -1, 4, -4, -6]), [6, -1, 4]);
```

`maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])` は`[ 3, 5, 6, -2, -1, 4 ]`を返す必要があります。

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
