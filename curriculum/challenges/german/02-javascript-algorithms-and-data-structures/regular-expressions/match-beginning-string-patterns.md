---
id: 587d7db7367417b2b2512b9d
title: Beginnende String-Muster abgleichen
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Frühere Aufgaben haben gezeigt, dass reguläre Ausdrücke verwendet werden können, um nach einer Reihe von Übereinstimmungen zu suchen. Sie werden auch für die Suche nach Mustern an bestimmten Stellen in Strings verwendet.

In einer früheren Aufgabe hast du das Caret-Zeichen (`^`) innerhalb eines Zeichensatzes verwendet, um einen negierten Zeichensatz in der Form `[^thingsThatWillNotBeMatched]` zu erstellen. Außerhalb eines Zeichensatzes wird das Caret verwendet, um nach Mustern am Anfang von Strings zu suchen.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

Der erste `test`-Aufruf würde `true` zurückgeben, während der zweite `false` zurückgeben würde.

# --instructions--

Verwende das Caret-Zeichen in einem regulären Ausdruck, um `Cal` nur am Anfang des Strings `rickyAndCal` zu finden.

# --hints--

Dein regulärer Ausdruck sollte nach dem String `Cal` mit einem Großbuchstaben suchen.

```js
assert(calRegex.source == '^Cal');
```

Dein regulärer Ausdruck sollte keine Flags verwenden.

```js
assert(calRegex.flags == '');
```

Dein regulärer Ausdruck sollte auf den String `Cal` am Anfang des Strings passen.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

Dein regulärer Ausdruck sollte nicht auf den String `Cal` in der Mitte eines Strings passen.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
