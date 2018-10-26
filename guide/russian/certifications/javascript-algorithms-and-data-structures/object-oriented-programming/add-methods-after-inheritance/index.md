---
title: Add Methods After Inheritance
localeTitle: Добавить методы после наследования
---
## Добавить методы после наследования

### метод

Как и в следующем примере, должен быть создан новый экземпляр объекта - `Dog` - и должен быть установлен `prototype` .

```javascript
function Bird() { } 
 Bird.prototype = Object.create(Animal.prototype); 
 Bird.prototype.constructor = Bird; 
```

Затем в прототип Dog должна быть добавлена ​​новая функция - `bark()` .

### Решение

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