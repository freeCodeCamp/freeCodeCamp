---
title: Matrix Calculator
localeTitle: Calculadora matricial
---
## Calculadora matricial

Uma calculadora matricial é usada para realizar adição, subtração ou multiplicação. Além disso, ele pode realizar operações específicas para matrizes, como transposição de matriz, inversão ou definir a classificação da matriz.

Matriz é construída de linhas e colunas (nxm). Operações realizadas em matrizes colocam algumas restrições nas dimensões da matriz.

##### Adição:

A adição é feita adicionando valores de duas matrizes de **mesmas** dimensões. O resultado é uma matriz das mesmas dimensões que as originais.

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

##### Subtração:

A subtração é feita subtraindo valores de duas matrizes de **mesmas** dimensões. O resultado é uma matriz das mesmas dimensões que as originais.

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

##### Multiplicação:

A multiplicação pode ser feita multiplicando uma matriz por um escalar ou multiplicando matrizes. Se multiplicarmos duas matrizes, isso só poderá ser feito se o número de colunas na matriz da esquerda for igual ao número de linhas na matriz da direita.

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

#### Mais Informações:

https://en.wikipedia.org/wiki/Matrix\_(matemática)