---
id: 5cdafbb0291309899753167f
title: 创建一个 JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Promise 是异步编程的一种解决方案 - 它在未来的某时会生成一个值。 任务完成，分执行成功和执行失败两种情况。 `Promise` 是构造器函数，需要通过 `new` 关键字来创建。 构造器参数是一个函数，该函数有两个参数 - `resolve` 和 `reject`。 通过它们来判断 promise 的执行结果。 用法如下：

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

创建一个名为 `makeServerRequest` 的 promise。 给构造器函数传入 `resolve` 和 `reject` 两个参数。

# --hints--

应该给名为 `makeServerRequest` 的变量指定一个 promise。

```js
assert(makeServerRequest instanceof Promise);
```

promise 应该接收一个函数做为参数，该函数应该包含 `resolve` 和 `reject` 两个参数。

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
