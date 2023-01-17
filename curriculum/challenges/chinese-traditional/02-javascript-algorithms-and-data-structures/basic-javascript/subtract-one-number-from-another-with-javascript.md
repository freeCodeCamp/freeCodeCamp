---
id: cf1111c1c11feddfaeb4bdef
title: 減法運算
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

我們也可以在 JavaScript 中進行減法運算。

JavaScript 中使用 `-` 來做減法運算。

**示例**

```js
const myVar = 12 - 6;
```

現在，變量 `myVar` 的值爲 `6`。
# --instructions--

改變數字 `0` 讓變量 difference 的值爲 `12`。

# --hints--

變量 `difference` 的值應該爲 `12`。

```js
assert(difference === 12);
```

你只能從 `45` 中減去一個數。

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
