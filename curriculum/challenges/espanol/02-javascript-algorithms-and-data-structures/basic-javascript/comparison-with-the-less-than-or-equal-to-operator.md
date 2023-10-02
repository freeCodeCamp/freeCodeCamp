---
id: 56533eb9ac21ba0edf2244d7
title: Comparación con el operador "menor o igual que"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

El operador menor o igual que (`<=`) compara el valor de dos números. Si el número de la izquierda es menor o igual que el número de la derecha, devuelve `true`. Si el número a la izquierda es mayor que el número a la derecha, devuelve `false`. Al igual que el operador de igualdad, el operador menor o igual que convertirá los tipos de datos mientras los compara.

**Ejemplos**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

Agrega el operador menor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.

# --hints--

`testLessOrEqual(0)` debe devolver la cadena `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` debe devolver la cadena `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` debe devolver la cadena `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` debe devolver la cadena `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` debe devolver la cadena `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` debe devolver la cadena `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` debe devolver la cadena `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

Debes utilizar el operador `<=` al menos dos veces

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
