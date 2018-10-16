---
title: Object.prototype.hasOwnProperty
localeTitle: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### Sintaxis

`Object.hasOwnProperty(prop)`

### Descripción

El método **hasOwnProperty ()** devuelve un valor [booleano que](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) indica si el objeto posee la propiedad especificada.

Este es un método conveniente para verificar si un objeto tiene la propiedad especificada o no; devolviendo verdadero / falso en consecuencia.

### Parámetros

##### apuntalar

Una [cadena](https://developer.mozilla.org/en-US/docs/Glossary/String) o [símbolo](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) para probar.

### Ejemplos

usando **hasOwnProperty ()** para probar si una propiedad existe o no en un objeto dado:

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

#### campo de golf

[MDN tiene Propiedad propia](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)