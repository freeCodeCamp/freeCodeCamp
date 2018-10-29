---
title: Add Methods After Inheritance
localeTitle: Adicionar métodos após herança
---
## Adicionar métodos após herança

### Método

Assim como no exemplo a seguir, uma nova instância de um objeto - `Dog` - deve ser criada e o `prototype` deve ser definido.

```javascript
function Bird() { } 
 Bird.prototype = Object.create(Animal.prototype); 
 Bird.prototype.constructor = Bird; 
```

Então uma nova função - `bark()` - deve ser adicionada ao protótipo Dog.

### Solução

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