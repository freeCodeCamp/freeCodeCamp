---
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: Tenga cuidado al reinicializar variables dentro de un bucle
---
## Tenga cuidado al reinicializar variables dentro de un bucle

*   Este desafío debe resolverse redefiniendo el alcance de la `row[]` .
*   A continuación se muestra un ejemplo de la matriz deseada.

```javascript
[ 
 [0][0], 
 [0][0], 
 [0][0] 
 ] 
```

*   Sin embargo, la matriz actual, que se ve a continuación, está lejos de la matriz deseada

```javascript
[ 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0] 
 ] 
```

*   Este error se produce debido a que la matriz `row[]` se declara como una variable global fuera del bucle anidado.
*   Sin embargo, para rellenar la matriz correctamente, la `row[]` debe restablecerse después de cada iteración del bucle externo.

## Solución

```javascript
function zeroArray(m, n) { 
  let newArray = []; 
  for (let i = 0; i < m; i++) { 
     let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */ 
    for (let j = 0; j < n; j++) { 
 
      row.push(0); 
    } 
    newArray.push(row); 
  } 
  return newArray; 
 } 
 let matrix = zeroArray(3, 2); 
 console.log(matrix); 

```