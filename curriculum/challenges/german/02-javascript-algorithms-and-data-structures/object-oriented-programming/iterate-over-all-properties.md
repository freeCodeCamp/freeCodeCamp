---
id: 587d7daf367417b2b2512b7d
title: Iteration über alle Eigenschaften
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Du hast jetzt zwei Arten von Eigenschaften gesehen: <dfn>Eigene Eigenschaften</dfn> und Prototyp (`prototype`)-Eigenschaften. Eigene Eigenschaften werden direkt in der Objektinstanz selbst definiert. Und die Prototypeigenschaften werden im `prototype` definiert.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

So fügst du die eigenen Eigenschaften von `duck` in das Array `ownProps` und die Eigenschaften von `prototype` in das Array `prototypeProps` ein:

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

`console.log(ownProps)` würde `["name"]` in der Konsole anzeigen, und `console.log(prototypeProps)` würde `["numLegs"]` anzeigen.

# --instructions--

Füge alle eigenen Eigenschaften von `beagle` zu dem Array `ownProps` hinzu. Füge alle `prototype`-Eigenschaften von `Dog` zum Array `prototypeProps` hinzu.

# --hints--

Das Array `ownProps` sollte nur `name` enthalten.

```js
assert.deepEqual(ownProps, ['name']);
```

Das Array `prototypeProps` sollte nur `numLegs` enthalten.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Du solltest diese Aufgabe lösen, ohne die eingebaute Methode `Object.keys()` zu verwenden.

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
