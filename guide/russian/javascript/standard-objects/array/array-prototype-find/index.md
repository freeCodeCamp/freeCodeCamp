---
title: Array.prototype.find
localeTitle: Array.prototype.find
---
## Информация

Метод `find()` возвращает значение первого элемента в массиве, который удовлетворяет предоставленной функции тестирования. В противном случае возвращается undefined. Метод `find()` не мутирует массив, на который он вызывается.

Синтаксис:
```
arr.find(callback[, thisArg]) 
```

##### параметры

*   `callback`
*   Функция для выполнения по каждому значению в массиве, используя три аргумента:
*   `element`
    *   Текущий элемент обрабатывается в массиве.
*   `index`
    *   Индекс текущего элемента обрабатывается в массиве.
*   `array`
    *   Призыв массива был вызван.
*   `thisArg` (необязательно)
*   Объект, который будет использоваться при выполнении обратного вызова.

##### Возвращаемое значение

Значение в массиве, если элемент проходит тест; в противном случае не определено.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Примеры

Этот пример найдет соответствующий элемент в массиве и вернет объект из него.

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.find(findMovies)); 
 
 // Output 
 //  { name: 'movies', quantity: 1 } 
```

В следующем примере показан вывод каждого необязательного параметра функции обратного вызова. Это вернет `undefined` потому что ни один из элементов не вернет true из функции обратного вызова.

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].find(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = undefined 

```