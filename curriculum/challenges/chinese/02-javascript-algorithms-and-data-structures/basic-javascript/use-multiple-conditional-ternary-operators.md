---
id: 587d7b7e367417b2b2512b21
title: 使用多个三元运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

在之前的挑战中，你使用了一个条件运算符。 你也可以将多个运算符串联在一起以检查多种条件。

下面的函数使用 `if`，`else if` 和 `else` 语句来检查多个条件：

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

以上函数可以使用多个三元运算符重写：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

如上文所示，对多个三元运算符进行每个条件都是单独一行的格式化被认为是最佳做法。 使用多个三元运算符而没有适当的缩进可能会使您的代码难以理解。 例如：

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

在 `checkSign` 函数中使用多个三元运算符来检查数字是正数 ("positive")、负数 ("negative") 或零 ("zero")，使用 `findGreaterOrEqual` 里面的建议缩进格式。 函数应返回 `positive`、`negative` 或 `zero`。

# --hints--

`checkSign` 应该使用多个三元运算符。

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` 应该返回字符串 `positive`。 注意区分大写字母和小写字母。

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` 应该返回字符串 `negative`。 注意区分大写字母和小写字母。

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` 应该返回字符串 `zero`. 注意区分大写字母和小写字母。

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
