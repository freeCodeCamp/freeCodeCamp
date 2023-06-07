---
id: 587d7dad367417b2b2512b75
title: Erstelle eine Methode für ein Objekt
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Objekte können eine besondere Art von Eigenschaft haben, die <dfn>Methode</dfn> genannt wird.

Methoden sind Eigenschaften, die Funktionen sind. Dies fügt einem Objekt ein anderes Verhalten hinzu. Hier ist das Beispiel `duck` mit einer Methode:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

Das Beispiel fügt die Methode `sayName` hinzu, die eine Funktion ist, die einen Satz mit dem Namen der Ente (`duck`) zurückgibt. Beachte, dass die Methode in der Rückgabeanweisung mit `duck.name` auf die Eigenschaft `name` zugreift. Die nächste Aufgabe befasst sich mit einer anderen Möglichkeit, dies zu tun.

# --instructions--

Benutze das Objekt `dog` und gib ihm eine Methode namens `sayLegs`. Die Methode sollte den Satz `This dog has 4 legs.` zurückgeben.

# --hints--

`dog.sayLegs()` sollte eine Funktion sein.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` sollte den angegebenen String zurückgeben - beachte, dass Satzzeichen und Abstände wichtig sind.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
