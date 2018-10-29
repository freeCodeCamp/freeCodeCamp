---
title: Function Length
localeTitle: Longitud de la función
---
## Longitud de la función

La propiedad de `length` en el objeto de función contiene el número de argumentos esperados por la función cuando se llama.

```javascript
function noArgs() { } 
 
 function oneArg(a) { } 
 
 console.log(noArgs.length); // 0 
 
 console.log(oneArg.length); // 1 
```

### Sintaxis ES2015

ES2015, o ES6 como se le llama comúnmente, introdujo los parámetros de la función predeterminada y el operador de descanso. Ambas adiciones cambian la forma en que funciona la propiedad `length` .

Si el operador de descanso o los parámetros predeterminados se utilizan en una declaración de función, la propiedad de `length` solo incluirá el número de argumentos antes de un operador de descanso o un parámetro predeterminado.

```javascript
function withRest(...args) { } 
 
 function withArgsAndRest(a, b, ...args) { } 
 
 function withDefaults(a, b = 'I am the default') { } 
 
 console.log(withRest.length); // 0 
 
 console.log(withArgsAndRest.length); // 2 
 
 console.log(withDefaults.length); // 1 
```

Puede encontrar más información sobre `Function.length` en [los documentos MDN de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) .