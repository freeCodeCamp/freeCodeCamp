---
title: Use getters and setters to Control Access to an Object
localeTitle: Use getters e setters para controlar o acesso a um objeto
---
## Use getters e setters para controlar o acesso a um objeto

Getters e setters são partes críticas de uma classe / objeto. Eles permitem que você controle seus atributos do lado de fora. Eles se tornarão mais proeminentes quando você começar com a unidade de Programação Orientada a Objetos (chegando!). Por enquanto, este exercício mostra como manipulá-los com o ES6.

## Sugestão 1:

Crie a classe, termostato. Você vai colocar seu construtor, getter e setter aqui.

## Dica 2:

Dê ao construtor um parâmetro (que você pode nomear o que quiser). Defina o parâmetro para um atributo com o mesmo nome. Lembre-se, você está inicialmente definindo as coisas na temperatura de Farenheit.

## Dica 3:

Crie um método get que converta o atributo Farenheit para Celsius. Use a fórmula dada a você.

## Dica 4:

Crie um método set com o mesmo nome do método get. Deve ter um parâmetro que aceite temperatura celsius. Converta-o para farenheit e configure-o para o atributo.

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
  class Thermostat{ 
    constructor(farenheit){ 
      this.farenheit = farenheit; 
    } 
    get temperature(){ 
      return 5 / 9 * (this.farenheit - 32); 
    } 
    set temperature(celsius){ 
      this.farenheit = celsius * 9.0 / 5 + 32; 
    } 
  } 
 
  /* Alter code above this line */ 
  return Thermostat; 
 } 

```