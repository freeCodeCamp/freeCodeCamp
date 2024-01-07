---
id: cf1111c1c11feddfaeb9bdef
title: 使用 JavaScript 生成隨機分數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

隨機數非常適合用來創建隨機行爲。

在 JavaScript 中，可以用 `Math.random()` 生成一個在`0`（包括 0）到 `1`（不包括 1）之間的隨機小數。 因此 `Math.random()` 可能返回 `0`，但絕不會返回 `1`。

**提示：**<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">使用賦值運算符存儲值</a>這一節講過，所有函數調用將在 `return` 執行之前結束，因此我們可以 `return`（返回）`Math.random()` 函數的值。

# --instructions--

更改 `randomFraction`，使其返回一個隨機數而不是 `0`。

# --hints--

`randomFraction` 應該返回一個隨機數。

```js
assert(typeof randomFraction() === 'number');
```

`randomFraction` 應該返回一個小數。

```js
assert((randomFraction() + '').match(/\./g));
```

需要使用 `Math.random` 生成隨機的小數。

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
