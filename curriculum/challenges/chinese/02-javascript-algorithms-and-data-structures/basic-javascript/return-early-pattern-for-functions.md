---
id: 56533eb9ac21ba0edf2244c4
title: 函数执行到 return 语句就结束
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

当代码执行到 `return` 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。

**示例**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

以上将在控制台中显示字符串 `Hello` 并返回字符串 `World`。 字符串 `byebye` 将永远不会在控制台中显示，因为函数在 `return` 语句处就退出了。

# --instructions--

修改函数 `abTest` 当 `a` 或 `b` 小于 `0` 时，函数立即返回一个 `undefined` 并退出。

**提示**  
记住 <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> 是关键字 </a>，不是字符串.

# --hints--

`abTest(2, 2)` 应该返回一个数字

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` 应该返回 `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` 应该返回 `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` 应该返回 `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` 应该返回 `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` 应该返回 `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` 应该返回 `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
