---
title: Understand the Constructor Property
localeTitle: Понять свойство конструктора
---
## Понять свойство конструктора

### метод

Просто выполните функцию, аналогичную приведенной в примере. Используйте `if-statement` для проверки того, является ли `candidate` `Dog` .

### Решение

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 // Add your code below this line 
 function joinDogFraternity(candidate) { 
  if(candidate.constructor === Dog) { 
    return true; 
  } 
  else { 
    return false; 
  } 
 } 

```