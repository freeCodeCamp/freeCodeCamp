---
title: Array.prototype.map
localeTitle: Array.prototype.map
---
## Array.prototype.map

O método `.map()` percorre o array especificado e executa a função fornecida em cada elemento. Ele retorna uma nova matriz que contém os resultados da chamada de função em cada elemento.

### Exemplos

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

**Mais Informações**

Aqui está um screencast interativo Scrimba que explica `Array.prototype.map()` :

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)