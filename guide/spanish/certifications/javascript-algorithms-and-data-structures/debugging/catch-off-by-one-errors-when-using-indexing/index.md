---
title: Catch Off By One Errors When Using Indexing
localeTitle: Descubrir por uno errores al utilizar la indexación
---
## Descubrir por uno errores al utilizar la indexación

### Lo esencial

Debido a la forma en que funcionan los índices de JavaScript, ¡los `firstFive` **cinco** tienen **cinco elementos** pero están indexados de **0 a 4** !

```javascript
console.log(len); // 5 
 console.log(firstFive[0]); // 1 
 /**/ 
 console.log(firstFive[4]); // 5 
 console.log(firstFive[5]); // undefined 
```

Eso debería darte lo suficiente para comprender los límites de los `firstFive` . Dirige tu atención al bucle. ¿Qué hace? Puedes intentar depurarlo para averiguarlo!

### Depuración

Te han dado este código:

```javascript
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Para depurar este fragmento de código, use `console.clear()` . ¿Cuál sería el mejor lugar para ello? La respuesta es justo antes de la declaración `for` !

```javascript
  console.clear(); 
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Salida de consola:

```text
  Console was cleared. 
  2 
  3 
  4 
  5 
  undefined 
```

### Análisis

Examina la salida. En estas condiciones, el bucle primero imprime el elemento posicionado en 1 ... ¡que es 2! También intenta imprimir el elemento indexado en 5, que `undefined` está `undefined` .

Esto puede considerarse el punto de este desafío. Mantenga `console.log()` y `console.clear()` presentes. Te ayudarán a entender cómo funciona tu código.

### Solución

La forma más sencilla de solucionar este problema es alterar las condiciones for (). Hago `i` empezar a 0. También el bucle **no debe** ser ejecutado para i == 5. En otras palabras, la relación entre `i` y `len` debe ser `false` cuando i == 5. Que se puede lograr mediante el uso de `i < len` (Is 5 <len? false, y el bucle no se ejecutará!).

```javascript
  for (let i = 0; i < len; i++) { 
```

**¡Feliz codificación!** :computadora:

### Recursos

*   [Para declaraciones de desafío en FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
*   [Para declaraciones en documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)