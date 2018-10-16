---
title: Function Length
localeTitle: Comprimento da Função
---
## Comprimento da Função

A propriedade `length` no objeto de função contém o número de argumentos esperados pela função quando chamado.

```javascript
function noArgs() { } 
 
 function oneArg(a) { } 
 
 console.log(noArgs.length); // 0 
 
 console.log(oneArg.length); // 1 
```

### Sintaxe ES2015

ES2015, ou ES6 como é comumente chamado, introduziu o operador de repouso e os parâmetros de função padrão. Ambas as adições alteram o funcionamento da propriedade `length` .

Se o operador de descanso ou os parâmetros padrão forem usados ​​em uma declaração de função, a propriedade de `length` incluirá apenas o número de argumentos antes de um operador de descanso ou um parâmetro padrão.

```javascript
function withRest(...args) { } 
 
 function withArgsAndRest(a, b, ...args) { } 
 
 function withDefaults(a, b = 'I am the default') { } 
 
 console.log(withRest.length); // 0 
 
 console.log(withArgsAndRest.length); // 2 
 
 console.log(withDefaults.length); // 1 
```

Mais informações sobre `Function.length` podem ser encontradas no [MDN Docs do Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) .