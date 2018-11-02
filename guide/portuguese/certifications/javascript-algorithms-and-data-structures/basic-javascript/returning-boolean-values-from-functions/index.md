---
title: Returning Boolean Values from Functions
localeTitle: Retornando valores booleanos de funções
---
## Retornando valores booleanos de funções

Em vez de usar um bloco if / else para comparar a variável, podemos fazê-lo dentro da declaração de retorno com um operador de comparação e um código minúsculo.

### Explicação do problema

_Corrigir a função `isLess` para remover as instruções `if...else` ._

```js
// Fix this code 
  if (a < b) { 
    return true; 
  } else { 
    return false; 
  } 
```

#### Sugestão 1

Como no [exercício anterior,](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch) você está prestes a mudar como a função retorna o valor correto, o que significa que você não precisa reutilizar ou modificar esse código, mas substituí-lo.

> _tente resolver o problema agora_

#### Sugestão 2

Para retornar `true` ou `false` você não precisa de duas declarações, nem de usar, `if` . O [operador de comparação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) correto é tudo que você precisa.

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução de Código:

```javascript
function isLess(a, b) { 
  // Fix this code 
  return a <= b; 
 } 
 // Change these values to test 
 isLess(10, 15); 
```

Execute o código em [repl.it.](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function)

### Recursos

*   ["Operador menor ou igual a (<=)" - _Referência do MDN para JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))