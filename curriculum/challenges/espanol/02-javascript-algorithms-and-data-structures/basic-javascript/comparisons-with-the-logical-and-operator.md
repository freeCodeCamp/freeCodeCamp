---
id: 56533eb9ac21ba0edf2244d8
title: Comparaciones con el operador lógico "and"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

A veces tendrás que probar más de una cosa a la vez. El operador <dfn>lógico and</dfn> (`&&`) devuelve `true` si y solo si los <dfn>operandos</dfn> a la izquierda y a la derecha son verdaderos.

El mismo efecto se podría lograr anidando una sentencia if dentro de otra sentencia if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

solo devolverá `Yes` si `num` es mayor que `5` y menor que `10`. La misma lógica se puede escribir como:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Reemplaza las dos sentencias if por una sola, usando el operador `&&`, el cual devolverá la cadena `Yes` si `val` es menor o igual a `50` y mayor o igual a `25`. De lo contrario, devolverá la cadena `No`.

# --hints--

Debes usar el operador `&&` una vez

```js
assert(code.match(/&&/g).length === 1);
```

Debes tener una sola sentencia `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` debe devolver la cadena `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` debe devolver la cadena `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` debe devolver la cadena `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` debe devolver la cadena `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` debe devolver la cadena `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` debe devolver la cadena `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` debe devolver la cadena `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` debe devolver la cadena `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```
