---
id: 587d7b88367417b2b2512b47
title: Verwende den Restparameter mit Funktionsparametern
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Um uns zu helfen, flexiblere Funktionen zu erstellen, führt ES6 den <dfn>Restparameter</dfn> für Funktionsparameter ein. Mit dem Restparameter kannst du Funktionen erstellen, die eine variable Anzahl von Argumenten annehmen. Diese Argumente werden in einem Array gespeichert, auf das später innerhalb der Funktion zugegriffen werden kann.

Schau dir diesen Code an:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

Die Konsole würde die Strings `You have passed 3 arguments.` und `You have passed 4 arguments.` anzeigen.

The rest parameter eliminates the need to use the `arguments` object and allows us to use array methods on the array of parameters passed to the function `howMany`.

# --instructions--

Ändere die Funktion `sum` mit dem Restparameter so ab, dass die Funktion `sum` eine beliebige Anzahl von Argumenten annehmen und deren Summe zurückgeben kann.

# --hints--

Das Ergebnis von `sum(0,1,2)` sollte 3 sein

```js
assert(sum(0, 1, 2) === 3);
```

Das Ergebnis von `sum(1,2,3,4)` sollte 10 sein

```js
assert(sum(1, 2, 3, 4) === 10);
```

Das Ergebnis von `sum(5)` sollte 5 sein

```js
assert(sum(5) === 5);
```

Das Ergebnis von `sum()` sollte 0 sein

```js
assert(sum() === 0);
```

`sum` sollte eine Pfeilfunktion sein, die die Restparametersyntax (`...`) für den `args`-Parameter verwendet.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
