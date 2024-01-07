---
id: cf1111c1c11feddfaeb4bdef
title: 减法运算
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

我们也可以在 JavaScript 中进行减法运算。

JavaScript 中使用 `-` 来做减法运算。

**示例**

```js
const myVar = 12 - 6;
```

现在，变量 `myVar` 的值为 `6`。
# --instructions--

改变数字 `0` 让变量 difference 的值为 `12`。

# --hints--

变量 `difference` 的值应该为 `12`。

```js
assert(difference === 12);
```

你只能从 `45` 中减去一个数。

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```
