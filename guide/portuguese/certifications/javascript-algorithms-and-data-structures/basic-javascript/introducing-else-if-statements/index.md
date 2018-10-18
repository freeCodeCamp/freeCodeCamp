---
title: Introducing Else If statements
localeTitle: Introduzindo instruções Else If
---
## Introduzindo instruções Else If

Lembre-se de usar Read-Search-Ask se você ficar preso. Tente emparelhar o programa e escrever seu próprio código.

\### Explicação do problema:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  return "Between 5 and 10"; 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

Modificaremos o código existente acima para que ele siga o fluxo de lógica que uma instrução **else-if** possui.

Dica ###: 1 `javascript if (val > 10) { return "Greater than 10"; }` Todas as instruções `if` e suas variantes começam com uma declaração `if` .

> _tente resolver o problema agora_

Dica ###: 2 `javascript else if (val < 5) { return "Smaller than 5"; }` Instruções entre a instrução `if` e a instrução `else` em um fluxo **else-if** estão no formato else-if

> _tente resolver o problema agora_

Dica ###: 3 `javascript else { return "Between 5 and 10"; }` A última instrução em um fluxo **else-if** está no formato `else` ### Alerta de spoiler! ![Spoiler](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif) Solução à frente! ## Solução básica de código:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  else if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  else { 
  return "Between 5 and 10"; 
  } 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

: rocket: [código de execução](https://repl.it/@RyanPisuena/GoldenWorriedRuntime) ## Explicação do código A estrutura de um **else-se o fluxo de lógica** é uma inicial `if` declaração, mais um `if-else` declarações, e uma final, `else` declaração.

### Recursos

*   ["if… else" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)