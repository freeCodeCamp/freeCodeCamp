---
title: Extend Constructors to Receive Arguments
localeTitle: Estender construtores para receber argumentos
---
## Estender construtores para receber argumentos

### Método:

Assim como no exemplo `Bird()` , a função `Dog()` deve executar dois parâmetros - `name` e `color` . O nome e a cor devem ser inicializados dentro da função usando a palavra `this` chave `this` . A propriedade final - `numLegs` é definida como 4, pois a função não aceita um parâmetro numLegs.

### Solução:

```javascript
function Dog(name, color) { 
  this.name = name; 
  this.color = color; 
  this.numLegs = 4; 
 } 
 let terrier = new Dog("George","White"); 

```