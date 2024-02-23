---
id: 56533eb9ac21ba0edf2244db
title: Einführung in die Else If-Anweisungen
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

Wenn du mehrere Bedingungen zu erfüllen hast, kannst du `if`-Anweisungen mit `else if`-Anweisungen verketten.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

# --instructions--

Ändere die Logik, um `else if`-Anweisungen zu verwenden.

# --hints--

Du solltest mindestens zwei `else`-Anweisungen verwenden

```js
assert(code.match(/else/g).length > 1);
```

Du solltest mindestens zwei `if`-Anweisungen verwenden

```js
assert(code.match(/if/g).length > 1);
```

Du solltest für jeden `if else`-Codeblock öffnende und schließende geschweifte Klammern verwenden.

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` sollte den String `Smaller than 5` zurückgeben

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` sollte den String `Between 5 and 10` zurückgeben

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` sollte den String `Between 5 and 10` zurückgeben

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` sollte den String `Between 5 and 10` zurückgeben

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` sollte den String `Greater than 10` zurückgeben

```js
assert(testElseIf(12) === 'Greater than 10');
```

# --seed--

## --seed-contents--

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
```

# --solutions--

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```
