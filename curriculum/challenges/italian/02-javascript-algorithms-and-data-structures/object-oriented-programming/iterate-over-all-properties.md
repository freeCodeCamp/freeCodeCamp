---
id: 587d7daf367417b2b2512b7d
title: Iterare fra tutte le proprietà
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Ora hai visto due tipi di proprietà: <dfn>proprietà proprie</dfn> e proprietà di prototipo (`prototype`). Le proprietà proprie sono definite direttamente nell'istanza dell'oggetto. E le proprietà di prototipo sono definite nel `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Ecco come aggiungere le proprietà di `duck` all'array `ownProps` e le proprietà di `prototype` all'array `prototypeProps`:

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

`console.log(ownProps)` visualizzerà `["name"]` nella console e `console.log(prototypeProps)` visualizzerà `["numLegs"]`.

# --instructions--

Aggiungi tutte le proprietà proprie di `beagle` all'array `ownProps`. Aggiungi tutte le proprietà del `prototype` di `Dog` all'array `prototypeProps`.

# --hints--

L'array `ownProps` dovrebbe contenere solo `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

L'array `prototypeProps` dovrebbe contenere solo `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Dovresti risolvere questa sfida senza usare il metodo integrato `Object.keys()`.

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
