---
id: 587d7dac367417b2b2512b74
title: Verwende die Punktnotation, um auf die Eigenschaften eines Objekts zuzugreifen
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

In der letzten Aufgabe wurde ein Objekt mit verschiedenen Eigenschaften erstellt. Jetzt wirst du sehen, wie du auf die Werte dieser Eigenschaften zugreifen kannst. Hier ist ein Beispiel:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

Um auf den Wert von `Aflac` zuzugreifen, wird die Punktnotation für den Objektnamen, `duck`, gefolgt von dem Namen der Eigenschaft, `name`, verwendet.

# --instructions--

Gib beide Eigenschaften des Objekts `dog` auf deiner Konsole aus.

# --hints--

Dein Code sollte `console.log` verwenden, um den Wert für die Eigenschaft `name` des Objekts `dog` auszugeben.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

Dein Code sollte `console.log` verwenden, um den Wert für die Eigenschaft `numLegs` des Objekts `dog` auszugeben.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
