---
id: 56533eb9ac21ba0edf2244b1
title: Asignación compuesta con multiplicación aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

El operador `*=` multiplica una variable por un número.

```js
myVar = myVar * 5;
```

se multiplicará `myVar` por `5`. Esto se puede reescribir como:

```js
myVar *= 5;
```

# --instructions--

Convierte las tareas de `a`, `b`, y `c` para utilizar el operador `*=`.

# --hints--

`a` debe ser igual a `25`.

```js
assert(a === 25);
```

`b` debe ser igual a `36`.

```js
assert(b === 36);
```

`c` debe ser igual a `46`.

```js
assert(c === 46);
```

Debes usar el operador `*=` para cada variable.

```js
assert(code.match(/\*=/g).length === 3);
```

No debes modificar el código sobre el comentario especificado.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
