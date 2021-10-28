---
id: 56533eb9ac21ba0edf2244c2
title: Devuelve un valor de una función utilizando "Return"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

Podemos pasar valores a una función con <dfn>argumentos</dfn>. Puedes utilizar una declaración de devolución (`return`) para enviar un valor fuera de una función.

**Ejemplo**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` tiene el valor `8`.

`plusThree` toma un <dfn>argumento</dfn> para `num` y devuelve un valor igual a `num + 3`.

# --instructions--

Crea una función `timesFive` que acepte un argumento, lo multiplique por `5`y devuelva el nuevo valor.

# --hints--

`timesFive` debe ser una función

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` debe devolver `25`

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` debe devolver `10`

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` debe devolver `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
