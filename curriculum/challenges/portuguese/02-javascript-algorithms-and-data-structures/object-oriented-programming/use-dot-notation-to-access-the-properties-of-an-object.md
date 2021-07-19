---
id: 587d7dac367417b2b2512b74
title: Use Ponto Notação para Acessar as Propriedades de um Objeto
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

O último desafio criou um objeto com várias propriedades. Agora você verá como acessar os valores dessas propriedades. Aqui está um exemplo:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Ponto notação é utilizado no nome do objeto, `duck`, seguido pelo nome da propriedade, `name`, para acessar o valor de `Aflac`.

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
