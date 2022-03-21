---
id: 56533eb9ac21ba0edf2244d0
title: 相等運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

在 JavaScript 中，有很多 <dfn>相互比較的操作</dfn>。 所有這些操作符都返回一個 `true` 或 `false` 值。

最基本的運算符是相等運算符：`==`。 相等運算符比較兩個值，如果它們是相等，返回 `true`，如果它們不相等，返回 `false`。 值得注意的是相等運算符不同於賦值運算符（`=`），賦值運算符是把等號右邊的值賦給左邊的變量。

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

如果 `myVal` 等於 `10`，相等運算符會返回 `true`，因此大括號裏面的代碼會被執行，函數將返回 `Equal`。 否則，函數返回 `Not Equal`。 在 JavaScript 中，爲了讓兩個不同的<dfn>數據類型</dfn>（例如 `numbers` 和 `strings`）的值可以作比較，它必須把一種類型轉換爲另一種類型。 這叫作 “類型強制轉換”。 轉換之後，可以像下面這樣來比較：

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

把相等運算符添加到指定的行，這樣當 `val` 的值爲 `12` 的時候，函數會返回 `Equal`。

# --hints--

`testEqual(10)` 應該返回字符串 `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` 應該返回字符串 `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` 應該返回字符串 `Equal`

```js
assert(testEqual('12') === 'Equal');
```

應該使用 `==` 運算符

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
