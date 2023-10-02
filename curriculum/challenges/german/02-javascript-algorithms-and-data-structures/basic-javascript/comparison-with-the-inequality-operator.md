---
id: 56533eb9ac21ba0edf2244d2
title: Vergleich mit dem Ungleichheitsoperator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

Der Ungleichheitsoperator (`!=`) ist das Gegenteil des Gleichheitsoperators. Es bedeutet nicht gleich und gibt `false` zurück, wo Gleichheit `true` zurückgeben würde und *umgekehrt*. Wie der Gleichheitsoperator konvertiert auch der Ungleichheitsoperator die Datentypen der Werte während des Vergleichs.

**Beispiele**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Füge den Ungleichheitsoperator `!=` zu der `if` Anweisung hinzu, damit die Funktion den String `Not Equal` zurückgeben wird, wenn `val` nicht gleich `99` ist.

# --hints--

`testNotEqual(99)` sollte den String `Equal` zurückgeben

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` sollte den String `Equal` zurückgeben

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` sollte den String `Not Equal` zurückgeben

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` sollte den String `Not Equal` zurückgeben

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` sollte den String `Not Equal` zurückgeben

```js
assert(testNotEqual('bob') === 'Not Equal');
```

Du solltest den `!=` Operator verwenden

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
