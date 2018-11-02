---
title: Comparison with the Equality Operator
localeTitle: Comparação com o operador de igualdade
---
## Comparação com o operador de igualdade

### Explicação do problema:

_Adicione o operador de igualdade à linha indicada para que a função retorne "Equal" quando `val` é equivalente a 12._

#### Sugestão 1

Lembre-se que a _igualdade é diferente da atribuição ( `=` ), que atribui o valor à direita do operador a uma variável à esquerda._ [1](#cite1)

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
function testEqual(val) { 
  if (val == 12) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 // Change this value to test 
 testEqual(10); 
```

· [Executar código em repl.it](https://repl.it/@AdrianSkar/Basic-JS-Equality-operator)

### Explicação de código

A função primeiro avalia `if` a condição `(val == 12)` avaliada como `true` . Em caso afirmativo, retorna a instrução entre as chaves ("Equal"). Caso contrário, retorna a próxima instrução de `return` fora deles ("Não é igual").

### Fontes

1 ["JavaScript Básico: Comparação com o Operador de Igualdade", lição do fCC em _Algoritmos de Javascript e Certificação de Estruturas de Dados_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

### Recursos

*   ["Operador de igualdade" - _referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())