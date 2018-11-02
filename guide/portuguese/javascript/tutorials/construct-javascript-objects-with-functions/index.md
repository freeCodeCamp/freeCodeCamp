---
title: Construct JavaScript Objects with Functions
localeTitle: Construa objetos JavaScript com funções
---
Usando construtores é fácil criar novos objetos usando um blueprint ou construtor. A sintaxe da declaração é um pouco diferente, mas ainda assim fácil de lembrar.
```
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers. 
 var Car = function() { 
  this.wheels = 4; 
  this.engines = 1; 
  this.seats = 1; 
 }; 
 
 var myCar = new Car(); 
```

O nome de uma função de construtor geralmente começa com uma letra maiúscula (ao contrário de outras funções, que tendem a começar com um caractere minúsculo). A letra maiúscula deve ajudar os desenvolvedores a usar a nova palavra-chave quando eles criam um objeto usando essa função.