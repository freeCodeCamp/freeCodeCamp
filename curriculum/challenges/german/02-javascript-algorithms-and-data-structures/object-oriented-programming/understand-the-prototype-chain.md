---
id: 587d7db0367417b2b2512b82
title: Die Prototypenkette verstehen
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

Alle Objekte in JavaScript (mit ein paar Ausnahmen) haben einen Prototypen (`prototype`). Auch der `prototype` eines Objekts ist selbst ein Objekt.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

Weil ein `prototype` ein Objekt ist, kann ein `prototype` seinen eigenen `prototype` haben! In diesem Fall ist der `prototype` von `Bird.prototype` der `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

Wie kann das hilfreich sein? Vielleicht erinnerst du dich an die Methode `hasOwnProperty` aus einer früheren Aufgabe:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

Die Methode `hasOwnProperty` ist in `Object.prototype` definiert, auf die `Bird.prototype` zugreifen kann, auf die wiederum `duck` zugreifen kann. Dies ist ein Beispiel für die `prototype`-Kette. In dieser `prototype`-Kette ist `Bird` der `supertype` für `duck`, während `duck` der `subtype` ist. `Object` ist ein `supertype` sowohl für `Bird` als auch für `duck`. `Object` ist ein `supertype` für alle Objekte in JavaScript. Deshalb kann jedes Objekt die Methode `hasOwnProperty` verwenden.

# --instructions--

Ändere den Code so ab, dass er die richtige Prototypenkette zeigt.

# --hints--

Dein Code sollte zeigen, dass `Object.prototype` der Prototyp von `Dog.prototype` ist.

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
