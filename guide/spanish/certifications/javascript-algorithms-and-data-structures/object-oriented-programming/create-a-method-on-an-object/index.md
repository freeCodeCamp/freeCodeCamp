---
title: Create a Method on an Object
localeTitle: Crear un método en un objeto
---
## Crear un método en un objeto

### Método:

Una función de objetos debe inicializarse dentro del propio objeto. Esto se demuestra en el siguiente código.

```javascript
let obj = { 
  property1 = 1, 
 
  function1: function() { 
    //Code to be exectued 
  } 
 }; 
```

### Solución:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs."; 
  } 
 }; 
 
 dog.sayLegs(); 

```