---
id: 5cdafbe72913098997531682
title: 使用 catch 处理 Promise 失败的情况
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

当 promise 失败时会调用 `catch` 方法。 当 promise 的 `reject` 方法执行时会直接调用。 用法如下：

```js
myPromise.catch(error => {

});
```

`error` 是传入 `reject` 方法的参数。

# --instructions--

给 promise 添加 `catch` 方法。 用 `error` 作为回调函数的参数，并把 `error` 打印到控制台。

# --hints--

应该在 promise 上调用 `catch` 方法。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

`catch` 方法应该有一个回调函数，回调函数参数为 `error`。

```js
assert(errorIsParameter);
```

应该打印 `error` 到控制台。

```js
assert(
  errorIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
