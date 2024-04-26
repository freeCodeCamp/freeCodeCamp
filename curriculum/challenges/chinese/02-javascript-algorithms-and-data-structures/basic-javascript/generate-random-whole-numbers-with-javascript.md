---
id: cf1111c1c12feddfaeb1bdef
title: 使用 JavaScript 生成随机整数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

你可以用 `Math.random()` 生成随机的小数，但有时你需要生成随机的整数。 下面的流程将给你一个小于 `20` 的随机整数：

1. 用 `Math.random()` 生成一个随机小数。
2. 把这个随机小数乘以 `20`。
3. 用 `Math.floor()` 向下取整，获得它最近的整数。

记住 `Math.random()` 永远不能完全返回 `1`，所以不可能实际得到 `20`，因为你正在用 `Math.floor()` 四舍五入。 这个流程将给你一个从 `0` 到 `19` 的随机整数。

把操作连起来，代码类似于下面：

```js
Math.floor(Math.random() * 20);
```

你将调用 `Math.random()`，把结果乘以 20，然后把值传给 `Math.floor()`，向下取整获得最近的整数。

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
assert(__helpers.removeJSComments(code).match(/Math.random/g).length >= 1);
```

应该将 `Math.random` 的结果乘以 10，以生成 0 到 9 之间的随机数。

```js
assert(
  __helpers.removeJSComments(code).match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    __helpers.removeJSComments(code).match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

应该使用 `Math.floor` 来删除数字的十进制部分。

```js
assert(__helpers.removeJSComments(code).match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
