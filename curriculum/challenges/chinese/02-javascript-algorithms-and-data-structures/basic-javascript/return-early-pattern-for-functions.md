---
id: 56533eb9ac21ba0edf2244c4
title: 函数执行到 return 语句就结束
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。

**示例**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

上面的代码输出"Hello"到控制台、返回 "World"，但没有输出`"byebye"`，因为函数遇到 return 语句就退出了。

# --instructions--

修改函数`abTest`当`a`或`b`小于0时，函数立即返回一个`undefined`并退出。

**提示**  
记住[`undefined` 是一个关键字](/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables)，而不是一个字符串。

# --hints--

`abTest(2,2)` 应该返回一个数字。

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2,2)` 应该返回 `8`。

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2,2)` 应该返回 `undefined`。

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2,-2)` 应该返回 `undefined`。

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2,8)` 应该返回 `18`。

```js
assert(abTest(2, 8) === 18);
```

`abTest(3,3)` 应该返回 `12`。

```js
assert(abTest(3, 3) === 12);
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
