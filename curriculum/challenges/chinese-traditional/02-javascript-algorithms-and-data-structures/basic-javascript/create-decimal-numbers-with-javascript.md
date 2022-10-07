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

**注意：** 當你計算數字時，它們是以有限的精確度計算的。 使用浮點數的運算可能產生不同於預期結果的結果。 如果你生成了一個非預期的結果，請在 <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp 論壇</a>上創建一個話題進行說明。

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
