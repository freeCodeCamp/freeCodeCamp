---
id: 5cdafbd72913098997531681
title: Вирішіть проблему Promise у стані Fulfilled за допомогою then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Promises надзвичайно корисні, коли у вашому коді відбувається процес, що займає невизначений період часу (тобто асинхронний процес), наприклад, запит до сервера. Створення запиту до сервера займає певний час, а після його завершення, зазвичай, передбачаються подальші дії з відповіддю сервера. Цього можна досягти за допомогою методу `then`. Метод `then` виконується одразу після того, як ваш Promise входить у стан Fulfilled `resolve`. Наприклад:

```js
myPromise.then(result => {

});
```

`result` отримується за допомогою аргументу та методу `resolve`.

# --instructions--

Додайте до вашого Promise метод `then`. Використовуйте `result` як параметр для функції зворотного виклику та зазначте `result` у консолі.

# --hints--

Слід викликати метод `then` для Promise.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

Ваш метод `then` повинен мати функцію зворотного виклику з `result` у якості параметра.

```js
assert(resultIsParameter);
```

Ви маєте зазначити `result` у консолі.

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
