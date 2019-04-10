---
title: Reset an Inherited Constructor Property
localeTitle: Сбросить свойство унаследованного конструктора
---
## Сбросить свойство унаследованного конструктора

### метод

Объекты `duck` и `beagle` запрограммированы на наследование свойств конструктора `supertypes` . Чтобы перезаписать эти две строки кода, необходимо записать, чтобы установить конструкторы в нужные конструкторы `Bird` and `Dog` . Следующий код демонстрирует, как это можно достичь.

```javascript
Bird.prototype.constructor = Bird; 
```

### Решение

```javascript
function Animal() { } 
 function Bird() { } 
 function Dog() { } 
 
 Bird.prototype = Object.create(Animal.prototype); 
 Dog.prototype = Object.create(Animal.prototype); 
 
 // Add your code below this line 
 Bird.prototype.constructor = Bird; 
 Dog.prototype.constructor = Dog; 
 
 let duck = new Bird(); 
 let beagle = new Dog(); 

```