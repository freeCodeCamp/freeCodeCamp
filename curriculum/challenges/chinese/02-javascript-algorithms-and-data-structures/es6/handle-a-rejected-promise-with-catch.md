---
id: 5cdafbe72913098997531682
title: 在 catch 中处理 Promise 失败的情况
challengeType: 1
forumTopicId: 301204
---

# --description--

当 promise 失败时会调用 `catch` 方法。当 promise 的 `reject` 方法执行时会直接调用。用法如下：

```js
myPromise.catch(error => {
  // do something with the error.
});
```

`error` 是传入 `reject` 方法的参数。

**注意：** `then` 和 `catch` 方法可以在 promise 后面链式调用。

# --instructions--

给 promise 添加 `catch` 方法。用 `error` 做为回调函数的参数并把 `error` 打印到控制台。

# --hints--

应该在 promise 上调用 `catch` 方法。

```js
assert(codeWithoutSpaces.match(/(makeServerRequest|\))\.catch\(/g));
```

`catch` 方法应该有一个回调函数，函数参数为`error`。

```js
assert(errorIsParameter);
```

应该打印`error`到控制台。

```js
assert(
  errorIsParameter &&
    codeWithoutSpaces.match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --solutions--

