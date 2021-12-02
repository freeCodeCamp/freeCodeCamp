---
id: 56533eb9ac21ba0edf2244da
title: 介绍 else 语句
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

当 `if` 语句的条件为真，会执行大括号里的代码。 那如果条件为假呢？ 正常情况下什么也不会发生。 使用 `else` 语句，可以执行当条件为假时相应的代码。

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

请把多个 `if` 语句合并为一个 `if/else` 语句。

# --hints--

应该只有一个 `if` 语句。

```js
assert(code.match(/if/g).length === 1);
```

应该使用一个 `else` 语句。

```js
assert(/else/g.test(code));
```

`testElse(4)` 应该返回字符串 `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` 应该返回字符串 `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` 应该返回字符串 `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` 应该返回字符串 `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

不要修改相应注释的上面或下面的代码。

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
