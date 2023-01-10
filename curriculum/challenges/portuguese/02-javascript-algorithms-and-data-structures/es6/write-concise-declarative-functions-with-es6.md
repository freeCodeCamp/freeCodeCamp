---
id: 587d7b8b367417b2b2512b50
title: Escrever funções declarativas concisas com ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Ao definir funções dentro de objetos em ES5, nós temos de usar a palavra-chave `function` como se segue:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Com ES6, você pode remover a palavra-chave `function` e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Refatore a função `setGear` dentro do objeto `bicycle` para usar a sintaxe curta descrita acima.

# --hints--

Expressão tradicional de função não deve ser usado.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` deve ser uma função declarativa.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` deve alterar o valor de `gear` para 48.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
