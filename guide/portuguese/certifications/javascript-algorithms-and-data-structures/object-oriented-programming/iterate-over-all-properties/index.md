---
title: Iterate Over All Properties
localeTitle: Iterar sobre todas as propriedades
---
## Iterar sobre todas as propriedades

### Método

O método é usar um `for-in-loop` para percorrer todas as propriedades no objeto. Dentro do loop, você verifica se a propriedade é uma `own-property` ou um `prototype` e a coloca no array `ownProps[]` ou no array `prototypeProps[]` . Lembre-se de `push` propriedades para o objeto `beagle` e não o objeto `Dog` para passar todos os casos de teste.

### Solução

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