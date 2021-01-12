---
id: 5a23c84252665b21eecc7e84
title: 最重要的后续总和
challengeType: 5
videoUrl: ''
dashedName: greatest-subsequential-sum
---

# --description--

给定一个整数序列，找到一个连续的子序列，它最大化其元素的总和，也就是说，没有其他单个子序列的元素加起来大于这一个的值。空子序列被认为具有\\（0 \\）的总和;因此，如果所有元素都是负数，则结果必须是空序列。

# --hints--

`maximumSubsequence`应该是一个函数。

```js
assert(typeof maximumSubsequence == 'function');
```

`maximumSubsequence("+JSON.stringify(tests[0])+")`应该返回一个数组。

```js
assert(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10])));
```

`maximumSubsequence("+JSON.stringify(tests[0])+")`应返回`"+JSON.stringify(results[0])+"` 。

```js
assert.deepEqual(maximumSubsequence([1, 2, -1, 3, 10, -10]), [1, 2, -1, 3, 10]);
```

`maximumSubsequence("+JSON.stringify(tests[1])+")`应返回`"+JSON.stringify(results[1])+"` 。

```js
assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [
  0,
  8,
  10
]);
```

`maximumSubsequence("+JSON.stringify(tests[2])+")`应返回`"+JSON.stringify(results[2])+"` 。

```js
assert.deepEqual(maximumSubsequence([9, 9, -10, 1]), [9, 9]);
```

`maximumSubsequence("+JSON.stringify(tests[3])+")`应返回`"+JSON.stringify(results[3])+"` 。

```js
assert.deepEqual(maximumSubsequence([7, 1, -5, -3, -8, 1]), [7, 1]);
```

`maximumSubsequence("+JSON.stringify(tests[4])+")`应返回`"+JSON.stringify(results[4])+"` 。

```js
assert.deepEqual(maximumSubsequence([-3, 6, -1, 4, -4, -6]), [6, -1, 4]);
```

`maximumSubsequence("+JSON.stringify(tests[5])+")`应返回`"+JSON.stringify(results[5])+"` 。

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
