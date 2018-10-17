---
title: Sort an Array Alphabetically using the sort Method
localeTitle: Сортировка массива по алфавиту с помощью метода сортировки
---
## Сортировка массива по алфавиту с помощью метода сортировки

### метод

В приведенном примере мы видим, как написать функцию, которая вернет новый массив в обратном алфавитном порядке.

```javascript
function reverseAlpha(arr) { 
  return arr.sort(function(a, b) { 
    return a < b; 
  }); 
 } 
 reverseAlpha(['l', 'h', 'z', 'b', 's']); 
 // Returns ['z', 's', 'l', 'h', 'b'] 
```

Используя эту логику, просто перепроектируйте функцию, чтобы вернуть новый массив в алфавитном порядке.

### Решение

```javascript
function alphabeticalOrder(arr) { 
  // Add your code below this line 
  return arr.sort(function(a,b) { 
    return a > b; 
  }); 
  // Add your code above this line 
 } 
 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); 

```