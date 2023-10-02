---
id: 56104e9e514f539506016a5c
title: Itera números impares con un bucle "for"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra `final-expression` (expresión final), podemos contar con números pares.

Empezaremos en `i = 0` y realizaremos el bucle mientras `i < 10`. Incrementaremos `i` en 2 cada bucle utilizando `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` ahora contendrá `[0, 2, 4, 6, 8]`. Cambiemos nuestra `initialization` (inicialización) para que podamos contar por números impares.

# --instructions--

Inserta los números impares desde 1 hasta 9 en `myArray` utilizando un bucle `for`.

# --hints--

Debes utilizar un bucle `for` para esto.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` debe ser igual a `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
