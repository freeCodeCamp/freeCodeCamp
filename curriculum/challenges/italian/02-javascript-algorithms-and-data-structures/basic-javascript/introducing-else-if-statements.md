---
id: 56533eb9ac21ba0edf2244db
title: Introduzione alle istruzioni Else If
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

Se hai più condizioni che devono essere valutate, puoi concatenare le istruzioni `if` con le istruzioni `else if`.

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

Converti la logica per usare le istruzioni `else if`.

# --hints--

Dovresti avere almeno due istruzioni `else`

```js
assert(code.match(/else/g).length > 1);
```

Dovresti avere almeno due istruzioni `if`

```js
assert(code.match(/if/g).length > 1);
```

Dovresti avere una parentesi graffa di apertura e una di chiusura per ogni blocco di codice `if else`.

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` dovrebbe restituire la stringa `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` dovrebbe restituire la stringa `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` dovrebbe restituire la stringa `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` dovrebbe restituire la stringa `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` dovrebbe restituire la stringa `Greater than 10`

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
