---
id: 587d7db1367417b2b2512b86
title: Setze eine geerbte Konstruktoreigenschaft zurück
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

Wenn ein Objekt seinen `prototype` von einem anderen Objekt erbt, erbt es auch die Konstruktoreigenschaft des Supertyps.

Hier ist ein Beispiel:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

Aber `duck` und alle Instanzen von `Bird` sollten zeigen, dass sie von `Bird` und nicht von `Animal` erstellt wurden. Dazu kannst du die Konstruktor-Eigenschaft von `Bird` manuell auf das `Bird`-Objekt setzen:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

Korrigiere den Code, damit `duck.constructor` und `beagle.constructor` ihre jeweiligen Konstruktoren zurückgeben.

# --hints--

`Bird.prototype` sollte eine Instanz von `Animal` sein.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

Der `duck.constructor` sollte `Bird` zurückgeben.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` sollte eine Instanz von `Animal` sein.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` sollte `Dog` zurückgeben.

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
