---
title: Array.prototype.map
localeTitle: Array.prototype.map
---
## Array.prototype.map

El método `.map()` recorre la matriz dada y ejecuta la función provista en cada elemento. Devuelve una nueva matriz que contiene los resultados de la llamada de función en cada elemento.

### Ejemplos

**ES5**

```js
var arr = [1, 2, 3, 4]; 
 var newArray = arr.map(function(element) { return element * 2}); 
 console.log(newArray); // [2, 4, 6, 8] 
```

**ES6**

```js
const arr = [1, 2, 3, 4]; 
 const newArray = arr.map(element => element * 2); 
 console.log(newArray); 
 //[2, 4, 6, 8] 
```

**Más información**

Aquí hay un screencast interactivo de Scrimba que explica `Array.prototype.map()` :

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)