---
id: a6e40f1041b06c996f7b2406
title: 条件を満たす要素の抽出
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

配列 `arr` を参照し、「真偽判定」で真となる最初の要素を返す関数を作成してください。 たとえば、要素 `x` が与えられた場合、`func(x)` が `true` であれば、「真偽判定」は真となります。 真となる要素が無い場合は、`undefined` を返してください。

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` は `8` を返す必要があります。

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` は `undefined` を返す必要があります。

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
