---
id: 56533eb9ac21ba0edf2244d0
title: 等価演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

JavaScript には多くの<dfn>比較演算子</dfn>があります。 これらの演算子はすべてブール値の `true` または `false` を返します。

最も基本的な演算子は等価演算子 `==` です。 等価演算子は 2 つの値を比較し、等価な場合は `true` を、そうでない場合は `false` を返します。 等価は代入 (`=`) とは異なることに注意してください。代入は演算子の右側の値を左側の変数に割り当てるものです。

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

`myVal` が `10` と等しい場合には、等価演算子は `true` を返し、中括弧内のコードが実行されて、関数は `Equal` を返します。 それ以外の場合、関数は `Not Equal` を返します。 JavaScript では、比較する 2 つのデータの<dfn>データ型</dfn>が異なる場合 (たとえば `numbers` と `strings`)、必ず一方の型が他方の型に変換されます。 これを「型強制」と呼びます。 これが行われることで、次のような値の比較が可能になります。

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

`val` が `12` と等しい場合に関数が文字列 `Equal` を返すように、指定された行に等価演算子を追加してください。

# --hints--

`testEqual(10)` は文字列 `Not Equal` を返す必要があります。

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` は文字列 `Equal` を返す必要があります。

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` は文字列 `Equal` を返す必要があります。

```js
assert(testEqual('12') === 'Equal');
```

`==` 演算子を使用してください。

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
