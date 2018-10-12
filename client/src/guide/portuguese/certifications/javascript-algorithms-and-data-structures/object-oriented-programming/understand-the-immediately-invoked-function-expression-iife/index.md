---
title: Understand the Immediately Invoked Function Expression (IIFE)
localeTitle: Entenda a Expressão de Função Imediatamente Invocada (IIFE)
---
## Entenda a Expressão de Função Imediatamente Invocada (IIFE)

### Método

O primeiro caso de teste pede para você tornar a função anônima. Para fazer isso, simplesmente remova o nome da função como visto no exemplo. A função deve então ser envolvida em chaves com outro conjunto de chaves no final para chamar imediatamente a função.

### Solução

```javascript
(function() { 
  console.log("A cozy nest is ready"); 
 })(); 

```