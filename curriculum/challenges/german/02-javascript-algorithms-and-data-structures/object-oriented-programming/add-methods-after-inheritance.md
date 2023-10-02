---
id: 587d7db1367417b2b2512b87
title: Methoden nach der Vererbung hinzufügen
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Eine Konstruktorfunktion, die ihr `prototype`-Objekt von einer Supertyp-Konstruktorfunktion erbt, kann zusätzlich zu den geerbten Methoden noch eigene Methoden besitzen.

Zum Beispiel ist `Bird` ein Konstruktor, der seinen `prototype` von `Animal` erbt:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Zusätzlich zu dem, was von `Animal` geerbt wird, möchtest du ein Verhalten hinzufügen, das nur für `Bird`-Objekte gilt. Hier bekommt `Bird` eine Funktion `fly()`. Funktionen werden dem `Bird's`-`prototype` auf die gleiche Weise hinzugefügt wie jede Konstruktorfunktion:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Jetzt haben Instanzen von `Bird` sowohl die Methoden `eat()` als auch `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` würde den String `nom nom nom` in der Konsole anzeigen und `duck.fly()` würde den String `I'm flying!` anzeigen.

# --instructions--

Füge den notwendigen Code hinzu, damit das `Dog`-. Objekt von `Animal` erbt und der `prototype`-Konstruktor von `Dog` auf `Dog` gesetzt wird. Dann füge dem `Dog`-Objekt eine Methode `bark()` hinzu, damit `beagle` sowohl `eat()` als auch `bark()` kann. Die Methode `bark()` sollte `Woof!` auf der Konsole ausgeben.

# --hints--

`Animal` sollte nicht auf die Methode `bark()` reagieren.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` sollte die Methode `eat()` von `Animal` erben.

```js
assert(typeof Dog.prototype.eat == 'function');
```

Der `Dog`-Prototyp sollte eine Methode `bark()` besitzen.

```js
assert('bark' in Dog.prototype);
```

`beagle` sollte eine Instanz (`instanceof`) von `Animal` sein.

```js
assert(beagle instanceof Animal);
```

Der Konstruktor für `beagle` sollte auf `Dog` gesetzt werden.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` sollte den String `nom nom nom` in der Konsole ausgeben.

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` sollte den String `Woof!` in der Konsole ausgeben.

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
