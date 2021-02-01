---
id: 587d7b7e367417b2b2512b22
title: 使用 parseInt 函数并传入一个基数
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

`parseInt()`函数解析一个字符串并返回一个整数。它同时可接受第二个参数，一个介于2和36之间的整数，表示字符串的基数。

函数调用如下所示：

`parseInt(string, radix);`

示例：

`var a = parseInt("11", 2);`

参数 2 表示 "11" 使用二进制数值系统。此示例将字符串 "11" 转换为整数 3。

# --instructions--

在`convertToIntegerparseInt()`函数把二进制数转换成十进制并返回。

# --hints--

`convertToInteger`中应该使用`parseInt()`函数。

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")`应该返回一个数字。

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")`应该返回 19。

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")`应该返回 57。

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")`应该返回 NaN。

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
