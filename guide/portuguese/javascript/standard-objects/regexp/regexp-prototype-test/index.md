---
title: RegExp.prototype.test
localeTitle: RegExp.prototype.test
---
## RegExp.prototype.test

O método `test()` retorna `true` se uma string corresponder à expressão regular e `false` se não corresponder.

## Exemplos

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /Code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints true 
```

**Nota:** As expressões regulares são sensíveis a maiúsculas e minúsculas. O exemplo acima retornará `false` se o `regEx` for `/code/` vez de `/Code/` . Para tornar a expressão regular sem distinção entre maiúsculas e minúsculas, você precisa adicionar o sinalizador `i` à expressão regular.

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints false 
 
 // Include the 'i' flag. 
 
 regEx = /code/i; 
 result = regEx.test(str); 
 console.log(result); // prints true 
```

#### Mais Informações:

Confira a página [oficial do MDN `RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) para mais informações.