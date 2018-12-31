---
title: Refactor Global Variables Out of Functions
localeTitle: Refatorar variáveis ​​globais com funções
---
## Refatorar variáveis ​​globais com funções

*   Se você está tendo problemas com a mudança de bookList, tente usar uma cópia do array em suas funções.
    
*   Aqui estão mais algumas informações sobre \[como o JavaScript lida com os argumentos de função\] (https://codeburst.io/javascript-passing-by-value-vs-reference -plicated-in-plain-english-8d00fd06a47c).
    

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

## Solução 1

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

## Solução 2

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