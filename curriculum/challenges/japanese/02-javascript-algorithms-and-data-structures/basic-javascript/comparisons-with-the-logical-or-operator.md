---
id: 56533eb9ac21ba0edf2244d9
title: 論理和演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

<dfn>論理和</dfn> 演算子 (`||`) は、<dfn>オペランド</dfn> のいずれかが `true` である場合に `true` を返します。 それ以外の場合は、`false` を返します。

<dfn>論理和</dfn>演算子は 2 本のパイプ記号 (`||`) で構成されます。 この記号のキーは通常、バックスペースキーと Enter キーの間近くにあります。

次のようなパターンは以前のチャレンジでも登場しています。

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

上の例は、`num` が `5` と `10` の間 (5 と 10 を含む) の場合のみ、`Yes` を返します。 同じロジックを次のように記述することができます。

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

2つの `if` ステートメントを 1 つのステートメントにまとめて、`val` が `10` 以上 `20` 以下でない場合は文字列 `Outside` を返すようにしてください。 それ以外の場合は、文字列 `Inside` を返してください。

# --hints--

`||`演算子を 1 回使用してください。

```js
assert(code.match(/\|\|/g).length === 1);
```

`if` ステートメントを 1 つだけにする必要があります。

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` は文字列 `Outside` を返す必要があります。

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` は文字列 `Outside` を返す必要があります。

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` は文字列 `Inside` を返す必要があります。

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` は文字列 `Inside` を返す必要があります。

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` は文字列 `Inside` を返す必要があります。

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` は文字列 `Inside` を返す必要があります。

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` は文字列 `Outside` を返す必要があります。

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` は文字列 `Outside` を返す必要があります。

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
