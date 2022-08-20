---
id: 587d7b8f367417b2b2512b62
title: Eine map auf einem Prototypen implementieren
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Wie du bei der Anwendung von `Array.prototype.map()` oder kurz `map()` gesehen hast, gibt die Methode `map` ein Array mit der gleichen Länge zurück wie das Array, mit dem es aufgerufen wurde. Außerdem verändert sie das ursprüngliche Array nicht, solange es die Callback-Funktion nicht tut.

Anders ausgedrückt: `map` ist eine reine Funktion und ihre Ausgabe hängt ausschließlich von ihren Eingaben ab. Außerdem nimmt es eine andere Funktion als Argument.

Du kannst viel über die `map`-Methode lernen, wenn du deine eigene Version implementierst. Es wird empfohlen, eine `for` Schleife oder `Array.prototype.forEach()` zu verwenden.

# --instructions--

Schreibe dein eigenes `Array.prototype.myMap()`, welches sich genau wie `Array.prototype.map()` verhält. Du solltest nicht die eingebaute `map` Methode verwenden. Die `Array` Instanz kann in der `myMap` Methode mit `this` aufgerufen werden.

# --hints--

`new_s` sollte `[46, 130, 196, 10]` entsprechen.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Dein Code sollte nicht die `map` Methode verwenden.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
