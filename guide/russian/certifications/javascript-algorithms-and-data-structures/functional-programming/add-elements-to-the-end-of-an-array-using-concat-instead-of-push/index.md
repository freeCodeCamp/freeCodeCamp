---
title: Add Elements to the End of an Array Using concat Instead of push
localeTitle: Добавление элементов в конец массива Использование concat Вместо push
---
## Добавление элементов в конец массива Использование concat Вместо push

Если метод `push` добавляет новый элемент в конец исходного массива, метод `concat` создает новый массив, содержащий элементы из исходного массива и нового элемента. При использовании `concat` исходный массив остается неизменным.

#### Полезные ссылки:

*   [Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Решение

```javascript
function nonMutatingPush(original, newItem) { 
 
  // Add your code below this line 
 
  return original.concat(newItem); 
 
  // Add your code above this line 
 } 
 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingPush(first, second); 

```