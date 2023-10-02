---
id: 5cdafbd72913098997531681
title: Ein erfülltes Promise mit then bearbeiten
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Promises sind besonders nützlich, wenn du einen Prozess in deinem Code hast, der eine unbekannte Zeitspanne in Anspruch nimmt (d.h. etwas asynchrones), oft eine Serveranfrage. Wenn du eine Serveranfrage stellst, dauert es eine gewisse Zeit, und nachdem sie abgeschlossen ist, willst du normalerweise etwas mit der Antwort des Servers machen. Das kannst du mit der Methode `then` erreichen. Die Methode `then` wird sofort ausgeführt, nachdem dein Promise mit `resolve` erfüllt wurde. Hier ist ein Beispiel:

```js
myPromise.then(result => {

});
```

`result` ergibt sich aus dem Argument, das der Methode `resolve` übergeben wird.

# --instructions--

Füge die Methode `then` zu deinem Promise hinzu. Verwende `result` als Parameter der Callback-Funktion und logge `result` auf der Konsole.

# --hints--

Du solltest die Methode `then` für das Versprechen aufrufen.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
);
```

Deine Methode `then` sollte eine Callback-Funktion mit `result` als Parameter besitzen.

```js
assert(resultIsParameter);
```

Du solltest `result` auf der Konsole loggen.

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
