---
title: Array.prototype.every
localeTitle: Array.prototype.every
---
O método `every()` testa se todos os elementos da matriz passam no teste implementado pela função fornecida.

**Sintaxe**

```javascript
  arr.every(callback[, thisArg]) 
```

## Parâmetros

*   função de **retorno de chamada** para testar cada elemento, considerando três argumentos:
    
    *   **currentValue** (obrigatório)
        
        O elemento atual sendo processado na matriz.
        
    *   **índice** (opcional)
        
        O índice do elemento atual sendo processado na matriz.
        
    *   **array** (opcional)
        
        A matriz cada foi chamada.
        
*   **thisArg** Opcional. Valor para usar como este ao executar o retorno de chamada.
    

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx)

## Descrição

O método `every` chama a função de `callback` uma vez para cada elemento da matriz, em ordem ascendente de índice, até que a função de `callback` retorne false. Se um elemento que faz o `callback` de `callback` retornar false, o método every retornará `false` . Caso contrário, o método every retornará `true` .

A função de retorno de chamada não é chamada para elementos ausentes da matriz.

Além dos objetos de matriz, o método every pode ser usado por qualquer objeto que tenha uma propriedade length e que tenha nomes de propriedades numericamente indexados. `every` não muta a matriz na qual ele é chamado.

## Exemplos

```javascript
  function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true 
 
  // Define the callback function. 
  function CheckIfEven(value, index, ar) { 
      document.write(value + " "); 
 
      if (value % 2 == 0) 
          return true; 
      else 
          return false; 
  } 
 
  // Create an array. 
  var numbers = [2, 4, 5, 6, 8]; 
 
  // Check whether the callback function returns true for all of the 
  // array values. 
  if (numbers.every(CheckIfEven)) 
      document.write("All are even."); 
  else 
      document.write("Some are not even."); 
 
  // Output: 
  // 2 4 5 Some are not even. 

```