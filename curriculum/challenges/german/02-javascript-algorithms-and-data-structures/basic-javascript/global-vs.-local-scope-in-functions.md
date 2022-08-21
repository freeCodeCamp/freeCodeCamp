---
id: 56533eb9ac21ba0edf2244c0
title: Globaler vs. lokaler Gültigkeitsbereich in Funktionen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

Es ist möglich, sowohl <dfn>lokale</dfn> als auch <dfn>globale</dfn> Variablen mit demselben Namen zu haben. Wenn du dies tust, hat die lokale Variable Vorrang vor der globalen Variable.

In diesem Beispiel:

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

Die Funktion `myFun` wird den String `Head` zurückgeben, da die lokale Version der Variable vorhanden ist.

# --instructions--

Füge der Funktion `myOutfit` eine lokale Variable hinzu, um den Wert von `outerWear` mit dem String `sweater` zu überschreiben.

# --hints--

Du solltest den Wert der globalen `outerWear` nicht ändern.

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` sollte den String `sweater` zurückgeben.

```js
assert(myOutfit() === 'sweater');
```

Du solltest die Rückgabeanweisung nicht ändern.

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
