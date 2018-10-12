---
title: Make Code More Reusable with the this Keyword
localeTitle: Tornar o código mais reutilizável com esta palavra-chave
---
## Tornar o código mais reutilizável com esta palavra-chave

### Método:

Este desafio é simplesmente demonstrar o poder da palavra `this` chave `this` . Substituir `dog.numLegs` por `this.numLegs` fortalece nosso código referenciando diretamente este objeto. [O developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) tem muitos exemplos para determinar os efeitos da palavra `this` chave `this` .

### Solução:

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} 
 }; 
 
 dog.sayLegs(); 

```