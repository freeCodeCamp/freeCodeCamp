---
id: 5cdafbb0291309899753167f
title: 創建一個 JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Promise 是異步編程的一種解決方案 - 它在未來的某時會生成一個值。 任務完成，分執行成功和執行失敗兩種情況。 `Promise` 是構造器函數，需要通過 `new` 關鍵字來創建。 構造器參數是一個函數，該函數有兩個參數 - `resolve` 和 `reject`。 通過它們來判斷 promise 的執行結果。 用法如下：

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

創建一個名爲 `makeServerRequest` 的 promise。 給構造器函數傳入 `resolve` 和 `reject` 兩個參數。

# --hints--

應該給名爲 `makeServerRequest` 的變量指定一個 promise。

```js
assert(makeServerRequest instanceof Promise);
```

promise 應該接收一個函數做爲參數，該函數應該包含 `resolve` 和 `reject` 兩個參數。

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
