---
id: a5deed1811a43193f9f1c841
title: ドロップする
challengeType: 1
forumTopicId: 16010
dashedName: drop-it
---

# --description--

配列 `arr` が与えられたとき、最初の要素 (インデックスは 0) から順に各要素を反復処理し、関数 `func` に反復要素が渡されたときに関数が `true` を返すまで、要素を削除してください。

条件が満たされた場合は、配列の残りの部分を返してください。条件が満たされない場合は、`arr` を空の配列として返す必要があります。

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` は `[3, 4]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` は `[1, 0, 1]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` は `[1, 2, 3]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` は `[]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` は `[7, 4]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` は `[3, 9, 2]` を返す必要があります。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
