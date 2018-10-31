---
title: Make Code More Reusable with the this Keyword
localeTitle: Hacer el código más reutilizable con la palabra clave
---
## Hacer el código más reutilizable con la palabra clave

### Método:

Este desafío es simplemente demostrar el poder de `this` palabra clave. Reemplazar `dog.numLegs` con `this.numLegs` fortalece nuestro código haciendo referencia directamente a este objeto. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) tiene muchos ejemplos para determinar los efectos de `this` palabra clave.

### Solución:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} 
 }; 
 
 dog.sayLegs(); 

```