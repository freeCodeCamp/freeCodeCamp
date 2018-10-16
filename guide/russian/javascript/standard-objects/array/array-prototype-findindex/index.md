---
title: Array.prototype.findIndex
localeTitle: Array.prototype.findIndex
---
## Информация

Метод `findIndex()` возвращает индекс первого элемента в массиве, который удовлетворяет предоставленной функции тестирования. В противном случае возвращается -1.

Метод `findIndex()` не мутирует массив, на который он вызывается.

Синтаксис:
```
arr.findIndex(callback[, thisArg]) 
```

##### параметры

*   `callback`
*   Функция для выполнения по каждому значению в массиве, используя три аргумента:
*   `element`
    *   Текущий элемент обрабатывается в массиве.
*   `index`
    *   Индекс текущего элемента обрабатывается в массиве.
*   `array`
    *   Был вызван массив findIndex ().
*   `thisArg` (необязательно)
*   Объект, который будет использоваться при выполнении обратного вызова.

##### Возвращаемое значение

Индекс в массиве, если элемент проходит тест; в противном случае -1.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## Примеры

Этот пример найдет соответствующий элемент в массиве и вернет индекс из него.

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.findIndex(findMovies)); 
 
 // Index of 2nd element in the Array is returned, 
 // so this will result in '1' 
```

В следующем примере показан вывод каждого необязательного параметра функции обратного вызова. Это вернет `-1` потому что ни один из элементов не вернет true из функции обратного вызова.

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = -1 

```