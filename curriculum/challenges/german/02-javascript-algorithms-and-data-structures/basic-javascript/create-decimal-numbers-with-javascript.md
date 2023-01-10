---
id: cf1391c1c11feddfaeb4bdef
title: Dezimalzahlen mit JavaScript erstellen
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Wir können auch Dezimalzahlen in Variablen speichern. Dezimalzahlen werden manchmal auch als <dfn>Gleitkommazahlen</dfn> oder <dfn>floats</dfn> bezeichnet.

**Hinweis:** Wenn du Zahlen berechnest, geschieht das mit begrenzter Genauigkeit. Berechnungen mit Gleitkommazahlen können zu unerwünschten Ergebnissen führen. Erhältst du ein solches Ergebnis, kannst du einen Thread im <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp-Forum</a> erstellen.

# --instructions--

Erstelle eine Variable `myDecimal` und gib ihr einen Dezimalwert mit einer Nachkommastelle (z.B. `5.7`).

# --hints--

`myDecimal` sollte eine Zahl sein.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` sollte einen Dezimalpunkt enthalten

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
