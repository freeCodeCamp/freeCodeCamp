---
id: 587d7dac367417b2b2512b73
title: Criar um objeto JavaScript básico
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Pense sobre as coisas que as pessoas veem todos os dias, como carros, lojas e pássaros. Tudo isso são <dfn>objetos</dfn>: coisas tangíveis com que pessoas podem observar e interagir.

Quais são algumas qualidades destes objetos? Um carro possui rodas. Lojas vendem itens. Pássaros possuem asas.

Estas qualidades, ou <dfn>propriedades</dfn>, definem o que faz um objeto. Note que objetos similares compartilham de propriedades iguais, mas podem ter diferentes valores para estas propriedades. Por exemplo, todos os carros possuem rodas, mas nem todos os carros possuem o mesmo número de rodas.

Objetos em JavaScript são utilizados como modelos de objetos do mundo real, dando a eles propriedades e comportamentos assim como se fossem análogos ao mundo real. Aqui está um exemplo utilizando estes conceitos para a criação de um objeto `duck`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

O objeto `duck` possui dois pares de propriedades/valores: um `name` sendo `Aflac` e um `numLegs` sendo 2.

# --instructions--

Cria um objeto `dog` com as propriedades `name` e `numLegs`, e definem eles como sendo do tipo string e numérico, respectivamente.

# --hints--

`dog` deve ser um objeto.

```js
assert(typeof dog === 'object');
```

`dog` deve ter uma propriedade `name` definido para uma string.

```js
assert(typeof dog.name === 'string');
```

`dog` deve ter uma propriedade `numLegs` definido para um número.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
