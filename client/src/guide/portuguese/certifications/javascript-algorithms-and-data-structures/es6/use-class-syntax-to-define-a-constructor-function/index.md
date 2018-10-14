---
title: Use class Syntax to Define a Constructor Function
localeTitle: Use a sintaxe de classe para definir uma função de construtor
---
## Use a sintaxe de classe para definir uma função de construtor

Nesta lição, você está definindo o objeto Vegetable usando a sintaxe de classe.

## Sugestão 1:

Crie a classe chamada `Vegetable` . Ele conterá os detalhes necessários sobre o objeto `Vegetable` .

## Dica 2:

Coloque um construtor com um parâmetro chamado `name` e configure-o para `this.name` .

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
  class Vegetable { 
    constructor(name){ 
      this.name = name; 
    } 
  } 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
```

\=======

Spoiler Warning: aqui está uma solução básica para este desafio, caso você esteja preso.

```javascript
function makeClass() { 
  "use strict"; 
  /* Alter code below this line */ 
 
   class Vegetable { 
     constructor(Vegetable){ 
       this.Vegetable = Vegetable; 
 
     } 
   } 
 
  /* Alter code above this line */ 
  return Vegetable; 
 } 
 const Vegetable = makeClass(); 
 const carrot = new Vegetable('carrot'); 
 console.log(carrot.name); // => should be 'carrot' 

```