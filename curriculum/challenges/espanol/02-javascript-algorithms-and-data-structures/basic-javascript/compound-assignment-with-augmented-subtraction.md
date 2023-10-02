---
id: 56533eb9ac21ba0edf2244b0
title: Asignación compuesta con resta aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Al igual que el operador `+=`, `-=` resta un número de una variable.

```js
myVar = myVar - 5;
```

le restara `5` de `myVar`. Esto se puede reescribir como:

```js
myVar -= 5;
```

# --instructions--

Convierte las tareas de `a`, `b`, y `c` para utilizar el operador `-=`.

# --hints--

`a` debe ser igual a `5`.

```js
assert(a === 5);
```

`b` debe ser igual a `-6`.

```js
assert(b === -6);
```

`c` debe ser igual a `2`.

```js
assert(c === 2);
```

Debes usar el operador `-=` para cada variable.

```js
assert(code.match(/-=/g).length === 3);
```

No debes modificar el código sobre el comentario especificado.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
