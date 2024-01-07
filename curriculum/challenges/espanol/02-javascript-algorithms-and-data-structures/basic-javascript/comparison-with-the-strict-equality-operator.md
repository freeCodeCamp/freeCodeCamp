---
id: 56533eb9ac21ba0edf2244d1
title: Comparación con el operador de estricta igualdad
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

La estricta igualdad (`===`) es la contraparte del operador de igualdad (`==`). Sin embargo, a diferencia del operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común, el operador de estricta igualdad no realiza una conversión de tipo.

Si los valores que se comparan tienen diferentes tipos, se consideran desiguales, y el operador de estricta igualdad devolverá falso.

**Ejemplos**

```js
3 ===  3  // true
3 === '3' // false
```

En el segundo ejemplo, `3` es de tipo `Number` (número) y `'3'` es de tipo `String` (cadena).

# --instructions--

Usa el operador de estricta igualdad en la sentencia `if` para que la función devuelva la cadena `Equal` cuando `val` sea estrictamente igual a `7`.

# --hints--

`testStrict(10)` debe devolver la cadena `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` debe devolver la cadena `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` debe devolver la cadena `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

Debes usar el operador `===`

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
