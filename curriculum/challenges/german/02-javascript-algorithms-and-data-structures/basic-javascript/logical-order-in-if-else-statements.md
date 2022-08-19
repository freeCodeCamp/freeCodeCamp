---
id: 5690307fddb111c6084545d7
title: Logische Reihenfolge in If-Else-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

Die Reihenfolge ist wichtig in `if`, `else if`-Anweisungen.

Die Funktion wird von oben nach unten ausgeführt, also musst du darauf achten, welche Anweisung zuerst kommt.

Schau dir diese beiden Funktionen als Beispiel an.

Hier ist die erste:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

Und die zweite ändert einfach die Reihenfolge der Anweisungen:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

Diese beiden Funktionen sehen zwar fast identisch aus, aber wenn wir beiden eine Zahl übergeben, erhalten wir unterschiedliche Ausgaben.

```js
foo(0)
bar(0)
```

`foo(0)` gibt den String `Less than one` zurück, und `bar(0)` gibt den String `Less than two` zurück.

# --instructions--

Ändere die Reihenfolge der Logik in der Funktion so, dass sie in allen Fällen die richtigen Aussagen zurückgibt.

# --hints--

`orderMyLogic(4)` sollte den String `Less than 5` zurückgeben

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` sollte den String `Less than 10` zurückgeben

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` sollte den String `Greater than or equal to 10` zurückgeben

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
