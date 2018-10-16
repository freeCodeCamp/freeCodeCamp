---
title: Access Property Names with Bracket Notation
localeTitle: Доступ к именам объектов с обозначением скобок
---
## Доступ к именам объектов с обозначением скобок

Метод:

*   Используя нотацию в виде скобок, просто напишите оператор return в функции `checkInventory()` .
*   Следующий блок кода демонстрирует требуемый синтаксис.

## Пример:

```javascript
let juice = { 
  apple: 1.15, 
  orange: 1.45 
 }; 
 function checkInventory(scannedItem) { 
  return juice[scannedItem]; 
 } 
```

## Решение:

```javascript
let foods = { 
  apples: 25, 
  oranges: 32, 
  plums: 28, 
  bananas: 13, 
  grapes: 35, 
  strawberries: 27 
 }; 
 // do not change code above this line 
 
 function checkInventory(scannedItem) { 
  // change code below this line 
  return foods[scannedItem]; 
 } 
 
 // change code below this line to test different cases: 
 console.log(checkInventory("apples")); 

```