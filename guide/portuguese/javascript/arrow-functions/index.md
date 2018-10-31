---
title: Arrow Functions
localeTitle: Funções de seta
---
As funções de seta são uma nova sintaxe do ES6 para escrever expressões de função JavaScript. A sintaxe mais curta economiza tempo, além de simplificar o escopo da função.

## O que são funções de seta?

Uma expressão de função de seta é uma sintaxe mais concisa para expressões de função de escrita usando um token de "seta gorda" ( `=>` ).

### A sintaxe básica

Abaixo está um exemplo básico de uma função de seta:

```javascript
// ES5 syntax 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // ES6 arrow function 
 var multiply = (x, y) => { return x * y; }; 
 
 // Or even simpler 
 var multiply = (x, y) => x * y; 
```

Você não precisa mais da `function` e `return` palavras-chave, ou até mesmo as chaves.

### Um simplificado `this`

Antes de funções de seta, novas funções definidas sua própria `this` valor. Para usar `this` dentro de uma expressão de função tradicional, temos que escrever uma solução alternativa assim:

```javascript
// ES5 syntax 
 function Person() { 
  // we assign `this` to `self` so we can use it later 
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // `self` refers to the expected object 
    self.age++; 
  }, 1000); 
 } 
```

Uma função de seta não define é possuir `this` valor, ele herda `this` da função delimitador:

```javascript
// ES6 syntax 
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` now refers to the Person object, brilliant! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
```

#### Leitura Adicional

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)