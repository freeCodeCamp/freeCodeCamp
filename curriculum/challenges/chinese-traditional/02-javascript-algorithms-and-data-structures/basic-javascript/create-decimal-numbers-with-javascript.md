---
id: cf1391c1c11feddfaeb4bdef
title: 創建一個小數
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

我們也可以把小數存儲到變量中。 小數有時候也被稱作<dfn>浮點數</dfn>或者 <dfn>floats</dfn>。

**提示：** 不是所有的實數都可以用浮點數（<dfn>floating point</dfn>）來表示。 因爲可能產生四捨五入的錯誤， [點擊這裏瞭解細節](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems)。

# --instructions--

創建一個變量 `myDecimal`，並給它賦值一個浮點數（例如 `5.7`)。

# --hints--

`myDecimal` 應該是一個數字。

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` 應該包含小數點。

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
