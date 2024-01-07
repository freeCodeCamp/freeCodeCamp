---
id: 587d7b88367417b2b2512b46
title: Standardparameter für Ihre Funktionen festlegen
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

Um uns zu helfen, flexiblere Funktionen zu erstellen, führt ES6 <dfn>Standardparameter</dfn> für Funktionen ein.

Schau dir diesen Code an:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

Die Konsole zeigt die Strings `Hello John` und `Hello Anonymous` an.

Der Standardparameter tritt in Kraft, wenn das Argument nicht angegeben wird (es ist undefiniert). Wie du im obigen Beispiel sehen kannst, erhält der Parameter `name` den Standardwert `Anonymous`, wenn du keinen Wert für den Parameter angibst. Du kannst Standardwerte für so viele Parameter hinzufügen, wie du willst.

# --instructions--

Ändere die Funktion `increment`, indem du Standardparameter hinzufügst, so dass sie 1 zu `number` addiert, wenn `value` nicht festgelegt ist.

# --hints--

Das Ergebnis von `increment(5, 2)` sollte `7` sein.

```js
assert(increment(5, 2) === 7);
```

Das Ergebnis von `increment(5)` sollte `6` sein.

```js
assert(increment(5) === 6);
```

Für `value` sollte ein Standardparameterwert von `1` verwendet werden.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
