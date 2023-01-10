---
id: 587d7db1367417b2b2512b85
title: Setze den Prototyp des Kindes auf eine Instanz des Elternteils
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

In der vorherigen Aufgabe hast du den ersten Schritt gesehen, um das Verhalten vom Supertyp (oder Elterntyp) `Animal` zu erben: Erstelle eine neue Instanz von `Animal`.

In dieser Aufgabe geht es um den nächsten Schritt: Setze den `prototype` des Subtyps (oder Kindes) - in diesem Fall `Bird` - auf eine Instanz von `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Denke daran, dass der `prototype` so etwas wie das "Rezept" für die Erstellung eines Objekts ist. In gewisser Weise enthält das Rezept für `Bird` jetzt alle wichtigen "Zutaten" von `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` erbt alle Eigenschaften von `Animal`, einschließlich der Methode `eat`.

# --instructions--

Ändere den Code so, dass Instanzen von `Dog` von `Animal` erben.

# --hints--

`Dog.prototype` sollte eine Instanz von `Animal` sein.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
