---
id: 587d7dae367417b2b2512b79
title: Estender construtores para receber argumentos
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

Os construtores `Bird` e `Dog` do último desafio funcionaram bem. No entanto, note que todos os `Birds` que são criados com o construtor `Bird` são automaticamente nomeados Albeart, são da cor azul e possuem duas pernas. E se você deseja pássaros com diferentes valores para seus nomes e cores? É possível alterar estas propriedades de cada pássaro manualmente, mas isso daria bastante trabalho:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suponha que você está escrevendo um programa para registrar centenas ou até milhares de diferentes pássaros em um aviário. Seria necessário muito tempo para criar todos estes pássaros, e então alterar as propriedades para os diferentes valores de cada um. Para criar diferentes objetos `Bird` de forma mais fácil, você pode projetar o construtor de Bird para aceitar parâmetros:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Em seguida, passe os valores como argumentos para definir cada pássaro único no construtor `Bird`: ` let cardinal = new Bird("Bruce","red");` Isso dará uma nova instância de `Bird` com as propriedades `name` e `color` definidas como `Bruce` e `red`, respectivamente. A propriedade `numLegs` ainda está definida como 2. O `cardinal` possui três propriedades:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

O construtor é mais flexível. Agora é possível definir as propriedades de cada `Bird` ao mesmo tempo em que são criados, o que é uma grande utilidade dos construtores JavaScript. Eles agrupam junto objetos baseados em características e comportamentos compartilhados e definem uma planta que automatiza a criação deles.

# --instructions--

Crie outro construtor `Dog`. Desta vez, defina o construtor para receber os parâmetros `name` e `color`, e que tenham a propriedade `numLegs` fixada em 4. Em seguida, crie um novo `Dog` salvo na variável `terrier`. Passe duas strings como argumentos para as propriedades `name` e `color`.

# --hints--

`Dog` deve receber um argumento para `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` deve receber um argumento para `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` deve ter a propriedade `numLegs` definido como 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` deve ser criado usando o construtor `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
