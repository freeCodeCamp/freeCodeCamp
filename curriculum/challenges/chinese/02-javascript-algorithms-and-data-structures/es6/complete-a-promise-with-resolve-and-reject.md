---
id: 5cdafbc32913098997531680
title: 通过 resolve 和 reject 完成 Promise
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

promise 有三个状态：`pending`、`fulfilled` 和 `rejected`。上一个挑战里创建的 promise 一直阻塞在 `pending` 状态里，因为没有调用 promise 的完成方法。promise 提供的 `resolve` 和 `reject` 参数就是用来结束 promise 的。promise 成功时调用 `resolve`，promise 执行失败时调用 `reject`，这两个方法接收一个参数，如下所示。

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

上面的例子使用字符串做为函数的参数，也可以是任意类型，通常会是对象，里面可能是将要放到页面或其它地方的数据。

# --instructions--

使 promise 可以处理成功和失败情况。如果 `responseFromServer` 是 `true`，调用 `resolve` 方法使 promise 成功。给 `resolve` 传递值为 `We got the data` 的字符串。如果 `responseFromServer` 是 `false`， 使用 `reject` 方法并传入值为 `Data not received` 的字符串。

# --hints--

当 `if` 条件是 `true` 时应该执行 `resolve`。

```js
assert(
  removeJSComments(code).match(
    /if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g
  )
);
```

当 `if` 条件是 `false` 时应该执行 `reject`。

```js
assert(
  removeJSComments(code).match(
    /}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g
  )
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
