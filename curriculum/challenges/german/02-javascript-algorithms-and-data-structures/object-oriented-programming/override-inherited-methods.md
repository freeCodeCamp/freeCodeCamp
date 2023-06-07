---
id: 587d7db1367417b2b2512b88
title: Geerbte Methoden überschreiben
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

In den vorherigen Aufgaben hast du gelernt, dass ein Objekt sein Verhalten (Methoden) von einem anderen Objekt erben kann, indem es dessen `prototype`-Objekt referenziert:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Dann erhielt das Kindobjekt (`ChildObject`) seine eigenen Methoden, indem es sie mit seinem `prototype` verkettete:

```js
ChildObject.prototype.methodName = function() {...};
```

Es ist möglich, eine geerbte Methode außer Kraft zu setzen. Das geht auf die gleiche Weise - indem du eine Methode zu `ChildObject.prototype` hinzufügst, die den gleichen Namen trägt wie die Methode, die überschrieben werden soll. Hier ist ein Beispiel für `Bird`, das die von `Animal` geerbte Methode `eat()` überschreibt:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

Wenn du eine Instanz `let duck = new Bird();` hast und du rufst `duck.eat()` auf, so sucht JavaScript die Methode in der `prototype`-Kette von `duck`:

1.  `duck` => Ist `eat()` hier definiert? Nein.
2.  `Bird` => Ist `eat()` hier definiert? => Ja. Führe sie aus und höre auf zu suchen.
3.  `Animal` => `eat()` ist auch definiert, aber JavaScript hat die Suche abgebrochen, bevor diese Ebene erreicht wurde.
4.  Object => JavaScript hat die Suche vor Erreichen dieses Levels beendet.

# --instructions--

Überschreibe die Methode `fly()` für `Penguin` so, dass sie den String `Alas, this is a flightless bird.` zurückgibt.

# --hints--

`penguin.fly()` sollte den String `Alas, this is a flightless bird.` zurückgeben.

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

Die Methode `bird.fly()` sollte den String `I am flying!` zurückgeben.

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
