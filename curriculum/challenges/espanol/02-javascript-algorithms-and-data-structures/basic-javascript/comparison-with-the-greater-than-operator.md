---
id: 56533eb9ac21ba0edf2244d4
title: Comparación con el operador "mayor que"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

El operador mayor que (`>`) compara los valores de dos números. Si el número a la izquierda es mayor que el número a la derecha, devuelve `true`. De lo contrario, devuelve `false`.

Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras los compara.

**Ejemplos**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

Agrega el operador mayor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.

# --hints--

`testGreaterThan(0)` debe devolver la cadena `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` debe devolver la cadena `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` debe devolver la cadena `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` debe devolver la cadena `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` debe devolver la cadena `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` debe devolver la cadena `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` debe devolver la cadena `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

Debes usar el operador `>` por lo menos dos veces

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
