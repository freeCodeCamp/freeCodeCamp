---
title: Iterate Through All an Array's Items Using For Loops
localeTitle: Iterar a través de todos los elementos de una matriz utilizando bucles for
---
## Iterar a través de todos los elementos de una matriz utilizando bucles for

## Sugerencia 1

*   Se debe utilizar un bucle anidado `for` buscar a través de cada elemento de la matriz.

```javascript
 for (let i = 0; i < arr.length; i++) { 
```

\`

## Sugerencia 2

*   Cada elemento de la matriz debe compararse con el parámetro `elem` pasado a través de la función `filteredArray()` .

```javascript
if (arr[i].indexOf(elem)==-1){ 
```

## Sugerencia 3

*   Si NO se encuentra una coincidencia, a `newArr` se le `newArr` todo el subarreglo. La función `push()` es muy útil aquí.

```javascript
newArr.push(arr[i]); 
```

*   Una vez que toda la subarray se agrega a `newArr` el bucle continúa con el siguiente elemento.

## Solución:

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