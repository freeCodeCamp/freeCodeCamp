---
id: 587d7daf367417b2b2512b7d
title: Itera sobre todas las propiedades
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Ahora has visto dos tipos de propiedades: <dfn>propiedades directas</dfn> y propiedades `prototype`. Las propiedades directas se definen directamente en la propia instancia del objeto. Y las propiedades prototype se definen en el `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

A continuación, se explica cómo se agregan las propiedades directas de `duck` al arreglo `ownProps` y las propiedades `prototype` al arreglo `prototypeProps`:

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

`console.log(ownProps)` debe mostrar `["name"]` en la consola, y `console.log(prototypeProps)` debe mostrar `["numLegs"]`.

# --instructions--

Agrega todas las propiedades directas de `beagle` al arreglo `ownProps`. Agrega todas las propiedades `prototype` de `Dog` al arreglo `prototypeProps`.

# --hints--

El arreglo `ownProps` debe contener solo `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

El arreglo `prototypeProps` debe contener solo `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Debes resolver este desafío sin usar el método incorporado `Object.keys()`.

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
