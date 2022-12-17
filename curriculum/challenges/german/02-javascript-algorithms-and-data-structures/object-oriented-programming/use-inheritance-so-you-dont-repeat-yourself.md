---
id: 587d7db0367417b2b2512b83
title: Nutze die Vererbung, damit du dich nicht wiederholst
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

In der Programmierung gibt es ein Prinzip namens <dfn>Don't Repeat Yourself (DRY) ("Wiederhole dich nicht selbst")</dfn>. Der Grund, warum wiederholter Code ein Problem darstellt, ist, dass jede Änderung die Korrektur von Code an mehreren Stellen erfordert. Das bedeutet in der Regel mehr Arbeit für die Programmierer und mehr Raum für Fehler.

Beachte im folgenden Beispiel, dass die Methode `describe` von `Bird` und `Dog` geteilt wird:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Die Methode `describe` wird an zwei Stellen wiederholt. Der Code kann so bearbeitet werden, dass er dem DRY-Prinzip folgt, indem ein `supertype` (oder Elternteil) namens `Animal` erstellt wird:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Da `Animal` die Methode `describe` enthält, kannst du sie aus `Bird` und `Dog` entfernen:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

Die Methode `eat` wird sowohl in `Cat` als auch in `Bear` wiederholt. Bearbeite den Code im Sinne von DRY, indem du die Methode `eat` in den `Animal` `supertype` verschiebst.

# --hints--

`Animal.prototype` sollte die Eigenschaft `eat` haben.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` sollte nicht die Eigenschaft `eat` besitzen.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` sollte nicht die Eigenschaft `eat` besitzen.

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
