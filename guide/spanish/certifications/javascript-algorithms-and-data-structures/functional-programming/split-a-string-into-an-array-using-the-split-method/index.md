---
title: Split a String into an Array Using the split Method
localeTitle: Dividir una cadena en una matriz usando el método de división
---
## Dividir una cadena en una matriz usando el método de división

### Método

Simplemente divide la cadena para crear una nueva matriz de palabras.

Se puede utilizar una expresión regular simple para lograr este resultado.

### Solución

```javascript
function splitify(str) { 
  // Add your code below this line 
  return str.split(/\W/); 
  // Add your code above this line 
 } 
 splitify("Hello World,I-am code"); 

```