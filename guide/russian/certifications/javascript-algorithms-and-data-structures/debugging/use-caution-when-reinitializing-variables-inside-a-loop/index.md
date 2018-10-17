---
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: Предупреждение при переинициализации переменных внутри контура
---
## Предупреждение при переинициализации переменных внутри контура

*   Эта задача должна быть решена путем переопределения области `row[]` .
*   Ниже приведен пример нужной матрицы.

```javascript
[ 
 [0][0], 
 [0][0], 
 [0][0] 
 ] 
```

*   Однако текущая матрица, как видно ниже, далека от искомой матрицы

```javascript
[ 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0] 
 ] 
```

*   Эта ошибка возникает из-за того, что массив `row[]` объявляется глобальной переменной вне цикла вложенных циклов.
*   Однако, чтобы правильно заполнить матрицу, массив `row[]` должен быть сброшен после каждой итерации внешнего цикла.

## Решение

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