---
title: Understand the Constructor Property
localeTitle: Entender la propiedad del constructor
---
## Entender la propiedad del constructor

### Método

Simplemente termina la función como la del ejemplo dado. Use una `if-statement` para probar si el `candidate` es un `Dog` o no.

### Solución

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 // Add your code below this line 
 function joinDogFraternity(candidate) { 
  if(candidate.constructor === Dog) { 
    return true; 
  } 
  else { 
    return false; 
  } 
 } 

```