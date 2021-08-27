---
id: cf1111c1c12feddfaeb1bdef
title: 使用 JavaScript 生成隨機整數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

生成隨機小數很棒，但隨機數更有用的地方在於生成隨機整數。

<ol><li>用 <code>Math.random()</code> 生成一個隨機小數。</li><li>把這個隨機小數乘以 <code>20</code>。</li><li>用 <code>Math.floor()</code> 向下取整，獲得它最近的整數。</li></ol>

記住 `Math.random()` 永遠不會返回 `1`。同時因爲我們是在向下取整，所以最終我們獲得的結果不可能有 `20`。 這確保了我們獲得了一個在 `0` 到 `19` 之間的整數。

把操作連綴起來，代碼類似於下面：

```js
Math.floor(Math.random() * 20);
```

我們先調用 `Math.random()`，把它的結果乘以 20，然後把上一步的結果傳給 `Math.floor()`，最終通過向下取整獲得最近的整數。

# --instructions--

使用這個方法生成並返回 `0` 和 `9` 之間的隨機整數。

# --hints--

`randomWholeNum` 的結果應該是一個整數。

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

應該使用 `Math.random` 生成一個隨機數字。

```js
assert(code.match(/Math.random/g).length >= 1);
```

應該將 `Math.random` 的結果乘以 10，以生成 0 到 9 之間的隨機數。

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

應該使用 `Math.floor` 來刪除數字的十進制部分。

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
