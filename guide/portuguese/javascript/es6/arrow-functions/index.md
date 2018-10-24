---
title: Arrow Functions
localeTitle: Funções de seta
---
## Funções de seta

### Definição
Funções de Seta (_Arrow Functions_) é uma nova sintaxe para se escrever funções ES6. A nova sintaxe economiza tempo e simplifica o escopo da função

```javascript
// ES5
var multiply = function(x, y) {
  return x * y;
};

// ES6 arrow function
var multiply = (x, y) => { return x * y; };

// ES6 mais simples
var multiply = (x, y) => x * y;    

// ES6 mais simples ainda
var square = x => x * x

```

Não é mais necessária a palavra `function` nem o `return` para funções mais simples.

### Contexto _this_ simplificado
As funções no ES6 definem seu próprio contexto `this` de forma que são necessários artifícios para uso do contexto exterior à função:

```javascript
// ES5
function Person() {
  // `this` é atribuído à `self`
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    // `self` se refere ao contexto de `Person`
    self.age++;
  }, 1000);
}
```

Uma arrow function não redefine o `this`. Portanto o método acima pode ser reescrito como:

```javascript
// ES5
function Person(){
  this.age = 0;

  setInterval(() => {
    // `this` se refere ao contexto de `Person`
    this.age++;
  }, 1000);
}
```

**Mais informações**: [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
