---
title: Create a Method on an Object
localeTitle: Создание метода для объекта
---
## Создание метода для объекта

### Метод:

Функция объекта должна быть инициализирована внутри самого объекта. Это продемонстрировано в следующем коде.

```javascript
let obj = { 
  property1 = 1, 
 
  function1: function() { 
    //Code to be exectued 
  } 
 }; 
```

### Решение:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs."; 
  } 
 }; 
 
 dog.sayLegs(); 

```