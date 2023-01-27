---
id: 56533eb9ac21ba0edf2244d6
title: Comparación con el operador "menor que"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

El operador menor que (`<`) compara los valores de dos números. Si el número a la izquierda es menor que el número a la derecha, devuelve `true`. De lo contrario, devuelve `false`. Al igual que el operador de igualdad, el operador menor que convertirá los tipos de datos mientras los compara.

**Ejemplos**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Agrega el operador menor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.

# --hints--

`testLessThan(0)` debe devolver la cadena `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` debe devolver la cadena `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` debe devolver la cadena `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` debe devolver la cadena `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` debe devolver la cadena `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` debe devolver la cadena `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

Debes usar el operador `<` por lo menos dos veces

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
