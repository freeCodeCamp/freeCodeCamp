---
id: bd7123c9c441eddfaeb5bdef
title: Comprende los valores booleanos
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Otro tipo de datos es el <dfn>Booleano</dfn>. Los booleanos solo pueden ser uno de dos valores: `true` (verdadero) o `false` (falso). Básicamente son pequeños interruptores de encendido, donde `true` es encendido y `false` es apagado. Estos dos estados se excluyen mutuamente.

**Nota** Los valores del tipo booleano nunca se escriben con comillas. Las cadenas `"true"` y `"false"` no son booleanos y no tienen ningún significado especial en JavaScript.

# --instructions--

Modify the `welcomeToBooleans` function so that it returns `true` instead of `false`.

# --hints--

La función `welcomeToBooleans()` debe devolver un valor booleano (`true` o `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` debe devolver `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
