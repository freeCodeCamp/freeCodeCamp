---
id: a3566b1109230028080c9345
title: 範囲内のすべての数値を合計する
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

２つの数字の配列が渡されます。 それら 2 つの数の和と、2 つの間にあるすべての数の和との合計を返してください。 最も小さい数字が常に最初に来るとは限りません。

たとえば、`sumAll([4,1])` は `10` を返す必要があります。なぜなら、1 と 4 (両方を含む) の間にあるすべての数の合計は `10` になるからです。

# --hints--

`sumAll([1, 4])` は数値を返す必要があります。

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` は 10 を返す必要があります。

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` は 10 を返す必要があります。

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` は 45 を返す必要があります。

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` は 45 を返す必要があります。

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
