---
id: 587d7daf367417b2b2512b7f
title: Ändere den Prototyp in ein neues Objekt
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Bisher hast du die Eigenschaften des `prototype` einzeln hinzugefügt:

```js
Bird.prototype.numLegs = 2;
```

Das wird nach mehr als ein paar Eigenschaften mühsam.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

Eine effizientere Methode ist es, den `prototype` auf ein neues Objekt zu setzen, das die Eigenschaften bereits enthält. Auf diese Weise werden die Eigenschaften alle auf einmal hinzugefügt:

```js
Bird.prototype = {
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

Füge die Eigenschaft `numLegs` und die beiden Methoden `eat()` und `describe()` zu dem `prototype` von `Dog` hinzu, indem du den `prototype` auf ein neues Objekt setzt.

# --hints--

`Dog.prototype` sollte auf ein neues Objekt gesetzt werden.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` sollte die Eigenschaft `numLegs` besitzen.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` sollte die Methode `eat()` enthalten.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` sollte die Methode `describe()` enthalten.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
