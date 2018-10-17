---
title: Comparison with the strict equality operator
localeTitle: Comparação com o operador estrito de igualdade
---
## Comparação com o operador estrito de igualdade

### Explicação do problema:

· _Use o operador de igualdade estrito na instrução `if` para que a função retorne "Equal" quando `val` for estritamente igual a `7` ._

#### Sugestão 1

Lembre-se do exercício anterior que a _igualdade é diferente da atribuição ( `=` ), que atribui o valor à direita do operador a uma variável à esquerda._ [1](#cite1)

> _tente resolver o problema agora_
> 
> #### Sugestão 2
> 
> _Ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, o operador de igualdade estrita não executa uma conversão de tipo._ [2](#cite2) _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
// Setup 
 function testStrict(val) { 
  if (val === 7) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 
 // Change this value to test 
 testStrict(10); 
```

### Explicação de código

A função primeiro avalia `if` a condição `(val === 7)` avaliada como `true` . Em caso afirmativo, retorna a instrução entre as chaves ("Equal"). Caso contrário, retorna a próxima instrução de `return` fora deles ("Não é igual").

### Fontes

1 ["JavaScript Básico: Comparação com o Operador de Igualdade", lição do fCC em _Algoritmos de Javascript e Certificação de Estruturas de Dados_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

2 ["JavaScript Básico: Comparação com o Operador de Igualdade Estrita", lição do fCC em _Algoritmos de Javascript e Certificação de Estruturas de Dados_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Recursos

*   ["if… else" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
    
*   [Kondov, Alexander. "Entendendo JS: Coerção". _Hackernoon_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) , acessado em 15 de setembro de 2018
    
*   ["Operadores de comparação" - _referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)