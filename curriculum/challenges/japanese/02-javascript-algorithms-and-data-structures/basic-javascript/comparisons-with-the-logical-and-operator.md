---
id: 56533eb9ac21ba0edf2244d8
title: 論理積演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

一度に複数の条件をテストしなければならない場合があります。 <dfn>論理積</dfn>演算子 (`&&`) は、左側と右側の<dfn>オペランド</dfn>の両方が true である場合にのみ `true` を返します。

if ステートメントを別の if ステートメントにネストしても、同じ効果が得られます。

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

上の例は、`num` が `5` より大きく `10` より小さい場合にのみ `Yes` を返します。 同じロジックを次のように記述することができます。

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

`&&` 演算子を使用して、2つの if ステートメントを 1 つのステートメントにしてください。このプログラムは `val` が `25` 以上 `50` 以下の場合に文字列 `Yes` を返します。 それ以外の場合は文字列 `No` を返します。

# --hints--

`&&` 演算子を 1 回使用してください。

```js
assert(code.match(/&&/g).length === 1);
```

`if` ステートメントを 1 つだけにする必要があります。

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` は文字列 `No` を返す必要があります。

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` は文字列 `No` を返す必要があります。

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` は文字列 `Yes` を返す必要があります。

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` は文字列 `Yes` を返す必要があります。

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` は文字列 `Yes` を返す必要があります。

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` は文字列 `No` を返す必要があります。

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` は文字列 `No` を返す必要があります。

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` は文字列 `No` を返す必要があります。

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
