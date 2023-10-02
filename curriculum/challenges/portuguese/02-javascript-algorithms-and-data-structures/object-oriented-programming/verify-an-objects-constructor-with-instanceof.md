---
id: 587d7dae367417b2b2512b7a
title: Verificar o construtor de um objeto com instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

Toda vez que a função construtora cria um novo objeto, o objeto é definido como uma <dfn>instance</dfn> do seu construtor. JavaScript provê uma forma conveniente para verificar isso com o operador `instanceof`. `instanceof` permite que você compare um objeto a um construtor, retornando `true` ou `false` caso seja ou não um objeto criado pelo construtor, respectivamente. Exemplo:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

Este método `instanceof` irá retornar `true`.

Se um objeto for criado sem usar um construtor, `instanceof` verificará que não é uma instância daquele construtor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

Este método `instanceof` irá retornar `false`.

# --instructions--

Crie uma nova instância do construtor `House`, atribuindo à variável `myHouse` e passe o número de quartos. Então, utilize `instanceof` para verificar que é uma instância de `House`.

# --hints--

`myHouse` deve ter o atributo `numBedrooms` definido para um número.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

Você deve verificar que `myHouse` é uma instância de `House` utilizando o operador `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
