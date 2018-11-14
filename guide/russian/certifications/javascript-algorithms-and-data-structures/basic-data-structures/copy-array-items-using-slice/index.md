---
title: Copy Array Items Using slice()
localeTitle: Копирование элементов массива Использование среза ()
---
## Копирование элементов массива Использование среза ()

*   функция `slice()` должна использоваться для возврата массива, состоящего только из `warm` и `sunny` .
*   Поэтому два параметра должны быть переданы функции `slice()` . Первым параметром должен быть индекс, на который вы хотите начать подстроку. Второй параметр должен быть индексом, по которому заканчивается подстрока.
*   Примечание. Второй параметр завершит подстроку с точным индексом.

## Пример:

```javascript
 return arr.slice(1,4); 
 /* This will return a substring consisting of indexs [1,2,3] 
    Note: arr[4] is NOT included. 
```

## Решение:

```javascript
function forecast(arr) { 
  // change code below this line 
  return arr.slice(2,4); 
 } 
 
 // do not change code below this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 

```