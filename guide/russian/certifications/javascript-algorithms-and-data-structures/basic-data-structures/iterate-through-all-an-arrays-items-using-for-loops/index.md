---
title: Iterate Through All an Array's Items Using For Loops
localeTitle: Итерация через все элементы массива с использованием циклов
---
## Итерация через все элементы массива с использованием циклов

## Подсказка 1

*   Вложенный `for` петли должны быть использованы для поиска через каждый элемент массива.

```javascript
 for (let i = 0; i < arr.length; i++) { 
```

\`

## Подсказка 2

*   Затем каждый элемент массива следует сравнить с параметром `elem` переданным через функцию `filteredArray()` .

```javascript
if (arr[i].indexOf(elem)==-1){ 
```

## Подсказка 3

*   Если совпадение не найдено, то `newArr` добавляет весь субаран. Функция `push()` здесь очень полезна.

```javascript
newArr.push(arr[i]); 
```

*   После того, как весь подъярус будет добавлен в `newArr` цикл продолжит со следующего элемента.

## Решение:

```javascript
function filteredArray(arr, elem) { 
  let newArr = []; 
  // change code below this line 
 
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code 
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array 
            }; 
          }; 
 
  // change code above this line 
  return newArr; 
 }; 
 // change code here to test different cases: 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 

```