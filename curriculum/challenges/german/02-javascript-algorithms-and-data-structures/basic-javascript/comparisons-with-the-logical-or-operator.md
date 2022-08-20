---
id: 56533eb9ac21ba0edf2244d9
title: Vergleiche mit dem logischen Oder-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

Der <dfn>logische Oder</dfn>-Operator (`||`) gibt `true` zurück, wenn einer der <dfn>Operanden</dfn> `true` ist. Andernfalls wird `false` zurückgegeben.

Der <dfn>logische Oder</dfn>-Operator besteht aus zwei Pipe-Symbolen: (`||`). Diese befindet sich normalerweise zwischen der Backspace- und der Enter-Taste.

Das folgende Muster sollte dir von früheren Hinweisen bekannt vorkommen:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

gibt nur dann `Yes` zurück, wenn `num` zwischen `5` und `10` liegt (einschließlich 5 und 10). Die gleiche Logik lässt sich wie folgt formulieren:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Kombiniere die beiden `if`-Anweisungen zu einer Anweisung, die den String `Outside` zurückgibt, wenn `val` nicht zwischen `10` und `20` liegt, einschließlich (10 und 20). Andernfalls wird der String `Inside` zurückgegeben.

# --hints--

Du solltest den Operator `||` einmal verwenden

```js
assert(code.match(/\|\|/g).length === 1);
```

Du solltest nur eine `if`-Anweisung verwenden

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` sollte den String `Outside` zurückgeben

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` sollte den String `Outside` zurückgeben

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` sollte den String `Inside` zurückgeben

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` sollte den String `Inside` zurückgeben

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` sollte den String `Inside` zurückgeben

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` sollte den String `Inside` zurückgeben

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` sollte den String `Outside` zurückgeben

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` sollte den String `Outside` zurückgeben

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
