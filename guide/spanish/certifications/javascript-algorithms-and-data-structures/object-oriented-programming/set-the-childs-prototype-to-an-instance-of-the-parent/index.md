---
title: Set the Child's Prototype to an Instance of the Parent
localeTitle: Establecer el prototipo del niño en una instancia del padre
---
## Establecer el prototipo del niño en una instancia del padre

### Método

Este desafío no es diferente del último desafío, en el hecho de que debe crear un objeto que herede del `supertype` . Solo que esta vez el subtipo `Dog` heredará el supertipo `Animal` . Simplemente cree una nueva instancia de `Dog.prototype` como el siguiente ejemplo.

```javascript
Bird.prototype = Object.create(Animal.prototype); 
```

### Solución

```javascript
function Animal() { } 
 
 Animal.prototype = { 
  constructor: Animal, 
  eat: function() { 
    console.log("nom nom nom"); 
  } 
 }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 
 let beagle = new Dog(); 
 beagle.eat();  // Should print "nom nom nom" 

```