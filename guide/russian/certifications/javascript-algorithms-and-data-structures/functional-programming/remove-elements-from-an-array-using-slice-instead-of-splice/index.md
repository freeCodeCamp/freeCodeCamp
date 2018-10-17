---
title: Remove Elements from an Array Using slice Instead of splice
localeTitle: Удаление элементов из массива Использование среза Вместо сращивания
---
## Удаление элементов из массива Использование среза Вместо сращивания

*   Разница между методом сплайсинга и среза заключается в том, что метод среза не мутирует исходный массив, а возвращает новый.
*   Метод slice принимает два двух аргумента для начала индексирования и завершения среза (конец не включен).
*   Если вы не хотите мутировать исходный массив, вы можете использовать метод среза.

## Решение

```javascript
function nonMutatingSplice(cities) { 
  // Add your code below this line 
 
  return cities.slice(0, 3); 
 
  // Add your code above this line 
 } 
 var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]; 
 nonMutatingSplice(inputCities); 

```