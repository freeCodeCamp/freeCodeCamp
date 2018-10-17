---
title: Matrix Calculator
localeTitle: Calculadora matricial
---
## Calculadora matricial

Se utiliza una calculadora matricial para realizar sumas, restas o multiplicaciones. Además, puede realizar operaciones específicas de matrices, como la transposición de la matriz, la inversión o definir el rango de la matriz.

La matriz se construye a partir de filas y columnas (nxm). Las operaciones realizadas en matrices a menudo ponen algunas restricciones en las dimensiones de la matriz.

##### Adición:

La adición se hace agregando valores de dos matrices de las **mismas** dimensiones. El resultado es una matriz de las mismas dimensiones que las originales.

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function addMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] + b[i][j]; 
    } 
  } 
 
  return result; 
 } 
```

##### Sustracción:

La resta se realiza restando los valores de dos matrices de las **mismas** dimensiones. El resultado es una matriz de las mismas dimensiones que las originales.

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function subtractMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] - b[i][j]; 
    } 
  } 
 
  return result; 
 } 
```

##### Multiplicación:

La multiplicación se puede hacer ya sea multiplicando una matriz por un escalar, o multiplicando matrices. Si multiplicamos dos matrices, solo se puede hacer si el número de columnas en la matriz izquierda es igual al número de filas en la matriz derecha.

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function multiplyMatrices(a, b) { 
  // we might want to add here constraints for the dimensions 
  //let's assume that b has to be either a scalar or an array 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || ((!Array.isArray(b) || !Array.isArray(b[0])) && isNaN(b))) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  if (!isNaN(b)) { 
    for (let i = 0; i < a.length; i++) { 
      for (let j = 0; j < a[i].length; j++) { 
        a[i][j] = a[i][j] * b; 
      } 
    } 
    return a; 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      let sum = 0; 
      for (let k = 0; k < b[i].length; k++) { 
        sum += a[i][k] * b[k][j]; 
      } 
      result[i][j] = sum; 
    } 
  } 
 
  return result; 
 } 
```

#### Más información:

https://en.wikipedia.org/wiki/Matrix\_(mathematics)