---
id: 587d7b7e367417b2b2512b22
title: 使用 parseInt 函数并传入一个基数
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

`parseInt()` 函数解析一个字符串并返回一个整数。 它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36 之间的整数。

函数调用如下所示：

```js
parseInt(string, radix);
```

这是一个示例：

```js
const a = parseInt("11", 2);
```

变量 radix 表示 `11` 是在二进制系统中。 这个示例将字符串 `11` 转换为整数 `3`。

# --instructions--

在 `convertToInteger` 函数中使用 `parseInt()` ，将二进制数转换为整数并返回。

# --hints--

`convertToInteger` 应该使用 `parseInt()` 函数。

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` 应该返回一个数字。

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` 应该返回 19。

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` 应该返回 57。

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")`应该返回 `NaN`。

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
