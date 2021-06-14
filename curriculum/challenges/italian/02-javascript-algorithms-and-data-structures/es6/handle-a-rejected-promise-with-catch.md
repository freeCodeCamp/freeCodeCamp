---
id: 5cdafbe72913098997531682
title: Gestire una promise rifiutata con catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` è il metodo utilizzato quando una promise è stata respinta. Viene eseguito immediatamente dopo che viene chiamato il metodo `reject` di una promise. Ecco la sintassi:

```js
myPromise.catch(error => {

});
```

`error` è l'argomento passato al metodo `reject`.

# --instructions--

Aggiungi il metodo `catch` alla tua promise. Usa `error` come parametro della sua funzione di callback e scrivi `error` sulla console.

# --hints--

Dovresti chiamare il metodo `catch` sulla promise.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

Il tuo metodo `catch` dovrebbe avere una funzione di callback con `error` come parametro.

```js
assert(errorIsParameter);
```

Dovresti visualizzare `error` nella console.

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
