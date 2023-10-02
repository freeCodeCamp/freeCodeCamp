---
id: 587d7b8f367417b2b2512b62
title: Implementiere Map auf einem Prototyp
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Wie du bei der Anwendung von `Array.prototype.map()` oder kurz `map()` gesehen hast, gibt die Methode `map` ein Array mit der gleichen Länge zurück, wie das Array, mit dem es aufgerufen wurde. Außerdem verändert sie das ursprüngliche Array nicht, solange es die Callback-Funktion nicht tut.

Anders ausgedrückt: `map` ist eine reine Funktion und ihre Ausgabe hängt ausschließlich von ihren Eingaben ab. Außerdem nimmt sie eine andere Funktion als Argument.

Du kannst viel über die `map`-Methode lernen, wenn du deine eigene Version implementierst. Es wird empfohlen, eine `for`-Schleife oder `Array.prototype.forEach()` zu verwenden.

# --instructions--

Schreibe dein eigenes `Array.prototype.myMap()`, welches sich genau wie `Array.prototype.map()` verhält. Du solltest nicht die eingebaute `map`-Methode verwenden. Die `Array`-Instanz kann in der `myMap`-Methode mit `this` aufgerufen werden.

# --hints--

`[23, 65, 98, 5, 13].myMap(item => item * 2)` sollte `[46, 130, 196, 10, 26]` ergeben.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` sollte `["NAOMI", "QUINCY", "CAMPERBOT"]` zurückgeben.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` sollte `[1, 2, 5, 2, 1]` zurückgeben.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Dein Code sollte die Methode `map` nicht verwenden.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
