---
id: 5cdafbb0291309899753167f
title: Crea una promesa de JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o no la cumples. `Promise` es una función constructora, así que tu necesitas usar la palabra clave `new` para crear una. Recibe una función como su argumento, con dos parámetros: `resolve` y `reject`. Estos métodos se utilizan para determinar el resultado de la promesa. Su sintaxis se ve así:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Crea una nueva promesa llamada `makeServerRequest`. Pásale una función con parámetros `resolve` y `reject` al constructor.

# --hints--

Debes asignar una promesa a una variable declarada con el nombre `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Tu promesa debe recibir una función con `resolve` y `reject` como parámetros.

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
