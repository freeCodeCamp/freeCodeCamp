---
title: Adding a Default Option in Switch Statements
localeTitle: Adición de una opción predeterminada en los estados de cambio
---
# Adición de una opción predeterminada en los estados de cambio

*   Al agregar una opción predeterminada, se asegura de que, en caso de que su variable no coincida con ninguna de las opciones, se use el valor predeterminado.

## Solución:

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