---
id: cf1111c1c11feddfaeb9bdef
title: 使用 JavaScript 生成随机分数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

随机数非常适合用来创建随机行为。

在 JavaScript 中，可以用 `Math.random()` 生成一个在`0`（包括 0）到 `1`（不包括 1）之间的随机小数。 因此 `Math.random()` 可能返回 `0`，但绝不会返回 `1`。

**提示：**<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">使用赋值运算符存储值</a>这一节讲过，所有函数调用将在 `return` 执行之前结束，因此我们可以 `return`（返回）`Math.random()` 函数的值。

# --instructions--

更改 `randomFraction`，使其返回一个随机数而不是 `0`。

# --hints--

`randomFraction` 应该返回一个随机数。

```js
assert(typeof randomFraction() === 'number');
```

`randomFraction` 应该返回一个小数。

```js
assert((randomFraction() + '').match(/\./g));
```

需要使用 `Math.random` 生成随机的小数。

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
