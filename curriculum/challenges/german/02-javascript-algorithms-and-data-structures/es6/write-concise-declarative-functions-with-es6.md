---
id: 587d7b8b367417b2b2512b50
title: Prägnante deklarative Funktionen mit ES6 schreiben
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Wenn wir in ES5 Funktionen innerhalb von Objekten definieren, müssen wir das Schlüsselwort `function` wie folgt verwenden:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Mit ES6 kannst du das Schlüsselwort `function` und den Doppelpunkt ganz entfernen, wenn du Funktionen in Objekten definierst. Hier ist ein Beispiel für diese Syntax:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Refaktoriere die Funktion `setGear` innerhalb des Objekts `bicycle`, um die oben beschriebene Kurzsyntax zu verwenden.

# --hints--

Der traditionelle Funktionsausdruck sollte nicht verwendet werden.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` sollte eine deklarative Funktion sein.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` sollte den Wert von `gear` auf 48 ändern.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
