---
id: 587d7db0367417b2b2512b81
title: Die Herkunft des Prototyps eines Objekts verstehen
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

Genau wie Menschen Gene von ihren Eltern erben, erbt ein Objekt seinen `prototype` direkt von der Konstruktionsfunktion, die es erstellt hat. Hier zum Beispiel erzeugt der `Bird`-Konstruktor das Objekt `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` erbt ihren `prototype` von der `Bird` Konstruktorfunktion. Du kannst diese Beziehung mit der `isPrototypeOf`-Methode anzeigen:

```js
Bird.prototype.isPrototypeOf(duck);
```

Dies würde `true` zurückgeben.

# --instructions--

Verwende `isPrototypeOf`, um den `prototype` von `beagle` zu ermitteln.

# --hints--

Du solltest zeigen, dass `Dog.prototype` der `prototype` von `beagle` ist.

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
