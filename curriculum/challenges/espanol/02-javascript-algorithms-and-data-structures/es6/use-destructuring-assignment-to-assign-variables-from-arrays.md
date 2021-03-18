---
id: 587d7b89367417b2b2512b4b
title: Usa sintaxis de desestructuración para asignar variables desde arreglos
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

Desestructurar un arreglo nos permite hacer exactamente eso:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

La consola mostrará los valores de `a` y `b` como `1, 2`.

A la variable `a` se le asigna el primer valor del arreglo, y a `b` se le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

La consola mostrará los valores de `a`, `b`, y `c` como `1, 2, 5`.

# --instructions--

Utiliza la sintaxis de desestructuración para intercambiar los valores de `a` y `b` para que `a` reciba el valor almacenado en `b`, y `b` reciba el valor almacenado en `a`.

# --hints--

El valor de `a` debe ser `6`, después del intercambio.

```js
assert(a === 6);
```

El valor de `b` debe ser `8`, después del intercambio.

```js
assert(b === 8);
```

Debes usar la desestructuración de arreglos para intercambiar `a` y `b`.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
