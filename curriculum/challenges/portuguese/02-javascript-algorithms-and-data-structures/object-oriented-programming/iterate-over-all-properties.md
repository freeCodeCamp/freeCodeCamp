---
id: 587d7daf367417b2b2512b7d
title: Iterar sobre todas as propriedades
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Até agora você já viu dois tipos de propriedades: as propriedades <dfn>own properties</dfn> e `prototype`. Propriedades próprias (ou Own properties) são definidas diretamente na própria instância do objeto. E as propriedades do protótipo são definidas em `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Aqui está como você adiciona own properties `duck` para o array `ownProps` e propriedades `prototype` para o array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` deve exibir no console `["name"]`, e `console.log(prototypeProps)` exibirá no console `["numLegs"]`.

# --instructions--

Adicione todas as propriedades próprias de `beagle` para o array `ownProps`. Adicione todas as propriedades `prototype` de `Dog` para o array `prototypeProps`.

# --hints--

O array `ownProps` deve conter apenas `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

O array `prototypeProps` deve conter apenas `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Você deve resolver este desafio sem utilizar o método nativo `Object.keys()`.

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
