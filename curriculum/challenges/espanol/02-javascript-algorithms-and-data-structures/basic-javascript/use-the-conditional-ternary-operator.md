---
id: 587d7b7e367417b2b2512b24
title: Usa el operador condicional (ternario)
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

El <dfn>operador condicional</dfn>, también llamado el <dfn>operador ternario</dfn>, puede utilizarse como una expresión if-else de una sola línea.

La sintaxis es `a ? b : c`, donde `a` es la condición, `b` es el código a ejecutar cuando la condición devuelve `true`, y `c` es el código a ejecutar cuando la condición devuelve `false`.

La siguiente función utiliza una sentencia `if/else` para comprobar una condición:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

Esto puede reescribirse usando el operador condicional:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

Utiliza el operador condicional en la función `checkEqual` para comprobar si dos números son iguales o no. La función debe devolver la cadena `Equal` o la cadena `Not Equal`.

# --hints--

`checkEqual` debe usar el operador condicional

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` debe devolver la cadena `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` debe devolver la cadena `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` debe devolver la cadena `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
