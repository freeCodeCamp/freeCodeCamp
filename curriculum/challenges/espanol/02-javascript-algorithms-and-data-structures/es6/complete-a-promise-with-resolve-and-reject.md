---
id: 5cdafbc32913098997531680
title: Cumpleta una promesa con "resolve" y "reject"
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Una promesa tiene tres estados: `pending`, `fulfilled`, y `rejected`. La promesa que creaste en el último desafío está atascada en el estado `pending` porque no añadiste una forma de completar la promesa. Los parámetros `resolve` y `reject` enviados a "promise" como argumentos, son utilizados para hacer lo siguiente. `resolve` se utiliza cuando quieres que tu promesa tenga éxito, y `reject` se usa cuando quieres que falle. Estos son métodos que toman un argumento, como se ve a continuación.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier otra cosa. El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.

# --instructions--

Haz una función promesa que maneje el éxito y el fallo. Si `responseFromServer` es `true`, llama al método `resolve` para completar satisfactoriamente la promesa. Pasa a `resolve` una cadena con el valor `We got the data`. Si `responseFromServer` es `false`, utiliza el método `reject` y devuelve la cadena: `Data not received`.

# --hints--

`resolve` debe ser llamada con la cadena esperada, cuando la condición `if` es `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` debe ser llamada con la cadena esperada, cuando la condición `if` es `false`.

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
