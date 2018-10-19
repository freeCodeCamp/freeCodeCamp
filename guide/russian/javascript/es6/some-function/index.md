---
title: Some Function
localeTitle: Некоторая функция
---## Некоторая функция

Функция `some()` используется для проверки того, удовлетворяет ли хотя бы одному элементу массива заданное условие. Функция возвращает `true` если условие выполняется одним элементом, а false, если какой-либо из элементов удовлетворяет условию

Исходный синтаксис некоторой функции:

```javascript
arr.some(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
 }, [thisArg]); 
```

### Пример (ES6):

```javascript
const arr = [1, 4, 5, 11]; 
 if (arr.some(el => el % 2 == 0)) { 
  console.log("There's at least one even number"); 
 } 
```

`some()` - это метод объекта `Array` , поэтому для передачи этой функции в итерируемый объект необходимо убедиться, что объект является массивом.