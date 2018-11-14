---
title: Change the Prototype to a New Object
localeTitle: Alterar o protótipo para um novo objeto
---
## Alterar o protótipo para um novo objeto

Em vez de adicionar cada propriedade protótipo, uma a uma, com `object.prototype.property` . Podemos fazer isso muito mais facilmente definindo o protótipo para um novo objeto. Dessa forma, todas as propriedades do protótipo são adicionadas de uma só vez.

  

## Dica:

```javascript
Dog.prototype = { 
  property: value, 
  functionName: function(){ 
 
  }, 
 } 
```

Agora tente resolver o desafio!

  

## Solução de alerta de spoiler à frente!

  

## Solução 1:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat: function(){ 
    console.log('nom nom nom'); 
  }, 
  describe: function(){ 
    console.log("My name is " + this.name); 
  } 
 } 
```

## Explicação do código:

Atribuímos a variável protótipo a um novo objeto. Então nós declaramos a propriedade numLegs e damos um valor de 2.

Em seguida, criamos as duas funções "comer" e "descrever". Agora lembre-se de funções em objetos são métodos com a mesma sintaxe como propriedades. Você tem o nome seguido por um valor. Esse valor é a função e o nome é o nome da sua função.  

## Solução 2:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype = { 
  // Add your code below this line 
  numLegs: 2, 
  eat(){ 
    console.log('nom nom nom'); 
  }, 
  describe(){ 
    console.log("My name is " + this.name); 
  } 
 }; 
```

## Explicação do código:

A única coisa diferente entre esta solução e a última solução é que encurtamos a sintaxe nas funções "comer" e "descrever". Nós fizemos isso removendo o ":" e a palavra "função".

Com ES6 estamos autorizados a fazer isso.

Você pode ler sobre isso aqui: [Referência](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)