---
id: 587d7dad367417b2b2512b78
title: Verwende einen Konstruktor, um Objekte zu erstellen
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

Hier ist der Konstruktor `Bird` aus der vorherigen Aufgabe:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**HINWEIS:** `this` im Konstruktor bezieht sich immer auf das Objekt, das erstellt wird.

Beachte, dass der Operator `new` verwendet wird, wenn du einen Konstruktor aufrufst. Damit wird JavaScript angewiesen, eine neue Instanz von `Bird` namens `blueBird` zu erstellen. Ohne den Operator `new` würde `this` innerhalb des Konstruktors nicht auf das neu erstellte Objekt zeigen, was zu unerwarteten Ergebnissen führen würde. Jetzt hat `blueBird` alle Eigenschaften, die im Konstruktor von `Bird` definiert sind:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

Wie bei jedem anderen Objekt auch, kann auf seine Eigenschaften zugegriffen und sie verändert werden:

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

Verwende den Konstruktor von `Dog` aus der letzten Aufgabe, um eine neue Instanz von `Dog` zu erstellen, indem du sie der Variablen `hound` zuweist.

# --hints--

`hound` sollte mit dem Konstruktor von `Dog` erstellt werden.

```js
assert(hound instanceof Dog);
```

Dein Code sollte den Operator `new` verwenden, um eine Instanz von `Dog` zu erstellen.

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
