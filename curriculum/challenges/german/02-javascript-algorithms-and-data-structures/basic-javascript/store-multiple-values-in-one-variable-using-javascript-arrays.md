---
id: bd7993c9c69feddfaeb8bdef
title: Speichern mehrerer Werte in einer Variablen mithilfe von JavaScript-Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Mit JavaScript `array`-Variablen können wir mehrere Daten an einem Ort speichern.

Du beginnst eine Array-Deklaration mit einer öffnenden eckigen Klammer, beendest sie mit einer schließenden eckigen Klammer und setzt ein Komma zwischen jeden Eintrag, etwa so:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Ändere das neue Array `myArray` so, dass es sowohl einen String als auch eine Zahl enthält (in dieser Reihenfolge).

# --hints--

`myArray` sollte ein Array sein.

```js
assert(typeof myArray == 'object');
```

Das erste Element in `myArray` sollte ein String sein.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

Das zweite Element in `myArray` sollte eine Zahl sein.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
