---
id: 587d7b7e367417b2b2512b22
title: Utiliza la función "parseInt" con Radix (Base)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

La función `parseInt()` analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero entre 2 y 36.

La llamada a la función se realiza de la siguiente manera:

```js
parseInt(string, radix);
```

Y aquí hay un ejemplo:

```js
const a = parseInt("11", 2);
```

La variable radix indica que `11` está en el sistema binario, o base 2. Este ejemplo convierte la cadena `11` a un entero `3`.

# --instructions--

Utiliza `parseInt()` en la función `convertToInteger` para convertir un número binario en un número entero, y devolverlo.

# --hints--

`convertToInteger` debe utilizar la función `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` debe devolver un número

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` debe devolver 19

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` debe devolver 57

```js
assert(convertToInteger('111001') === 57);
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

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
