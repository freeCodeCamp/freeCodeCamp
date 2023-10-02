---
id: 5cdafbe72913098997531682
title: 使用 catch 處理 Promise 失敗的情況
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

當 promise 失敗時會調用 `catch` 方法。 當 promise 的 `reject` 方法執行時會直接調用。 用法如下：

```js
myPromise.catch(error => {

});
```

`error` 是傳入 `reject` 方法的參數。

# --instructions--

給 promise 添加 `catch` 方法。 用 `error` 作爲回調函數的參數，並把 `error` 打印到控制檯。

# --hints--

應該在 promise 上調用 `catch` 方法。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

`catch` 方法應該有一個回調函數，回調函數參數爲 `error`。

```js
assert(errorIsParameter);
```

應該打印 `error` 到控制檯。

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
