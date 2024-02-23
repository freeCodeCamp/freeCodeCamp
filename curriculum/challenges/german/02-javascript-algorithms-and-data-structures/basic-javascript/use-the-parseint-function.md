---
id: 587d7b7e367417b2b2512b23
title: Verwende die Funktion parseInt
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

Die Funktion `parseInt()` parst einen String und gibt eine Ganzzahl zurück. Hier ist ein Beispiel:

```js
const a = parseInt("007");
```

Die obige Funktion wandelt den String `007` in die Ganzzahl `7` um. Wenn das erste Zeichen in dem String nicht in eine Zahl umgewandelt werden kann, dann wird `NaN` zurückgegeben.

# --instructions--

Verwende `parseInt()` in der Funktion `convertToInteger`, damit sie den Eingabestring `str` in eine Ganzzahl umwandelt und zurückgibt.

# --hints--

`convertToInteger` sollte die Funktion `parseInt()` verwenden

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` sollte eine Zahl zurückgeben

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` sollte 56 zurückgeben

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` sollte 77 zurückgeben

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` sollte `NaN` zurückgeben

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
