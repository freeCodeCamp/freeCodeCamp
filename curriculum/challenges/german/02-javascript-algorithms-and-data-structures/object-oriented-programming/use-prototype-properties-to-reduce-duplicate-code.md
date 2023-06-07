---
id: 587d7dae367417b2b2512b7c
title: Verwende Prototyp-Eigenschaften, um doppelten Code zu reduzieren
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

Da `numLegs` wahrscheinlich den gleichen Wert für alle Instanzen von `Bird` hat, hast du im Grunde eine doppelte Variable `numLegs` in jeder Instanz von `Bird`.

Das mag kein Problem sein, wenn es nur zwei Instanzen gibt, aber stell dir vor, es gibt Millionen von Instanzen. Das wären eine Menge doppelter Variablen.

Ein besserer Weg ist es, den Prototyp (`prototype`) von `Bird` zu benutzen. Die Eigenschaften im `prototype` werden von ALLEN Instanzen von `Bird` gemeinsam genutzt. Hier erfährst du, wie du `numLegs` zum `Bird prototype` hinzufügst:

```js
Bird.prototype.numLegs = 2;
```

Jetzt haben alle Instanzen von `Bird` die Eigenschaft `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

Da alle Instanzen automatisch die Eigenschaften des Prototypen(`prototype`) besitzen, kannst du dir einen Prototypen(`prototype`) wie ein "Rezept" für die Erstellung von Objekten vorstellen. Beachte, dass der `prototype` für `duck` und `canary` Teil des Konstruktors von `Bird` als `Bird.prototype` ist.

# --instructions--

Füge eine Eigenschaft `numLegs` zum `prototype` von `Dog` hinzu

# --hints--

`beagle` sollte eine Eigenschaft `numLegs` besitzen.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` sollte eine Zahl sein.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` sollte eine `prototype`-Eigenschaft sein und keine eigene Eigenschaft.

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
