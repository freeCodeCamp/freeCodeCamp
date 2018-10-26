---
title: Array.prototype.some
localeTitle: Array.prototype.some
---
O método de matriz JavaScript `.some()` terá uma função de retorno de chamada para testar cada elemento na matriz; uma vez que o callback retorna `true` então `.some()` retornará true imediatamente.

**Sintaxe**

```javascript
  var arr = [1, 2, 3, 4]; 
  arr.some(callback[, thisArg]); 
```

## Função de retorno de chamada

**Sintaxe**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
```

Veja o wiki sobre [operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) para ver o operador `%` restante

**Tem 3 argumentos**

*   currentElement
    
    *   Esta é uma variável que representa o elemento que está sendo passado para o retorno de chamada.
*   índice
    
    *   este é o valor do índice do elemento atual começando em 0
*   array
    
    *   a matriz que `.some()` foi chamada.

A função de retorno de chamada deve implementar um caso de teste.

## thisArg

É um parâmetro opcional e mais informações podem ser encontradas no \[MDN

## Descrição

`.some()` executará a função de retorno de chamada para cada elemento na matriz. Quando o retorno de chamada retornar true, `.some()` retornará `true` . Se o retorno de chamada retornar um [valor falso](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) para _cada_ elemento na matriz, então `.some()` retornará false.

`.some()` não irá alterar / alterar o array que o chamou.

## Exemplos

**Passando uma função para `.some()`**

```javascript
  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
 
  var arr1 = [1, 2, 3, 4, 5, 6]; 
  arr1.some(isEven);  // returns true 
  var arr2 = [1, 3, 5, 7]; 
  arr2.some(isEven);  // returns false 
```

**Função anônima**

```javascript
  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing']; 
  arr3.some(function(curr, index, arr) { 
      if (curr === 'The Amazing') { 
          return true; 
      } 
      }); // returns true 
 
  var arr4 = [1, 2, 14, 5, 17, 9]; 
  arr4.some(function(curr, index, arr) { 
      return curr > 20; 
      });  // returns false 
 
  // ES6 arrows functions 
  arr4.some((curr) => curr >= 14)  // returns true 
```

Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)