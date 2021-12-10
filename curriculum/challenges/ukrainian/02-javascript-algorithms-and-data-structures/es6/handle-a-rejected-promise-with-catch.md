---
id: 5cdafbe72913098997531682
title: Обробка винятків відхиленої Promise
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` - це метод, який використовується коли ваша Promise була відхилена. Це буде виконано одразу після запуску алгоритму `reject`. Ось синтаксис:

```js
myPromise.catch(error => {

});
```

`error` передана в метод `reject`.

# --instructions--

Додайте до вашого Promise метод `catch`. Використовуйте `error` у якості параметра для функції зворотного виклику та зазначте `error` у консолі.

# --hints--

Слід використати метод `catch` для Promise.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

Ваш метод `catch` повинен мати функцію зворотнього виклику з `error` у якості параметра.

```js
assert(errorIsParameter);
```

Ви маєте зазначити `error` у консолі.

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
