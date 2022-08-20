---
id: 56533eb9ac21ba0edf2244d0
title: 相等运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

在 JavaScript 中，有很多 <dfn>相互比较的操作</dfn>。 所有这些操作符都返回一个 `true` 或 `false` 值。

最基本的运算符是相等运算符：`==`。 相等运算符比较两个值，如果它们是相等，返回 `true`，如果它们不相等，返回 `false`。 值得注意的是相等运算符不同于赋值运算符（`=`），赋值运算符是把等号右边的值赋给左边的变量。

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

如果 `myVal` 等于 `10`，相等运算符会返回 `true`，因此大括号里面的代码会被执行，函数将返回 `Equal`。 否则，函数返回 `Not Equal`。 在 JavaScript 中，为了让两个不同的<dfn>数据类型</dfn>（例如 `numbers` 和 `strings`）的值可以作比较，它必须把一种类型转换为另一种类型。 这叫作 “类型强制转换”。 转换之后，可以像下面这样来比较：

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

把相等运算符添加到指定的行，这样当 `val` 的值为 `12` 的时候，函数会返回 `Equal`。

# --hints--

`testEqual(10)` 应该返回字符串 `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` 应该返回字符串 `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` 应该返回字符串 `Equal`

```js
assert(testEqual('12') === 'Equal');
```

应该使用 `==` 运算符

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
