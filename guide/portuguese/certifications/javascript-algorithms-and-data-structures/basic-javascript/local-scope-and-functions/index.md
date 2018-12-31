---
title: Local Scope and Functions
localeTitle: Escopo Local e Funções
---
## Escopo Local e Funções

Escopo local significa que a variável está disponível em uma determinada área. No caso deste exercício, `myVar` só está disponível dentro da função, e não em qualquer lugar fora.

Aqui está a solução básica de código para criar uma variável `myVar` local.

```javascript
function myLocalScope() { 
  var myVar; 
  console.log(myVar); 
 } 
 myLocalScope(); 
```

A variável existe apenas na função. Fora da função, é inexistente.