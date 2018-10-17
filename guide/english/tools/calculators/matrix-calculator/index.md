---
title: Matrix Calculator
---
## Matrix Calculator

A Matrix Calculator is used to perform addition, subtraction or multiplication.
Additionally it can perform operations specific to matrices, such as matrix transposition, inversion or define matrix's rank.

Matrix is built from rows and columns (n x m). Operations done on matrices often put some restrictions on the matrix's dimensions.

##### Addition:
Addition is done by adding values of two matrices of **same** dimensions.
The result is an array of same dimensions as the original ones.
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

##### Subtraction:
Subtraction is done by subtracting values of two matrices of **same** dimensions.
The result is an array of same dimensions as the original ones.
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

##### Multiplication:
Multiplication can be done either by multiplying a matrix by a scalar, or by multiplying matrices.
If we multiply two matrices, it can only be done if the number of columns in the left matrix is equal to number of rows in the right matrix. 
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
#### More information:
https://en.wikipedia.org/wiki/Matrix_(mathematics)
