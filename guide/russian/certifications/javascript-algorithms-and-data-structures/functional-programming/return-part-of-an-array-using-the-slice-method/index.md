---
title: Return Part of an Array Using the slice Method
localeTitle: Возвращаемая часть массива Использование метода среза
---
## Возвращаемая часть массива Использование метода среза

### Проблема Объяснение

Используйте метод slice в функции sliceArray, чтобы вернуть часть массива анимации, учитывая предоставленные индексы beginSlice и endSlice. Функция должна возвращать массив.

### метод

Функция может быть записана путем простого написания одной строки кода - оператора return. Как и в приведенном примере, отрежьте массив, который функция принимает в качестве параметра, используя параметры `beginSlice` и `endSlice` качестве параметров для метода `slice()` . Вспомните структуру метода `slice()` :

```javascript
var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 arr.slice([index-to-begin-slice] , [index-to-end-slice]); 
```

### Решение

```javascript
function sliceArray(anim, beginSlice, endSlice) { 
  // Add your code below this line 
  return anim.slice(beginSlice, endSlice); 
  // Add your code above this line 
 } 
 var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 sliceArray(inputAnim, 1, 3); 
```

#### Полезные ссылки:

*   [Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)