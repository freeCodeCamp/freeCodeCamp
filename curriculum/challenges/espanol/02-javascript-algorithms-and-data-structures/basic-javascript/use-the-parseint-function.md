---
id: 587d7b7e367417b2b2512b23
title: Utiliza la función "parseInt"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

La función `parseInt()` analiza una cadena y devuelve un entero. A continuación, te presentamos un ejemplo:

```js
const a = parseInt("007");
```

La función anterior convierte la cadena `007` al entero `7`. Si el primer carácter de la cadena no puede ser convertido en un número, entonces devuelve `NaN`.

# --instructions--

Utiliza `parseInt()` en la función `convertToInteger` para convertir la cadena de entrada `str` a un número entero, y devuélvelo.

# --hints--

`convertToInteger` debe utilizar la función `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` debe devolver un número

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` debe devolver 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` debe devolver 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` debe devolver `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
