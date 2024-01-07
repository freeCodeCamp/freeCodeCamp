---
id: 56533eb9ac21ba0edf2244af
title: Asignación compuesta con adición aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

En la programación, es común utilizar asignaciones para modificar el contenido de una variable. Recuerda que todo lo que está a la derecha del signo de igualdad se evalúa primero, así que podemos decir:

```js
myVar = myVar + 5;
```

para sumar `5` a `myVar`. Dado que se trata de un patrón tan común, hay operadores que hacen tanto la operación matemática como la asignación en un solo paso.

Uno de estos operadores es el operador `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

Se mostrará un `6` en la consola.

# --instructions--

Convierte las asignaciones de `a`, `b` y `c` para que utilicen el operador `+=`.

# --hints--

`a` debe ser igual a `15`.

```js
assert(a === 15);
```

`b` debe ser igual a `26`.

```js
assert(b === 26);
```

`c` debe ser igual a `19`.

```js
assert(c === 19);
```

Debes usar el operador `+=` para cada variable.

```js
assert(code.match(/\+=/g).length === 3);
```

No debes modificar el código por encima del comentario especificado.

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
