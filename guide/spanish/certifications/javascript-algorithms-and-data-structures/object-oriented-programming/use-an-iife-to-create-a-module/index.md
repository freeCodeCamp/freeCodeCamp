---
title: Use an IIFE to Create a Module
localeTitle: Utilice un IIFE para crear un módulo
---
## Utilice un IIFE para crear un módulo

### Método

Ambos `Mixin` deben estar envueltos en un nuevo `funModule` por lo que un buen punto de partida es comentar todo el código hasta el momento.

```javascript
/*let isCuteMixin = function(obj) { 
  obj.isCute = function() { 
    return true; 
  }; 
 }; 
 let singMixin = function(obj) { 
  obj.sing = function() { 
    console.log("Singing to an awesome tune"); 
  }; 
 }; 
 */ 
```

Luego, a continuación, comience a escribir su nuevo código `funModule` . Dentro del nuevo módulo, debe escribir una declaración de retorno para devolver ambos bloques de código `Mixin` . Simplemente copia ambos originales `Mixin` bloques de código en el nuevo código de módulo, pero recuerde que debe separar las dos mixins con una `,`

### Solución

```javascript
let funModule = (function() { 
  return { 
    isCuteMixin: function(obj) { 
      obj.isCute = function() { 
        return true; 
      }; 
    }, 
    singMixin: function(obj) { 
      obj.sing = function() { 
         console.log("Singing to an awesome tune"); 
      }; 
    } 
  } 
 })(); 

```