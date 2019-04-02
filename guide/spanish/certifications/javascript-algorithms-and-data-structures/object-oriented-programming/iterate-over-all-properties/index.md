---
title: Iterate Over All Properties
localeTitle: Iterar sobre todas las propiedades
---
## Iterar sobre todas las propiedades

### Método

El método consiste en utilizar un `for-in-loop` para recorrer cada propiedad en el objeto. Dentro del bucle, verifica si la propiedad es de propiedad `own-property` o de `prototype` y la coloca en la matriz `ownProps[]` o en la matriz `prototypeProps[]` . Recuerde `push` propiedades al objeto `beagle` y no al objeto `Dog` para pasar todos los casos de prueba.

### Solución

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 let beagle = new Dog("Snoopy"); 
 
 let ownProps = []; 
 let prototypeProps = []; 
 
 // Add your code below this line 
 for (let property in beagle) { 
  if(Dog.hasOwnProperty(property)) { 
    ownProps.push(property) 
  } 
  else { 
    prototypeProps.push(property) 
  } 
 } 

```