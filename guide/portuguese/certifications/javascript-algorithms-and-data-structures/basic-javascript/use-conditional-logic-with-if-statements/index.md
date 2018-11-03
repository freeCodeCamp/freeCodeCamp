---
title: Use conditional logic with If statements
localeTitle: Use lógica condicional com instruções If
---
## Use lógica condicional com instruções If

### Explicação do problema:

_Crie uma declaração `if` dentro da função para retornar `"Yes, that was true"` se o parâmetro `wasThatTrue` for `true` e retornar `"No, that was false"` caso contrário._

#### Sugestão 1

Sua instrução `if` avaliará se sua `(condition)` é `true` ou `false` e executará (se ela for avaliada como `true` ) a `{statement}` declarada logo após ela.

> _tente resolver o problema agora_

#### Sugestão 2

Caso sua `(condition)` avaliada como `false` a `{statement}` não será executada e a função retornará a próxima declaração de `return` .

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
// Setup 
 function trueOrFalse(wasThatTrue) { 
 
  // Only change code below this line. 
 
  if (wasThatTrue) 
   { 
    return "Yes, that was true"; 
    } 
  return "No, that was false"; 
 
  // Only change code above this line. 
 } 
```

### Explicação de código

A função primeiro avalia `if` a condição `(wasThatTrue)` avaliada como `true` . Se isso acontecer, retornará a instrução entre as chaves. Caso contrário, retorna a próxima instrução de `return` fora deles.

### Recursos

*   ["Boolean" - Glossário MDN](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
    
*   ["if… else" - Referência do MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)