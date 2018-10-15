---
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
localeTitle: Use un Mixin para agregar un comportamiento común entre objetos no relacionados
---
## Use un Mixin para agregar un comportamiento común entre objetos no relacionados

### Método

Al igual que la función `flyMixin` , se debe crear una nueva función `glideMixin` para aceptar objetos de `bird` y `boat` como parámetro. Cree esta nueva función utilizando la misma sintaxis que la función `flyMixin` y luego llame a la función en ambos objetos.

### Solución

```javascript
let bird = { 
  name: "Donald", 
  numLegs: 2 
 }; 
 
 let boat = { 
  name: "Warrior", 
  type: "race-boat" 
 }; 
 
 // Add your code below this line 
 let glideMixin = function(obj) { 
    obj.glide = function() { 
        console.log("Gliding!"); 
    } 
 }; 
 glideMixin(bird); 
 glideMixin(boat); 

```