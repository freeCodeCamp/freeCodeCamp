---
id: 587d7dad367417b2b2512b78
title: Usar um construtor para criar objetos
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Aqui está o construtor de `Bird` do desafio anterior:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**Observação:** `this` dentro do construtor sempre refere-se ao objeto sendo criado.

Note que o operador `new` é usado quando chamamos o construtor. Isso avisa ao JavaScript para criar uma nova instância de `Bird` chamado `blueBird`. Sem o operador `new`, `this` dentro do construtor não iria apontar para o objeto recentemente criado, dando resultados inesperados. Agora `blueBird` possui todas as propriedades definidas dentro do construtor `Bird`:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Utilize o construtor de `Dog` da última lição para criar uma nova instância de `Dog`, atribuindo a instância para a variável `hound`.

# --hints--

`hound` deve ser criado utilizando o construtor `Dog`.

```js
assert(hound instanceof Dog);
```

O código deve utilizar o operador `new` para criar uma instância de `Dog`.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
