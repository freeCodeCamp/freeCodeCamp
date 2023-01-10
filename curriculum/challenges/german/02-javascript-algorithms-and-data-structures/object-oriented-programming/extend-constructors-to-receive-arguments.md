---
id: 587d7dae367417b2b2512b79
title: Erweitere Konstruktoren, um Argumente entgegenzunehmen
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

Die Konstruktoren `Bird` und `Dog` aus der letzten Aufgabe haben gut funktioniert. Beachte aber, dass alle Vögel (`Birds`), die mit dem Konstruktor `Bird` erstellt werden, automatisch Albert heißen, blau sind und zwei Beine haben. Was ist, wenn du Vögel mit unterschiedlichen Werten für Name und Farbe haben möchtest? Es ist möglich, die Eigenschaften der einzelnen Vögel manuell zu ändern, aber das wäre eine Menge Arbeit:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Stell dir vor, du schreibst ein Programm, mit dem du Hunderte oder sogar Tausende von verschiedenen Vögeln in einer Voliere überwachen kannst. Es würde viel Zeit in Anspruch nehmen, alle Vögel zu erstellen und dann die Eigenschaften für jeden einzelnen auf andere Werte zu ändern. Um verschiedene Objekte `Bird` einfacher zu erstellen, kannst du deinen Bird-Konstruktor so gestalten, dass er Parameter akzeptiert:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Dann gibst du die Werte als Argumente ein, um jeden einzelnen Vogel im Konstruktor `Bird` zu definieren: `let cardinal = new Bird("Bruce", "red");` Das ergibt eine neue Instanz von `Bird` mit den Eigenschaften `name` und `color`, die auf `Bruce` bzw. `red` gesetzt sind. Die Eigenschaft `numLegs` ist immer noch auf 2 gesetzt. Der `cardinal` hat diese Eigenschaften:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

Der Konstruktor ist flexibler. Es ist jetzt möglich, die Eigenschaften für jeden Vogel (`Bird`) zum Zeitpunkt seiner Erstellung zu definieren, was ein Grund ist, warum JavaScript-Konstruktoren so nützlich sind. Sie gruppieren Objekte auf der Grundlage gemeinsamer Merkmale und Verhaltensweisen und definieren einen Bauplan, der ihre Erstellung automatisiert.

# --instructions--

Erstelle einen weiteren Konstruktor `Dog`. Diesmal nimmst du die Parameter `name` und `color` und stellst die Eigenschaft `numLegs` auf 4. Dann erstelle einen neuen Hund (`Dog`), der in einer Variable `terrier` gespeichert wird. Übergib ihm zwei Strings als Argumente für die Eigenschaften `name` und `color`.

# --hints--

`Dog` sollte ein Argument für `name` erhalten.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` sollte ein Argument für `color` erhalten.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` sollte die Eigenschaft `numLegs` auf 4 gesetzt haben.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` sollte mit dem Konstruktor `Dog` erstellt werden.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
