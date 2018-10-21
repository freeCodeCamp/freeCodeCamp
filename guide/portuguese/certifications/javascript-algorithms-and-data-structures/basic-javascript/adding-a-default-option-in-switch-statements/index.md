---
title: Adding a Default Option in Switch Statements
localeTitle: Adicionando uma opção padrão em instruções de troca
---
# Adicionando uma opção padrão em instruções de troca

*   Adicionar uma opção padrão garante que, caso sua variável não corresponda a nenhuma das opções, o padrão será usado.

## Solução:

```javascript
function switchOfStuff(val) { 
  var answer = ""; 
 
  switch(val){ 
    case 'a': answer = 'apple'; 
    break; 
    case 'b': answer = 'bird'; 
    break; 
    case 'c': answer = 'cat'; 
    break; 
    default: answer = 'stuff'; 
  } 
 
  return answer; 
 } 

```