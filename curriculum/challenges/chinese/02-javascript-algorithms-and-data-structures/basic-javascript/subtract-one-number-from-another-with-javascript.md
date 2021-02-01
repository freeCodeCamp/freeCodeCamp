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

JavaScript 中使用`-`来做减法运算。

**示例**

```js
myVar = 12 - 6; // assigned 6
```

# --instructions--

改变数字`0`让变量 difference 的值为`12`。

# --hints--

要使`difference`的值等于 12。

```js
assert(difference === 12);
```

只用 45 减去一个数。

```js
assert(/var\s*difference\s*=\s*45\s*-\s*[0-9]*;(?!\s*[a-zA-Z0-9]+)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
var difference = 45 - 0;
```

# --solutions--

```js
var difference = 45 - 33;
```
