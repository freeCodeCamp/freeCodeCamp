---
id: 5cdafbd72913098997531681
title: Gestire una promise mantenuta con then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Le promise sono più utili quando hai nel codice un processo che richiede una quantità sconosciuta di tempo (cioè qualcosa di asincrono), spesso una richiesta al server. Quando si effettua una richiesta ad un server questa prende un certo lasso di tempo, e, dopo che si è conclusa, di solito si desidera fare qualcosa con la risposta del server. Questo risultato può essere ottenuto utilizzando il metodo `then`.

```js
Promise.prototype.then(onFulfilled, onRejected)
```

The `then` method schedules callback functions for the eventual completion of a Promise - either fulfillment or rejection. One of the `onFulfilled` and `onRejected` handlers will be executed to handle the current promise's fulfillment or rejection. When the promise is fulfilled with `resolve` the `onFulfilled` handler is called.

```js
myPromise.then(result => {

});
```

`result` deriva dall'argomento dato al metodo `resolve`.

# --instructions--

Aggiungi il metodo `then` alla tua promise. Usa `result` come parametro della sua funzione di callback e scrivi `result` sulla console.

# --hints--

Dovresti chiamare il metodo `then` sulla promise.

```js
assert(
  __helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/(makeServerRequest|\))\.then\(/g)
);
```

Il tuo metodo `then` dovrebbe avere una funzione di callback con `result` come parametro.

```js
assert(resultIsParameter);
```

Dovresti scrivere `result` sulla console.

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(__helpers.removeJSComments(code))
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(__helpers.removeJSComments(code)));
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
