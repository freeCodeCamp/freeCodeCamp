---
title: Array.prototype.concat
localeTitle: Array.prototype.concat
---
## Array.prototype.concat

Метод concat возвращает новый массив, состоящий из элементов массива, на который вы его вызываете, за которым следуют элементы аргументов в том порядке, в котором они переданы.

Вы можете передать несколько аргументов методу 'concat'. Аргументами могут быть массивы или типы данных, такие как логические строки, строки и числа.

### Синтаксис

```javascript
const newArray = array.concat(value1, value2, value3...); 
```

### Примеры

#### Объединение двух массивов

```javascript
var cold = ['Blue', 'Green', 'Purple']; 
 var warm = ['Red', 'Orange', 'Yellow']; 
 
 var result = cold.concat(warm); 
 
 console.log(result); 
 // results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow']; 
```

#### Объединение значения в массив

```javascript
const odd = [1, 3, 5, 7, 9]; 
 const even = [0, 2, 4, 6, 8]; 
 
 const oddAndEvenAndTen = odd.concat(even, 10); 
 
 console.log(oddAndEvenAndTen); 
 // results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]; 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)