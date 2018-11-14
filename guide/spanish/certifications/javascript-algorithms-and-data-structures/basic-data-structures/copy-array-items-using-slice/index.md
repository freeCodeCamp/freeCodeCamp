---
title: Copy Array Items Using slice()
localeTitle: Copiar elementos de matriz utilizando slice ()
---
## Copiar elementos de matriz utilizando slice ()

*   la función `slice()` debe usar para devolver una matriz que consiste solo en `warm` y `sunny` .
*   Por lo tanto, se deben pasar dos parámetros a la función `slice()` . El primer parámetro debe ser el índice en el que desea que comience la subcadena. El segundo parámetro debe ser el índice en el que finaliza la subcadena.
*   Nota: el segundo parámetro finalizará la subcadena en ese índice exacto.

## Ejemplo:

```javascript
 return arr.slice(1,4); 
 /* This will return a substring consisting of indexs [1,2,3] 
    Note: arr[4] is NOT included. 
```

## Solución:

```javascript
function forecast(arr) { 
  // change code below this line 
  return arr.slice(2,4); 
 } 
 
 // do not change code below this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 

```