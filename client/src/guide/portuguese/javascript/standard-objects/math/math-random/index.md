---
title: Math Random
localeTitle: Matemática Aleatória
---
## Matemática Aleatória

`Math.random()` retorna um número entre 0 (inclusive) e 1 (exclusivo).

#### Sintaxe

`Math.random()`

#### Exemplo

```js
function randomInRange(min, max) { 
  return Math.random() * (max - min) + min; 
 } 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)