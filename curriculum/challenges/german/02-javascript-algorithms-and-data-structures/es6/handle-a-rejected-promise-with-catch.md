---
id: 5cdafbe72913098997531682
title: Abgelehntes Promise mit catch behandeln
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` ist die Methode, die verwendet wird, wenn dein Promise abgelehnt wurde. Sie wird sofort nach dem Aufruf der Methode `reject` eines Promise ausgeführt. Hier ist die Syntax:

```js
myPromise.catch(error => {

});
```

`error` ist das Argument, das an die Methode `reject` übergeben wird.

# --instructions--

Füge die Methode `catch` zu deinem Promise hinzu. Verwende `error` als Parameter der Callback-Funktion und logge `error` auf der Konsole.

# --hints--

Du solltest die Methode `catch` für das Promise aufrufen.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

Deine Methode `catch` sollte eine Callback-Funktion mit `error` als Parameter haben.

```js
assert(errorIsParameter);
```

Du solltest `error` auf der Konsole loggen.

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
