---
title: Arrow Functions
localeTitle: Funções de seta
---
## Funções de seta

Funções no ES6 mudaram um pouco. Quero dizer a sintaxe.

```javascript
// Old Syntax 
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // New Syntax 
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
```

A nova sintaxe pode ser um pouco confusa. Mas vou tentar explicar a sintaxe. Existem duas partes da sintaxe.

1.  var newOne = ()
2.  \=> {}

A primeira parte é apenas declarar uma variável e atribuir a função (ie) () a ela. Apenas diz que a variável é na verdade uma função.

Então a segunda parte está declarando a parte do corpo da função. A parte da seta com as chaves indica a parte do corpo.

Outro exemplo com parâmetros:

```javascript
let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
```

Parênteses são opcionais quando há apenas um nome de parâmetro:

```javascript
let newOneWithOneParam = a => { 
 console.log(a); 
 } 
```

Uma vantagem incrível da função de setas é que você não pode religar uma função de seta. Sempre será chamado com o contexto em que foi definido. Apenas use uma função normal.

```javascript
// Old Syntax 
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // New Syntax 
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
```

Eu não acho que eu precise dar uma explicação para isso. É simples.