---
title: Matrix Calculator
localeTitle: Матричный калькулятор
---
## Матричный калькулятор

Матричный калькулятор используется для выполнения сложения, вычитания или умножения. Кроме того, он может выполнять операции, специфичные для матриц, такие как перенос матрицы, инверсия или определение ранга матрицы.

Матрица построена из строк и столбцов (nxm). Операции, выполняемые на матрицах, часто устанавливают некоторые ограничения на размеры матрицы.

##### Дополнение:

Добавление выполняется путем добавления значений двух матриц **одинаковых** размеров. Результатом является массив тех же размеров, что и исходный.

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

##### Вычитание:

Вычитание производится путем вычитания значений двух матриц **одинаковых** размеров. Результатом является массив тех же размеров, что и исходный.

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

##### Умножение:

Умножение может быть выполнено либо умножением матрицы на скаляр, либо умножением матриц. Если мы умножим две матрицы, это можно сделать, только если число столбцов в левой матрице равно числу строк в правой матрице.

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

#### Дополнительная информация:

https://en.wikipedia.org/wiki/Matrix\_(mathematics)