---
id: 5679ceb97cbaa8c51670a16b
title: Boolesche Werte aus Funktionen zurückgeben
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

Du erinnerst dich vielleicht aus dem <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">Vergleich mit dem Gleichheitsoperator</a> daran, dass alle Vergleichsoperatoren einen booleschen `true` oder `false` Wert zurückgeben.

Manchmal wird eine `if/else`-Anweisung verwendet, um einen Vergleich durchzuführen, wie hier:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Aber es gibt einen besseren Weg, das zu tun. Da `===` `true` oder `false` liefert, können wir das Ergebnis des Vergleichs zurückgeben:

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

Ändere die Funktion `isLess`, um die `if/else`-Anweisungen zu entfernen.

# --hints--

`isLess(10, 15)` sollte `true` zurückgeben

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` sollte `false` zurückgeben

```js
assert(isLess(15, 10) === false);
```

Du solltest keine `if` oder `else`-Anweisungen verwenden

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
