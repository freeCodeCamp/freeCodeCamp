---
title: Set the Child's Prototype to an Instance of the Parent
localeTitle: Defina o protótipo da criança para uma instância do pai
---
## Defina o protótipo da criança para uma instância do pai

### Método

Este desafio não é diferente do último desafio, no fato de que você deve criar um objeto que herda do `supertype` . Só que desta vez o subtipo `Dog` herdará o supertipo `Animal` . Simplesmente crie uma nova instância de `Dog.prototype` como no exemplo a seguir.

```javascript
Bird.prototype = Object.create(Animal.prototype); 
```

### Solução

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