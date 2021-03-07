---
id: 5cdafbb0291309899753167f
title: Crea una promesa de JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Una promesa en JavaScript es exactamente lo que suena, la usas para hacer una promesa de hacer algo, normalmente de forma asíncrona. Cuando la tarea se complete, cumple su promesa o no la cumple. `Promise` es una función constructora, así que tu necesitas usar la palabra clave `new` para crear una. Toma una función como su argumento, con dos parámetros - `resolve` y `reject`. Estos son métodos utilizados para determinar el resultado de la promesa. La sintaxis se ve así:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Crea una nueva promesa llamada `makeServerRequest`. Pase en una función con `resolve` y `reject` parámetros al constructor.

# --hints--

Debes asignar una promesa a una variable declarada con el nombre `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Tu promesa debe recibir una función con `resolve` y `reject` como parámetros.

```js
assert(
  code.match(
    /Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
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
