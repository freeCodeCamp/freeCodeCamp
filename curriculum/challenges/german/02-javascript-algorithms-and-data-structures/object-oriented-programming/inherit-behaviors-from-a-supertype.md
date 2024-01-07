---
id: 587d7db0367417b2b2512b84
title: Verhaltensweisen von einem Supertyp erben
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

In der letzten Aufgabe hast du einen `supertype` namens `Animal` erstellt, der Verhaltensweisen definiert, die alle Tiere gemeinsam haben:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

In dieser und der nächsten Aufgabe geht es darum, wie du die Methoden von `Animal` in `Bird` und `Dog` wiederverwenden kannst, ohne sie erneut zu definieren. Wir werden eine Technik namens Vererbung verwenden. Diese Aufgabe umfasst den ersten Schritt: Erstelle eine Instanz des `supertype` (oder Elternteil). Du kennst bereits eine Möglichkeit, eine Instanz von `Animal` mit dem Operator `new` zu erstellen:

```js
let animal = new Animal();
```

Es gibt einige Nachteile bei der Verwendung dieser Syntax für die Vererbung, die aber zu komplex für den Rahmen dieser Aufgabe sind. Stattdessen gibt es einen alternativen Ansatz ohne diese Nachteile:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` erstellt ein neues Objekt und setzt `obj` als `prototype` für das neue Objekt. Erinnere dich daran, dass der `prototype` so etwas wie das "Rezept" für die Erstellung eines Objekts ist. Indem du den `prototype` von `animal` auf den `prototype` von `Animal` setzt, gibst du der `animal`-Instanz das gleiche "Rezept" wie jeder anderen Instanz von `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

Die Methode `instanceof` würde hier `true` zurückgeben.

# --instructions--

Verwende `Object.create`, um zwei Instanzen von `Animal` mit den Namen `duck` und `beagle` zu erstellen.

# --hints--

Die Variable `duck` sollte definiert sein.

```js
assert(typeof duck !== 'undefined');
```

Die Variable `beagle` sollte definiert sein.

```js
assert(typeof beagle !== 'undefined');
```

Die Variable `duck` sollte mit `Object.create` initialisiert werden.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

Die Variable `beagle` sollte mit `Object.create` initialisiert werden.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` sollte einen `prototype` von `Animal` haben.

```js
assert(duck instanceof Animal);
```

`beagle` sollte einen `prototype` von `Animal` haben.

```js
assert(beagle instanceof Animal);
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

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
