---
id: 5cdafbd72913098997531681
title: 用 then 處理 Promise 完成的情況
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

當程序需要花費未知的時間才能完成時（比如一些異步操作），一般是服務器請求，promise 很有用。 服務器請求會花費一些時間，當結束時，需要根據服務器的響應執行一些操作。 這可以用 `then` 方法來實現， 當 promise 完成 `resolve` 時會觸發 `then` 方法。 例子如下：

```js
myPromise.then(result => {

});
```

`result` 即傳入 `resolve` 方法的參數。

# --instructions--

給 promise 添加 `then` 方法。 用 `result` 做爲回調函數的參數並將 `result` 打印在控制檯。

# --hints--

應該給 promise 方法調用 `then` 方法。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

`then` 方法應該有一個回調函數，回調函數參數爲 `result`。

```js
assert(resultIsParameter);
```

應該打印 `result` 到控制檯。

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

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
