---
title: Multiples of 3 and 5
localeTitle: Múltiplos de 3 e 5
---
## Problema 1: Múltiplos de 3 e 5

### Método:

*   Podemos encontrar se um número é divisível por outro número com a ajuda do operador `%` modulo.
*   `num1 % num2` retorna `0` se não houver nenhum resto enquanto faz `num1/num2` .
*   A partir de `i = 3` porque esse é o primeiro número divisível por 3 ou 5, percorremos até o `number` fornecido.
*   Se o número for divisível por 3 ou 5, adicionamos isso à `sum` variável e finalmente a retornamos.

### Solução:

```js
function multiplesOf3and5(number) { 
  let sum = 0, i = 3; 
  while (i < number){ 
    if (i % 3 == 0 || i % 5 == 0) sum += i; 
    i++; 
  } 
  return sum; 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)

### Referência:

*   [Operador Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())