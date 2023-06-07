---
id: 587d7daf367417b2b2512b80
title: Denke daran, die Konstruktoreigenschaft zu setzen, wenn du den Prototyp änderst
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

Es gibt einen entscheidenden Nebeneffekt, wenn du den Prototyp manuell auf ein neues Objekt setzt. Es löscht die`constructor` Eigenschaft! Diese Eigenschaft kann verwendet werden, um zu prüfen, welche Konstruktorfunktion die Instanz erstellt hat. Da die Eigenschaft jedoch überschrieben wurde, liefert sie jetzt falsche Ergebnisse:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

In dieser Reihenfolge würden diese Ausdrücke `false`, `true` und `true` ergeben.

Um dies zu beheben, musst du jedes Mal, wenn ein Prototyp manuell auf ein neues Objekt gesetzt wird, daran denken, die `constructor`-Eigenschaft zu definieren:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

Definiere die `constructor`-Eigenschaft in dem `Dog` `prototype`.

# --hints--

`Dog.prototype` sollte die `constructor`-Eigenschaft setzen.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
