---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
localeTitle: Utilice el cierre para proteger las propiedades dentro de un objeto de ser modificado externamente
---
## Utilice el cierre para proteger las propiedades dentro de un objeto de ser modificado externamente

### Método

Al igual que en el ejemplo dado, en lugar de declarar la variable de `weight` con la palabra clave `this` , la palabra clave `let` debe utilizarse para declararla como una variable privada. De esta manera solo se puede acceder dentro de la función `Bird` . El método `getWeight` se debe agregar dentro de la función `Bird` para acceder a la variable de `weight` .

### Solución

```javascript
function Bird() { 
  let weight = 15; 
 
  this.getWeight = function() { 
    return weight; 
  }; 
 
 } 

```