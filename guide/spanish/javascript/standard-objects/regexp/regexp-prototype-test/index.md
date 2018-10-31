---
title: RegExp.prototype.test
localeTitle: RegExp.prototype.test
---
## RegExp.prototype.test

El método `test()` devuelve `true` si una cadena coincide con la expresión regular, y `false` si no lo hace.

## Ejemplos

```javascript
let str = 'freeCodeCamp'; 
 let regEx = /Code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints true 
```

**Nota: las** expresiones regulares distinguen entre mayúsculas y minúsculas. El ejemplo anterior devolverá `false` si el `regEx` es `/code/` lugar de `/Code/` . Para hacer que la expresión regular no distinga entre mayúsculas y minúsculas, debe agregar el indicador `i` a la expresión regular.

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

#### Más información:

Consulte la página [oficial de MDN `RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) para obtener más información.