---
id: 56533eb9ac21ba0edf2244d6
title: Vergleich mit dem Kleiner-als-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

Der Kleiner-als-Operator (`<`) vergleicht die Werte von zwei Zahlen. Wenn die Zahl auf der linken Seite kleiner ist als die Zahl auf der rechten Seite, gibt er `true` zurück. Andernfalls gibt er `false` zurück. Wie der Gleichheitsoperator konvertiert auch der Kleiner-als-Operator die Datentypen während des Vergleichs.

**Beispiele**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Füge den Kleiner-als-Operator zu den angegebenen Zeilen hinzu, damit die Return-Anweisungen einen Sinn ergeben.

# --hints--

`testLessThan(0)` sollte den String `Under 25` zurückgeben

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` sollte den String `Under 25` zurückgeben

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` sollte den String `Under 55` zurückgeben

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` sollte den String `Under 55` zurückgeben

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` sollte den String `55 or Over` zurückgeben

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` sollte den String `55 or Over` zurückgeben

```js
assert(testLessThan(99) === '55 or Over');
```

Du solltest den `<` Operator mindestens zweimal verwenden

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
