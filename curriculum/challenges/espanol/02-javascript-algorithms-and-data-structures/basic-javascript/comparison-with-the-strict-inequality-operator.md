---
id: 56533eb9ac21ba0edf2244d3
title: Comparación con el operador de estricta desigualdad
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

El operador de estricta desigualdad `!==` es el opuesto lógico del operador de estricta igualdad. Esto significa "Estrictamente Desigual", y devuelve `false` cuando la comparación de estricta igualdad devolvería `true` y *vice versa*. El operador de estricta desigualdad no convertirá los tipos de datos.

**Ejemplos**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Agrega el operador de estricta desigualdad a la sentencia `if` para que la función devuelva la cadena `Not Equal` cuando `val` no sea estrictamente igual a `17`

# --hints--

`testStrictNotEqual(17)` debe devolver la cadena `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` debe devolver la cadena `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` debe devolver la cadena `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` debe devolver la cadena `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

Debes usar el operador `!==`

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
