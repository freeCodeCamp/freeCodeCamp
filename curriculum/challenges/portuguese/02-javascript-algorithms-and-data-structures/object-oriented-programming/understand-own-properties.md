---
id: 587d7dae367417b2b2512b7b
title: Entender propriedades próprias
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

No próximo exemplo, o construtor de `Bird` define duas propriedades: `name` e `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` e `numLegs` são chamados <dfn>own properties</dfn>, pois são definidos diretamente na instância do objeto. Isso significa que cada `duck` e `canary` possuem suas próprias cópias separadas destas propriedades. Na verdade, toda instância de `Bird` terá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades próprias (own properties) de `duck` para o array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

O console vai exibir o valor `["name", "numLegs"]`.

# --instructions--

Adicione as propriedades próprias do `canary` para o array `ownProps`.

# --hints--

`ownProps` deve incluir os valores `numLegs` e `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Você deve resolver este desafio sem utilizar o método nativo `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Você deve resolver este desafio sem definir o array `ownProps` de forma fixa no código.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
