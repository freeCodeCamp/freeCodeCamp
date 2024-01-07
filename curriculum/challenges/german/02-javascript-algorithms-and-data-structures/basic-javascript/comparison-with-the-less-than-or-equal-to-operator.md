---
id: 56533eb9ac21ba0edf2244d7
title: Vergleich mit dem Kleiner-als-oder-Gleich-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

Der Kleiner-als-oder-Gleich-Operator (`<=`) vergleicht die Werte von zwei Zahlen. Wenn die Zahl auf der linken Seite kleiner oder gleich der Zahl auf der rechten Seite ist, gibt er `true` zurück. Wenn die Zahl auf der linken Seite größer als die Zahl auf der rechten Seite ist, gibt er `false` zurück. Wie der Gleichheitsoperator konvertiert auch der Kleiner-als-oder-Gleich-Operator Datentypen.

**Beispiele**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

Füge den Kleiner-als-oder-Gleich-Operator zu den angegebenen Zeilen hinzu, damit die Return-Anweisungen einen Sinn ergeben.

# --hints--

`testLessOrEqual(0)` sollte den String `Smaller Than or Equal to 12` zurückgeben

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` sollte den String `Smaller Than or Equal to 12` zurückgeben

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` sollte den String `Smaller Than or Equal to 12` zurückgeben

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` sollte den String `Smaller Than or Equal to 24` zurückgeben

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` sollte den String `Smaller Than or Equal to 24` zurückgeben

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` sollte den String `More Than 24` zurückgeben

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` sollte den String `More Than 24` zurückgeben

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

Du solltest den `<=` Operator mindestens zweimal verwenden

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
