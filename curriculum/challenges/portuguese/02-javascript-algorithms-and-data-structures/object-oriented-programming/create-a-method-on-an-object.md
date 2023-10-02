---
id: 587d7dad367417b2b2512b75
title: Criar um método em um objeto
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Objetos podem ter um tipo especial de propriedade, chamado de <dfn>método</dfn>.

Os métodos são propriedades que são funções. Isso adiciona diferentes comportamentos para um objeto. Aqui está o exemplo `duck` com um método:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

O exemplo adiciona o método `sayName`, que é uma função responsável por retornar uma frase contendo o nome do `duck`. Note que o método acessou a propriedade `name` na declaração de retorno usando `duck.name`. O próximo desafio vai mostrar outra forma de fazer isso.

# --instructions--

Usando o objeto `dog`, de a ele um método chamado `sayLegs`. O método deve retornar a frase `This dog has 4 legs. (Este cachorro possui 4 pernas.)`

# --hints--

`dog.sayLegs()` deve ser uma função.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` deve retornar a string definida - note que pontuação e espaçamento importa.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
