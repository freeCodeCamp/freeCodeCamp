---
id: cf1111c1c11feddfaeb9bdef
title: Genera fracciones aleatorias con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

Los números aleatorios son útiles para crear comportamientos aleatorios.

JavaScript tiene una función `Math.random()` que genera un número decimal aleatorio entre `0` (inclusivo) y `1` (exclusivo). Así que `Math.random()` puede devolver un `0` pero nunca devuelve un `1`.

**Nota:** Al igual que el <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">almacenamiento de valores con el operador de asignación</a>, todas las llamadas a la función se resolverán antes de que se ejecute el `return`, por lo que el `return` devuelve el valor de la función `Math.random()`.

# --instructions--

Cambia `randomFraction` para que devuelva un número aleatorio en lugar de devolver `0`.

# --hints--

`randomFraction` debe devolver un número aleatorio.

```js
assert(typeof randomFraction() === 'number');
```

El número devuelto por `randomFraction` debe ser un decimal.

```js
assert((randomFraction() + '').match(/\./g));
```

Debes usar `Math.random` para generar el número decimal aleatorio.

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
