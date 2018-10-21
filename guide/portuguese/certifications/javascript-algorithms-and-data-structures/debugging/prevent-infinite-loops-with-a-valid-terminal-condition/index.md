---
title: Prevent Infinite Loops with a Valid Terminal Condition
localeTitle: Evite Loops Infinitos com uma Condição Terminal Válida
---
## Evite Loops Infinitos com uma Condição Terminal Válida

*   Para evitar um loop infinito, a `while-condition` deve atingir uma condição terminal para sair do loop.
*   Portanto, o erro neste desafio ocorre devido à condição - `i != 4` - no loop for.
*   Se você der uma olhada mais de perto no código:

```javascript
function myFunc() { 
  for (let i = 1; i != 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 
```

*   Você verá que `i` é inicializado pela primeira vez como 1 e após cada iteração do loop, `i` é incrementado por 2.
*   Usando esta lógica, após a primeira iteração - `i = 3` e a segunda iteração `i = 5` , a condição `i != 4` nunca será atendida e ocorrerá um loop infinito.

## Solução:

```javascript
function myFunc() { 
  for (let i = 1; i <= 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 

```