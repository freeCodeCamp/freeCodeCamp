---
title: Comparison with the Strict Inequality Operator
localeTitle: Comparação com o Operador Estrito da Desigualdade
---
## Comparação com o Operador Estrito da Desigualdade

### Explicação do problema:

· _Adicione o `strict inequality operator` à instrução `if` para que a função retorne "Not Equal" quando `val` não for estritamente igual a `17` ._

#### Sugestão 1

O operador de desigualdade estrita ( `!==` ) retornará `true` se o primeiro valor não for igual ao segundo considerando o tipo de valor.

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
function testStrictNotEqual(val) { 
  if (val !== 17) { 
    return "Not equal"; 
  } 
  return "Equal"; 
 } 
 
 // Change this value to test 
 testStrictNotEqual(10); 
```

### Explicação de código

A função primeiro avalia `if` a condição `(val !== 17)` avaliada como `true` considerando tanto o valor quanto o tipo de valor. Em caso afirmativo, retorna a instrução entre as chaves ("Não é igual"). Caso contrário, retorna a próxima instrução de `return` fora deles ("Equal").

### Recursos

*   ["Não-identidade / desigualdade estrita (! ==)" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))