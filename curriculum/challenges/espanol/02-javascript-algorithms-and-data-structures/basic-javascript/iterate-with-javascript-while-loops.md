---
id: cf1111c1c11feddfaeb1bdef
title: Itera con el bucle "while" de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Puedes ejecutar el mismo código múltiples veces usando un bucle.

El primer tipo de bucle que aprenderemos se llama bucle `while` porque ejecuta una condición específica mientras esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

En el ejemplo de código anterior, el bucle `while` se ejecutará 5 veces y añadirá los números de 0 a 4 a `ourArray`.

Intentemos construir un bucle while para que funcione empujando valores a un arreglo.

# --instructions--

Agrega los números de 5 a 0 (inclusivo) en orden descendente a `myArray` usando un bucle `while`.

# --hints--

Debes utilizar un bucle `while` para esto.

```js
assert(code.match(/while/g));
```

`myArray` debe ser igual a `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
