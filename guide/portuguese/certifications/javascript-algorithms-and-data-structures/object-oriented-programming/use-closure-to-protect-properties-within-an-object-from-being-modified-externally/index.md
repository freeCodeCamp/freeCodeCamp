---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
localeTitle: Use o fechamento para proteger as propriedades em um objeto de serem modificadas externamente
---
## Use o fechamento para proteger as propriedades em um objeto de serem modificadas externamente

### Método

Assim como no exemplo dado, em vez de declarar a variável de `weight` com a palavra `this` chave `this` , a palavra-chave `let` deve ser usada para declará-la como uma variável privada. Desta forma, só pode ser acessado dentro da função `Bird` . O método `getWeight` deve então ser adicionado dentro da função `Bird` para acessar a variável de `weight` .

### Solução

```javascript
function Bird() { 
  let weight = 15; 
 
  this.getWeight = function() { 
    return weight; 
  }; 
 
 } 

```