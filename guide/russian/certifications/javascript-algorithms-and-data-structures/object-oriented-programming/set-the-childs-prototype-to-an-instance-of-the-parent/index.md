---
title: Set the Child's Prototype to an Instance of the Parent
localeTitle: Установите прототип ребенка в экземпляр родителя
---
## Установите прототип ребенка в экземпляр родителя

### метод

Эта задача ничем не отличается от последней задачи, в том, что вы должны создать объект, который наследуется от `supertype` . Только на этот раз подтип `Dog` наследует супертип `Animal` . Просто создайте новый экземпляр `Dog.prototype` как в следующем примере.

```javascript
Bird.prototype = Object.create(Animal.prototype); 
```

### Решение

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