---
id: 56533eb9ac21ba0edf2244d0
title: Vergleich mit dem Gleichheitsoperator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

Es gibt viele <dfn>Vergleichsoperatoren</dfn> in JavaScript. Alle diese Operatoren geben einen booleschen `true` oder `false`-Wert zurück.

Der grundlegendste Operator ist der Gleichheitsoperator `==`. Der Gleichheitsoperator vergleicht zwei Werte und gibt `true` zurück, wenn sie gleichwertig sind oder `false`, wenn sie es nicht sind. Beachte, dass Gleichheit sich von der Zuweisung (`=`) unterscheidet, die den Wert rechts vom Operator einer Variablen links zuweist.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

Wenn `myVal` gleich `10` ist, gibt der Gleichheitsoperator `true` zurück, also wird der Code in den geschweiften Klammern ausgeführt und die Funktion gibt `Equal` zurück. Andernfalls wird die Funktion `Not Equal` zurückgeben. Damit JavaScript zwei verschiedene <dfn>Datentypen</dfn> vergleichen kann (zum Beispiel `numbers` und `strings`), muss es einen Typ in einen anderen umwandeln. Dies ist bekannt als Typenzwang (Type Coercion). Danach kann es die Begriffe wie folgt vergleichen:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

Füge den Gleichheitsoperator in die angegebene Zeile hinzu, damit die Funktion den String `Equal` zurückgibt, wenn `val` gleich `12` ist.

# --hints--

`testEqual(10)` sollte den String `Not Equal` zurückgeben

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` sollte den String `Equal` zurückgeben

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` sollte den String `Equal` zurückgeben

```js
assert(testEqual('12') === 'Equal');
```

Du solltest den Operator `==` verwenden

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
