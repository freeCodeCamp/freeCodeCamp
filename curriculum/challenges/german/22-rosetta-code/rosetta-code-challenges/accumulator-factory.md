---
id: 594810f028c0303b75339ace
title: Akkumulatorenfabrik
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

# --instructions--

Erstelle eine Funktion, die eine Zahl $n$ annimmt und Akkumulatorfunktionen erzeugt, die die Summe aller jemals an sie übergebenen Zahlen zurückgeben.

**Regeln:**

Verwenden Sie keine globalen Variablen.

**Hinweis:**

Verschlüsse speichern den äußeren Zustand.

# --hints--

`accumulator` sollte eine Funktion sein.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` sollte eine Funktion zurückgeben.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Das Übergeben der Werte 3, -4, 1.5 und 5 sollte 5.5 zurückgeben.

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
