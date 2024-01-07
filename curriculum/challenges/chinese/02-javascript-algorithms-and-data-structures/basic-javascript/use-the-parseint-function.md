---
id: 587d7b7e367417b2b2512b23
title: 使用 parseInt 函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

`parseInt()` 函数解析一个字符串返回一个整数。 下面是一个示例：

```js
const a = parseInt("007");
```

上述函数将字符串 `007` 转换为整数 `7`。 如果字符串中的第一个字符不能转换为数字，则返回 `NaN`。

# --instructions--

在 `convertToInteger` 函数中使用 `parseInt()` 将字符串 `str` 转换为一个整数，并返回这个值。

# --hints--

`convertToInteger` 中应该使用 `parseInt()` 函数。

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` 应该返回一个数字。

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` 应该返回 56。

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` 应该返回 77。

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` 应该返回 `NaN`。

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
