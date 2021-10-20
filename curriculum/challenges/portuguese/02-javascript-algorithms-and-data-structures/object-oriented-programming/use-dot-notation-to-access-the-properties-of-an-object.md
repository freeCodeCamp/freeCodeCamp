---
id: 587d7dac367417b2b2512b74
title: Usar notação de ponto para acessar as propriedades de um objeto
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

O último desafio criou um objeto com várias propriedades. Agora você verá como acessar os valores dessas propriedades. Exemplo:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

A notação de ponto é utilizada no nome do objeto, `duck`, seguida pelo nome da propriedade, `name`, para acessar o valor de `Aflac`.

# --instructions--

Exiba ambas as propriedades do objeto `dog` no seu console.

# --hints--

Seu código deve usar `console.log` para exibir o valor da propriedade `name` do objeto `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Seu código deve usar `console.log` para exibir o valor para a propriedade `numLegs` do objeto `dog`.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
