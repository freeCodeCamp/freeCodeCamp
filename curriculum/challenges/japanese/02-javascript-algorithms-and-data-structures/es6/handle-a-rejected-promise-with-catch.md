---
id: 5cdafbe72913098997531682
title: 拒否されたプロミスを catch で処理する
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` は、プロミスが拒否されたときに使用するメソッドで、 プロミスの `reject` メソッドが呼び出された直後に実行されます。 構文は次のとおりです。

```js
myPromise.catch(error => {

});
```

`error` は `reject` メソッドに渡される引数です。

# --instructions--

`catch` メソッドをプロミスに追加してください。 `error` をコールバック関数のパラメーターとして使用し、コンソールに `error` を出力してください。

# --hints--

プロミスで `catch` メソッドを呼び出す必要があります。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

`catch` メソッドでは、`error` をパラメーターとするコールバック関数を記述する必要があります。

```js
assert(errorIsParameter);
```

コンソールに `error` を出力する必要があります。

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
