---
id: 56533eb9ac21ba0edf2244d5
title: Vergleich mit dem Größer-als-oder-Gleich-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

Der Größer-als-oder-Gleich-Operator (`>=`) vergleicht die Werte von zwei Zahlen. Wenn die Zahl auf der linken Seite größer oder gleich der Zahl auf der rechten Seite ist, wird `true` zurückgegeben. Andernfalls wird `false` zurückgegeben.

Wie der Gleichheitsoperator konvertiert auch der Größer-als-oder-Gleich-Operator Datentypen während des Vergleichs.

**Beispiele**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Füge den Größer-als-oder-Gleich-Operator zu den angegebenen Zeilen hinzu, damit die Rückgabeanweisungen einen Sinn ergeben.

# --hints--

`testGreaterOrEqual(0)` sollte den String `Less than 10` zurückgeben

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` sollte den String `Less than 10` zurückgeben

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` sollte den String `10 or Over` zurückgeben

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` sollte den String `10 or Over` zurückgeben

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` sollte den String `10 or Over` zurückgeben

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` sollte den String `20 or Over` zurückgeben

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` sollte den String `20 or Over` zurückgeben

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Du solltest den `>=` Operator mindestens zweimal verwenden

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
