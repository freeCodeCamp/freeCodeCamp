---
title: Practice comparing different values
localeTitle: Pratique a comparação de valores diferentes
---
## Pratique a comparação de valores diferentes

### Explicação do problema:

· _Modifique a função para que ela retorne "Equal" somente quando os valores forem **estritamente** iguais._

#### Sugestão 1

Lembre-se de exercícios anteriores que, _ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, o operador de igualdade estrita não executa uma conversão de tipo._ [1](#cite1)

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
// Setup 
 function compareEquality(a, b) { 
    if (a === b) { // Change this line 
        return  "Equal"; 
    } 
    return  "Not Equal"; 
 } 
 
 // Change this value to test 
 compareEquality(10, "10"); 
```

### Explicação de código

A função primeiro avalia `if` a condição `(a === b)` avaliada como `true` considerando tanto o tipo quanto o valor. Em caso afirmativo, retorna a instrução entre as chaves ("Equal"). Caso contrário, retorna a próxima instrução de `return` fora deles ("Não é igual").

### Fontes

1 ["JavaScript Básico: Comparação com o Operador de Igualdade Estrita", lição do fCC em _Algoritmos de Javascript e Certificação de Estruturas de Dados_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Recursos

*   ["Usando os operadores de igualdade" - _referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)