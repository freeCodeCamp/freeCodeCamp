---
id: 56533eb9ac21ba0edf2244d9
title: Comparaciones con el operador lógico "or"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

El operador <dfn>lógico or</dfn> (`||`) devuelve `true` si cualquiera de los <dfn>operandos</dfn> es `true`. De lo contrario, devuelve `false`.

El operador <dfn>lógico or</dfn> se compone de dos símbolos de barra vertical: (`||`). Este se puede encontrar normalmente entre las teclas de tabulación y escape.

El patrón de abajo debería parecer familiar desde los puntos de referencia anteriores:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

devolverá `Yes` sólo si `num` está entre `5` y `10` (5 y 10 incluidos). La misma lógica se puede escribir como:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

Combina las dos sentencias `if` en una sola sentencia que devuelva la cadena `Outside` si `val` no está entre `10` y `20`, inclusivo. De lo contrario, devuelve la cadena `Inside`.

# --hints--

Debes usar el operador `||` una vez

```js
assert(code.match(/\|\|/g).length === 1);
```

Debes tener una sola sentencia `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` debe devolver la cadena `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` debe devolver la cadena `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` debe devolver la cadena `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` debe devolver la cadena `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` debe devolver la cadena `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` debe devolver la cadena `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` debe devolver la cadena `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` debe devolver la cadena `Outside`

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
