---
id: 5cdafbd72913098997531681
title: Обробка виконаних промісів за допомогою then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Проміси найкорисніші, якщо у вашому коді відбувається процес, який займає невизначений проміжок часу (тобто асинхронний процес). Наприклад, запит до сервера. Створення запиту до сервера займає певний час, а після його завершення, зазвичай, передбачаються подальші дії з відповіддю сервера. Цього можна досягти за допомогою методу `then`. Метод `then` виконується одразу після того, як проміс успішно підтвердив свій параметр `resolve`. Ось приклад:

```js
myPromise.then(result => {

});
```

`result` походить від аргумента, переданого до методу `resolve`.

# --instructions--

Додайте метод `then` до свого промісу. Використайте `result` як параметр функції зворотного виклику та введіть `result` на консолі.

# --hints--

Ви повинні викликати метод `then` на промісі.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

Ваш метод `then` повинен мати функцію зворотного виклику з параметром `result`.

```js
assert(resultIsParameter);
```

Ви повинні ввести `result` на консолі.

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
