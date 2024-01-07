---
id: 587d7dae367417b2b2512b7b
title: Comprender las propiedades directas
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

En el siguiente ejemplo, el constructor `Bird` define dos propiedades: `name` y `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` y `numLegs` se llaman <dfn>propiedades directas</dfn>, porque están definidas directamente en la instancia del objeto. Eso significa que `duck` y `canary` tienen su propia copia separada de estas propiedades. De hecho, cada instancia de `Bird` tendrá su propia copia de estas propiedades. El siguiente código añade todas las propiedades directas de `duck` al arreglo `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

La consola mostrará el valor `["name", "numLegs"]`.

# --instructions--

Agrega todas las propiedades directas de `canary` al arreglo `ownProps`.

# --hints--

`ownProps` debe incluir los valores `numLegs` y `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Debes resolver este desafío sin usar el método `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Debes resolver este desafío sin hacer una programación fija (hardcoding) del arreglo `ownProps`.

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
