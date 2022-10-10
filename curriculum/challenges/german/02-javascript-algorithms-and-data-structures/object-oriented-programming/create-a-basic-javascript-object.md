---
id: 587d7dac367417b2b2512b73
title: Erstelle ein einfaches JavaScript-Objekt
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

Denke an Dinge, die Menschen jeden Tag sehen, wie Autos, Geschäfte und Vögel. Das alles sind <dfn>Objekte</dfn>: greifbare Dinge, die Menschen beobachten und mit denen sie interagieren können.

Was sind einige Eigenschaften dieser Objekte? Ein Auto hat Räder. Geschäfte verkaufen Gegenstände. Vögel haben Flügel.

Diese Merkmale, oder <dfn>Eigenschaften</dfn>, definieren, was ein Objekt ausmacht. Beachte, dass ähnliche Objekte die gleichen Eigenschaften haben, aber unterschiedliche Werte für diese Eigenschaften haben können. Zum Beispiel haben alle Autos Räder, aber nicht alle Autos haben die gleiche Anzahl von Rädern.

Objekte in JavaScript werden verwendet, um reale Objekte zu modellieren und ihnen Eigenschaften und Verhaltensweisen zu geben, die denen ihrer realen Gegenstücke entsprechen. Hier ist ein Beispiel, das diese Konzepte verwendet, um ein Objekt "Ente"(`duck`) zu erstellen:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

Dieses Objekt `duck` hat zwei Eigenschaften/Wertpaare: einen Namen (`name`) von `Aflac` und eine Anzahl Beine (`numLegs`) von 2.

# --instructions--

Erstelle ein Objekt `dog` mit den Eigenschaften `name` und `numLegs` und setze sie auf einen String bzw. eine Zahl.

# --hints--

`dog` sollte ein Objekt sein.

```js
assert(typeof dog === 'object');
```

`dog` sollte eine Eigenschaft `name` besitzen, die auf einen String gesetzt ist.

```js
assert(typeof dog.name === 'string');
```

`dog` sollte eine Eigenschaft `numLegs` besitzen, die auf eine Zahl gesetzt ist.

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
