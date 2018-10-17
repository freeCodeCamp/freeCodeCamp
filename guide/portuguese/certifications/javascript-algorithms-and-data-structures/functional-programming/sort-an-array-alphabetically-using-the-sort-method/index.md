---
title: Sort an Array Alphabetically using the sort Method
localeTitle: Ordenar uma matriz em ordem alfabética usando o método de classificação
---
## Ordenar uma matriz em ordem alfabética usando o método de classificação

### Método

No exemplo dado, vemos como escrever uma função que retornará uma nova matriz em ordem alfabética inversa.

```javascript
function reverseAlpha(arr) { 
  return arr.sort(function(a, b) { 
    return a < b; 
  }); 
 } 
 reverseAlpha(['l', 'h', 'z', 'b', 's']); 
 // Returns ['z', 's', 'l', 'h', 'b'] 
```

Usando essa lógica, simplesmente faça engenharia reversa da função para retornar uma nova matriz em ordem alfabética.

### Solução

```javascript
function alphabeticalOrder(arr) { 
  // Add your code below this line 
  return arr.sort(function(a,b) { 
    return a > b; 
  }); 
  // Add your code above this line 
 } 
 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); 

```