---
title: Refactor Global Variables Out of Functions
localeTitle: Глобальные переменные Refactor вне функций
---
## Глобальные переменные Refactor вне функций

*   Если у вас возникли проблемы с изменением bookList, попробуйте использовать копию массива в ваших функциях.
    
*   Вот еще несколько сведений о том, как \[JavaScript обрабатывает аргументы функции\] (https://codeburst.io/javascript-passing-by-value-vs- reference-explain-in-plain-english-8d00fd06a47c).
    

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

## Решение 1

```javascript
function add (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  newArr.push(bookName);  // Add bookName parameter to the end of the new array. 
  return newArr; // Return the new array. 
 } 
 
 function remove (arr, bookName) { 
  let newArr = [...arr];  // Copy the bookList array to a new array. 
  if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array. 
    /. 
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array. 
    return newArr; // Return the new array. 
    } 
 } 
```

## Решение 2

```javascript
function add (list,bookName) { 
  return [...list, bookName]; 
 } 
 
 function remove (list,bookName) { 
  if (list.indexOf(bookName) >= 0) { 
    return list.filter((item) => item !== bookName); 
    } 
 } 

```