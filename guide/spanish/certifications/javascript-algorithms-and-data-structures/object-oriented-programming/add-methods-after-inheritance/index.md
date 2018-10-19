---
title: Add Methods After Inheritance
localeTitle: Añadir métodos después de la herencia
---
## Añadir métodos después de la herencia

### Método

Al igual que en el ejemplo siguiente, se debe crear una nueva instancia de un objeto, `Dog` , y se debe configurar el `prototype` .

```javascript
function Bird() { } 
 Bird.prototype = Object.create(Animal.prototype); 
 Bird.prototype.constructor = Bird; 
```

Luego se debe agregar una nueva función - `bark()` - al prototipo Dog.

### Solución

```javascript
function Animal() { } 
 Animal.prototype.eat = function() { console.log("nom nom nom"); }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 Dog.prototype.constructor = Dog; 
 Dog.prototype.bark = function() { 
    console.log("Woof woof!"); 
 }; 
 // Add your code above this line 
 
 let beagle = new Dog(); 
 
 beagle.eat(); // Should print "nom nom nom" 
 beagle.bark(); // Should print "Woof!" 

```