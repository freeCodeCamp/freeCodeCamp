---
id: cf1391c1c11feddfaeb4bdef
title: Crea números decimales con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

También podemos almacenar números decimales en variables. Los números decimales a veces se denominan números de <dfn>coma flotante</dfn> o <dfn>flotantes</dfn>.

**Nota:** No todos los números reales pueden representarse con precisión en <dfn>coma flotante</dfn>. Esto puede llevar a errores de redondeo. [Detalles aquí](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems).

# --instructions--

Crea una variable `myDecimal` y dale un valor decimal con una parte fraccional (por ejemplo, `5.7`).

# --hints--

`myDecimal` debe ser un número.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` debe tener un punto decimal

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
