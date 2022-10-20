---
id: bd7993c9ca9feddfaeb7bdef
title: 两个小数相除
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

现在让我们将一个小数除以另一个小数。

# --instructions--

改变数值 `0.0` 的值让变量 `quotient` 的值等于 `2.2`。

# --hints--

`quotient` 的值应该等于`2.2`。

```js
assert(quotient === 2.2);
```

使用 `/` 运算符将 4.4 除以 2。

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
```

quotient 变量应该只被赋值一次。

```js
assert(code.match(/quotient/g).length === 1);
```

# --seed--

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```
