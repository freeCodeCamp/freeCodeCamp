---
title: Understand Own Properties
localeTitle: Entender propiedades propias
---
## Entender propiedades propias

### Método:

En el código de ejemplo dado, verá una nueva matriz `ownProps[]` intializada seguida de una declaración `for...in` para recorrer las propiedades de `duck` y luego usar una declaración `push()` para completar la nueva matriz. Se debe seguir el mismo método para el objeto `canary` .

Simplemente reemplace el objeto `duck` en la declaración 'para ... en' con el objeto `canary` para pasar todos los casos de prueba.

### Solución:

```javascript
let canary = new Bird("Tweety"); 
 let ownProps = []; 
 // Add your code below this line 
 for(let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  } 
 } 

```