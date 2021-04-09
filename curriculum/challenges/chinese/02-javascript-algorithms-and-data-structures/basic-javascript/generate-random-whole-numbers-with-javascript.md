---
id: cf1111c1c12feddfaeb1bdef
title: 使用 JavaScript 生成随机整数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

生成随机小数很棒，但随机数更有用的地方在于生成随机整数。

<ol><li>用 <code>Math.random()</code> 生成一个随机小数。</li><li>把这个随机小数乘以 <code>20</code>。</li><li>用 <code>Math.floor()</code> 向下取整，获得它最近的整数。</li></ol>

记住 `Math.random()` 永远不会返回 `1`。同时因为我们是在向下取整，所以最终我们获得的结果不可能有 `20`。 这确保了我们获得了一个在 `0` 到 `19` 之间的整数。

把操作连缀起来，代码类似于下面：

```js
Math.floor(Math.random() * 20);
```

我们先调用 `Math.random()`，把它的结果乘以 20，然后把上一步的结果传给 `Math.floor()`，最终通过向下取整获得最近的整数。

# --instructions--

使用这个方法生成并返回 `0` 和 `9` 之间的随机整数。

# --hints--

`randomWholeNum` 的结果应该是一个整数。

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

应该使用 `Math.random` 生成一个随机数字。

```js
assert(code.match(/Math.random/g).length >= 1);
```

应该将 `Math.random` 的结果乘以 10，以生成 0 到 9 之间的随机数。

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

应该使用 `Math.floor` 来删除数字的十进制部分。

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
