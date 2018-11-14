---
title: Understand the Constructor Property
localeTitle: Entenda a propriedade do construtor
---
## Entenda a propriedade do construtor

### Método

Simplesmente termine a função como a do exemplo dado. Use uma `if-statement` para testar se o `candidate` é ou não um `Dog` .

### Solução

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 // Add your code below this line 
 function joinDogFraternity(candidate) { 
  if(candidate.constructor === Dog) { 
    return true; 
  } 
  else { 
    return false; 
  } 
 } 

```