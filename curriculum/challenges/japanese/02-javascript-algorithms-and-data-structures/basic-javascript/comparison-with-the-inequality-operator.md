---
id: 56533eb9ac21ba0edf2244d2
title: 不等価演算子による比較
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

不等価演算子 (`!=`) は等価演算子の逆です。 つまり、等価演算子では等しくない場合に `false` を返していたところを、不等価演算子では `true` を返します。*逆の場合も同様です*。 等価演算子と同様に、不等価演算子でも比較時に値のデータ型が変換されます。

**例**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Add the inequality operator `!=` in the `if` statement so that the function will return the string `Not Equal` when `val` is not equivalent to `99`.

# --hints--

`testNotEqual(99)` should return the string `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` should return the string `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` should return the string `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` should return the string `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` should return the string `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

You should use the `!=` operator

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
