---
id: 56533eb9ac21ba0edf2244da
title: Introducción a las sentencias "Else"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
dashedName: introducing-else-statements
---

# --description--

Cuando la condición en una sentencia `if` es verdadera, se ejecutará el bloque de código que va a continuación. ¿Qué sucede cuando la condición es falsa? Normalmente no debería ocurrir nada. Con la sentencia `else`, se puede ejecutar un bloque alternativo de código.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

Combina la sentencia `if` en una sola sentencia `if/else`.

# --hints--

Sólo debes tener una sentencia `if` en el editor

```js
assert(code.match(/if/g).length === 1);
```

Debes usar una sentencia `else`

```js
assert(/else/g.test(code));
```

`testElse(4)` debe devolver la cadena `5 or Smaller`

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)` debe devolver la cadena `5 or Smaller`

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)` debe devolver la cadena `Bigger than 5`

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)` debe devolver la cadena `Bigger than 5`

```js
assert(testElse(10) === 'Bigger than 5');
```

No debes cambiar el código por encima o por debajo de los comentarios especificados.

```js
assert(/let result = "";/.test(code) && /return result;/.test(code));
```

# --seed--

## --seed-contents--

```js
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
```

# --solutions--

```js
function testElse(val) {
  let result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```
