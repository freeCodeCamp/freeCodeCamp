---
title: Comparisons with the && (logical AND) operator
localeTitle: Comparações com o operador && (AND lógico)
---
## Comparações com o operador && (AND lógico)

### Explicação do problema:

· _Combine as duas declarações if em uma instrução que retornará `"Yes"` se `val` for menor ou igual a `50` e maior ou igual a `25` . Caso contrário, retornará `"No"` ._

#### Sugestão 1

O operador lógico AND ( `&&` ) compara ambas as declarações e retorna `true` somente se ambas forem verdadeiras ou puderem ser convertidas para true (verdade).

> _tente resolver o problema agora_

#### Sugestão 2

Lembre-se de que esse efeito também pode ser obtido aninhando- `if` instruções.

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
function testLogicalAnd(val) { 
  // Only change code below this line 
 
  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  } 
 
  // Only change code above this line 
  return "No"; 
 } 
 
 // Change this value to test 
 testLogicalAnd(10); 
```

· [Executar código em repl.it](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### Explicação de código

A função primeiro avalia `if` a condição `val <= 50` avaliada como `true` `val` conversão para um número se necessário, então faz o mesmo com `val >=25` por causa do operador lógico AND ( `&&` ); se ambos retornarem true, a instrução `return "Yes"` será executada.

### Recursos

*   ["Operadores lógicos" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)