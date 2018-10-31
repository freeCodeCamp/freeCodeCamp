---
title: Object.prototype.hasOwnProperty
localeTitle: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### Sintaxe

`Object.hasOwnProperty(prop)`

### Descrição

O método **hasOwnProperty ()** retorna um [booleano](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) indicando se o objeto possui a propriedade especificada.

Este é um método conveniente para verificar se um objeto possui a propriedade especificada ou não; retornando verdadeiro / falso de acordo.

### Parâmetros

##### prop

Uma [string](https://developer.mozilla.org/en-US/docs/Glossary/String) ou [símbolo](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) para testar.

### Exemplos

usando **hasOwnProperty ()** para testar se uma propriedade existe ou não em um determinado objeto:

```js
var course = { 
  name: 'freeCodeCamp', 
  feature: 'is awesome', 
 } 
 
 var student = { 
  name: 'enthusiastic student', 
 } 
 
 course.hasOwnProperty('name');  // returns true 
 course.hasOwnProperty('feature');   // returns true 
 
 student.hasOwnProperty('name');  // returns true 
 student.hasOwnProperty('feature'); // returns false 
```

#### ligações

[MDN hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)