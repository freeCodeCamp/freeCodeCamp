---
title: Iterate Over All Properties
localeTitle: Итерация по всем свойствам
---
## Итерация по всем свойствам

### метод

Метод состоит в том, чтобы использовать `for-in-loop` для итерации по каждому свойству объекта. Внутри цикла вы затем проверяете, является ли свойство `own-property` или `prototype` и поместите его в массив `ownProps[]` или массив `prototypeProps[]` . Не забудьте `push` свойства объекта `beagle` а не объект `Dog` чтобы передать все тестовые примеры.

### Решение

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