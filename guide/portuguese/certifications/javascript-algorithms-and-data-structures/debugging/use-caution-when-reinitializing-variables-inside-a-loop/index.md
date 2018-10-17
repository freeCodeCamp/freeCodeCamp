---
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: Tenha cuidado ao reinicializar variáveis ​​dentro de um loop
---
## Tenha cuidado ao reinicializar variáveis ​​dentro de um loop

*   Esse desafio deve ser resolvido redefinindo o escopo da `row[]` .
*   Abaixo está um exemplo da matriz desejada.

```javascript
[ 
 [0][0], 
 [0][0], 
 [0][0] 
 ] 
```

*   No entanto, a matriz atual - vista abaixo - está longe da matriz desejada

```javascript
[ 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0] 
 ] 
```

*   Este erro ocorre devido à matriz `row[]` sendo declarada como uma variável global fora do loop aninhado.
*   No entanto, para preencher a matriz corretamente, a matriz `row[]` deve ser redefinida após cada iteração do loop externo.

## Solução

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