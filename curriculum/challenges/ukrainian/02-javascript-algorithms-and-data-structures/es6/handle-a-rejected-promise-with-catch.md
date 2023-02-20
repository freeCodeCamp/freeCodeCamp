---
id: 5cdafbe72913098997531682
title: Обробка відхилених промісів за допомогою catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` – це метод, який використовують тоді, коли проміс було відхилено. Він виконується одразу після виклику методу `reject`. Ось синтаксис:

```js
myPromise.catch(error => {

});
```

`error` є аргументом, переданим до методу `reject`.

# --instructions--

Додайте метод `catch` до свого промісу. Використайте `error` як параметр функції зворотного виклику та введіть `error` на консолі.

# --hints--

Ви повинні викликати метод `catch` на промісі.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

Ваш метод `catch` повинен мати функцію зворотного виклику з параметром `error`.

```js
assert(errorIsParameter);
```

Ви повинні ввести `error` на консолі.

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
