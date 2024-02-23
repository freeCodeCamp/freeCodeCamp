---
id: 56533eb9ac21ba0edf2244b2
title: Asignación compuesta con división aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

El operador `/=` divide una variable entre otro número.

```js
myVar = myVar / 5;
```

Dividirá `myVar` por `5`. Esto se puede reescribir como:

```js
myVar /= 5;
```

# --instructions--

Convierte las tareas de `a`, `b`, y `c` para utilizar el operador `/=`.

# --hints--

`a` debe ser igual a `4`.

```js
assert(a === 4);
```

`b` debe ser igual a `27`.

```js
assert(b === 27);
```

`c` debe ser igual a `3`.

```js
assert(c === 3);
```

Debes usar el operador `/=` para cada variable.

```js
assert(code.match(/\/=/g).length === 3);
```

No debes modificar el código sobre el comentario especificado.

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
