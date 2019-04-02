---
title: Refactor Global Variables Out of Functions
localeTitle: Refactorizar variables globales fuera de funciones
---
## Refactorizar variables globales fuera de funciones

*   Si tiene problemas para cambiar la lista de libros, intente utilizar una copia de la matriz en sus funciones.
    
*   Aquí hay más información sobre \[cómo JavaScript maneja los argumentos de la función\] (https://codeburst.io/javascript-passing-by-value-vs- reference -plicated-in-plain-english-8d00fd06a47c).
    

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

## Solución 1

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

## Solucion 2

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