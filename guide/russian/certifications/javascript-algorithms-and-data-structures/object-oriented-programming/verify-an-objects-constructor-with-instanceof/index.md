---
title: Verify an Object's Constructor with instanceof
localeTitle: Проверка конструктора объекта с помощью instanceof
---
## Проверка конструктора объекта с помощью instanceof

### Метод:

Как и в последнем вызове, создайте новый объект - `myHouse` - используя предоставленный конструктор.

#### Пример:

```javascript
let hound = new Dog(); 
```

Не забудьте указать функции `House` параметр для инициализации количества комнат. Затем просто вызовите оператор `instanceof` чтобы вернуть true в новом доме.

### Решение:

```javascript
/* jshint expr: true */ 
 
 function House(numBedrooms) { 
  this.numBedrooms = numBedrooms; 
 } 
 
 // Add your code below this line 
 let myHouse = new House(5); 
 myHouse instanceof House; 

```