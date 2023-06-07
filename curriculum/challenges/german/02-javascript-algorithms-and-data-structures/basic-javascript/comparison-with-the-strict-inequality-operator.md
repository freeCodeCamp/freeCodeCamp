---
id: 56533eb9ac21ba0edf2244d3
title: Vergleich mit dem strikten Ungleichheitsoperator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

Der strikte Ungleichheitsoperator (`!==`) ist das logische Gegenteil des strikten Gleichheitsoperators. Es bedeutet " Strikt nicht gleich" und gibt `false` zurück, wo strikte Gleichheit `true` und *umgekehrt* zurückgeben würde. Der strikte Ungleichheitsoperator konvertiert keine Datentypen.

**Beispiele**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Füge den strikten Ungleichheitsoperator zu der `if`-Anweisung hinzu, damit die Funktion den String `Not Equal` zurückgibt, wenn `val` nicht strikt gleich `17` ist

# --hints--

`testStrictNotEqual(17)` sollte den String `Equal` zurückgeben

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` sollte den String `Not Equal` zurückgeben

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` sollte den String `Not Equal` zurückgeben

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` sollte den String `Not Equal` zurückgeben

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

Du solltest den Operator `!==` verwenden

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
