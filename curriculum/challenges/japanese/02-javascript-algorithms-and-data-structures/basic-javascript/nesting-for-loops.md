---
id: 56533eb9ac21ba0edf2244e1
title: ネストした for ループ
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

多次元配列を処理する場合、前に学習した同じロジックを使用して、配列とサブ配列の両方をループ処理することができます。 例:

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

これは `arr` の各サブ要素を一度に 1 つずつ出力します。 `arr[i]` 自体が配列であるため、内側のループでは `arr[i]` の `.length` をチェックしていることに注意してください。

# --instructions--

`arr` のサブ配列のすべての数値の積を返すように、関数 `multiplyAll` を変更してください。

# --hints--

`multiplyAll([[1], [2], [3]])` は `6` を返す必要があります。

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` は `5040` を返す必要があります。

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` は `54` を返す必要があります。

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
