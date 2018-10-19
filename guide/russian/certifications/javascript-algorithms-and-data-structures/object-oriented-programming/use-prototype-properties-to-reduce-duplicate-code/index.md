---
title: Use Prototype Properties to Reduce Duplicate Code
localeTitle: Использование свойств прототипа для уменьшения повторяющегося кода
---
## Использование свойств прототипа для уменьшения повторяющегося кода

### Метод:

Свойство `prototype` позволяет нам добавлять новые свойства к конструктору объекта извне исходного кода. Свойство prototype также позволяет добавлять новые функции в конструктор объектов. Следующий код демонстрирует, как использовать `.prototype` для объекта для создания нового свойства в конструкторе.

#### Пример:

```javascript
Obj.prototype.newProperty = "New Property!"; 
```

Используя эту логику, просто создайте новое свойство `prototype` для `numLegs` . `Bird.prototype.numLegs = 2;` могут быть пройдены путем замены объекта `Bird` объектом `Dog` в приведенном примере - `Bird.prototype.numLegs = 2;`

### Решение:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 // Add your code above this line 
 let beagle = new Dog("Snoopy"); 

```