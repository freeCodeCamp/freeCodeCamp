---
title: Use Dot Notation to Access the Properties of an Object
localeTitle: Использовать точную нотацию для доступа к свойствам объекта
---
## Использовать точную нотацию для доступа к свойствам объекта

### Метод:

Следующий код просто распечатает `property1` из объекта `obj` .

```javascript
let obj = { 
  property1 = 1, 
  property2 = 2 
 }; 
 
 console.log(obj.property1); 
```

Следуя этой логике, используйте операцию `console.log` для печати `property1` и `property2` на экране.

### Решение:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4 
 }; 
 // Add your code below this line 
 console.log(dog.name); 
 console.log(dog.numLegs); 

```