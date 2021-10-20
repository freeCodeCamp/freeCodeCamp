---
id: 56533eb9ac21ba0edf2244db
title: Introducción a las sentencias "Else If"
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJ2hm'
forumTopicId: 18206
dashedName: introducing-else-if-statements
---

# --description--

Si tienes múltiples condiciones que necesitan ser resueltas, puedes encadenar sentencias `if` junto con sentencias `else if`.

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

Transforma la lógica para utilizar la sentencia `else if`.

# --hints--

Debes tener al menos dos sentencias `else`

```js
assert(code.match(/else/g).length > 1);
```

Debes tener al menos dos sentencias `if`

```js
assert(code.match(/if/g).length > 1);
```

Debes utilizar llaves de apertura y cierre para cada bloque de código `if else`.

```js
assert(
  code.match(
    /if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s+if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/
  )
);
```

`testElseIf(0)` debe devolver la cadena `Smaller than 5`

```js
assert(testElseIf(0) === 'Smaller than 5');
```

`testElseIf(5)` debe devolver la cadena `Between 5 and 10`

```js
assert(testElseIf(5) === 'Between 5 and 10');
```

`testElseIf(7)` debe devolver la cadena `Between 5 and 10`

```js
assert(testElseIf(7) === 'Between 5 and 10');
```

`testElseIf(10)` debe devolver la cadena `Between 5 and 10`

```js
assert(testElseIf(10) === 'Between 5 and 10');
```

`testElseIf(12)` debe devolver la cadena `Greater than 10`

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
