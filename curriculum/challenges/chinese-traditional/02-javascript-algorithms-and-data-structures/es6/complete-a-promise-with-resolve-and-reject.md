---
id: 5cdafbc32913098997531680
title: 通過 resolve 和 reject 完成 Promise
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Promise 有三個狀態：`pending`、`fulfilled` 和 `rejected`。 上一個挑戰裏創建的 promise 一直阻塞在 `pending` 狀態裏，因爲沒有調用 promise 的完成方法。 Promise 提供的 `resolve` 和 `reject` 參數就是用來結束 promise 的。 Promise 成功時調用 `resolve`，promise 執行失敗時調用 `reject`， 如下文所述，這些方法需要有一個參數。

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

上面的示例使用字符串作爲這些函數的參數，但參數實際上可以是任何格式。 通常，它可能是一個包含數據的對象，你可以將它放在網站或其他地方。

# --instructions--

使 promise 可以處理成功和失敗情況。 如果 `responseFromServer` 是 `true`，調用 `resolve` 方法使 promise 成功。 給 `resolve` 傳遞值爲 `We got the data` 的字符串。 如果 `responseFromServer` 是 `false`， 使用 `reject` 方法並傳入值爲 `Data not received` 的字符串。

# --hints--

當 `if` 條件是 `true` 時應該執行 `resolve`。

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

當 `if` 條件是 `false` 時應該執行 `reject`。

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
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
