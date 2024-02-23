---
id: 587d7dad367417b2b2512b77
title: Definir uma função construtora
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>Construtores</dfn> são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo objeto. Pense neles como uma planta para a criação de novos objetos.

Aqui está um exemplo de construtor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

O construtor define um objeto `Bird` com propriedades `name`, `color`, e `numLegs` definidos como Albert, blue e 2, respectivamente. Construtores seguem algumas convenções:

<ul><li>Construtores são definidos com a primeira letra do nome maiúscula para distinguir eles de outras funções que não são <code>constructors</code>.</li><li>Construtores usam a palavra-chave <code>this</code> para definir as propriedades do objeto que eles criarão. Dentro do construtor, <code>this</code> referencia para um novo objeto quer vai ser criado.</li><li>Construtores definem propriedades e comportamentos em vez de retornar valores como outras funções podem fazer.</li></ul>

# --instructions--

Crie um construtor, `Dog`, com as propriedades `name`, `color` e `numLegs` que são definidos como string, string e número, respectivamente.

# --hints--

`Dog` deve term uma propriedade `name` definida como uma string.

```js
assert(typeof new Dog().name === 'string');
```

`Dog` deve ter a propriedade `color` definida como uma string.

```js
assert(typeof new Dog().color === 'string');
```

`Dog` deve ter a propriedade `numLegs` definida como um número.

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
