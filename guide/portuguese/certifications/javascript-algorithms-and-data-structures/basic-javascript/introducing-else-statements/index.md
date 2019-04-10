---
title: Introducing Else statements
localeTitle: Apresentando instruções Else
---
## Apresentando instruções Else

### Explicação do problema:

· _Combine as instruções `if` em uma única instrução `if/else` ._

#### Sugestão 1

Quando a primeira instrução `if` retorna `false` a próxima parte do código é executada / avaliada (como `return` , `if` or `else` statements).

> _tente resolver o problema agora_

#### Sugestão 2

Algumas vezes, `if` instruções ( `condition` ) podem ser substituídas por `else {code to execute instead}` instruções `else {code to execute instead}` (na essência, você está dizendo à sua função para fazer _"y"_ se não puder fazer _"x" em_ vez de especificar _"x"_ várias vezes).

> _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução básica de código:

```javascript
function testElse(val) { 
  var result = ""; 
  // Only change code below this line 
 
  if (val > 5) { 
    result = "Bigger than 5"; 
  } 
 
  else { 
    result = "5 or smaller"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 testElse(4); 
```

· [Executar código em repl.it](https://repl.it/@AdrianSkar/Introducing-else-statements)

### Explicação de código

A função primeiro avalia `if` a condição `val > 5` avaliada como `true` . Se não, ele executa a próxima instrução ( `else { return "5 or smaller";})` .

### Recursos

*   ["if… else" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)