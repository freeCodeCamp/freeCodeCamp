---
id: 56533eb9ac21ba0edf2244d2
title: 不等運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

不相等運算符（`!=`）與相等運算符是相反的。 這意味着不相等並返回 `false` 的地方，用相等運算符會返回 `true`，*反之亦然*。 與相等運算符類似，不相等運算符在比較的時候也會轉換值的數據類型。

**例如**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

在 `if` 語句中添加不等式運算符 `!=` 以便函數在 `val` 不等於 `99` 時返回字符串 `Not Equal`。

# --hints--

`testNotEqual(99)` 應該返回字符串 `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` 應該返回字符串 `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` 應該返回字符串 `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` 應該返回字符串 `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` 應該返回字符串 `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

你應該使用 `!=` 運算符

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
