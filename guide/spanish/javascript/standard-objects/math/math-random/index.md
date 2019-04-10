---
title: Math Random
localeTitle: Matemáticas Aleatorias
---
## Matemáticas Aleatorias

`Math.random()` devuelve un número entre 0 (incluido) y 1 (exclusivo).

#### Sintaxis

`Math.random()`

#### Ejemplo

```js
function randomInRange(min, max) { 
  return Math.random() * (max - min) + min; 
 } 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)