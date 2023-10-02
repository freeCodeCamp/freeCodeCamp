---
id: cf1111c1c11feddfaeb5bdef
title: Itera con los bucles "for" de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

Puedes ejecutar el mismo código múltiples veces usando un bucle.

El tipo más común de bucle de JavaScript se llama bucle `for` porque se ejecuta "por" un número específico de veces.

Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:

`for (a; b; c)`, donde `a` es la sentencia de inicialización, `b` es la sentencia condicional, y `c` es la expresión final.

La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente se utiliza para definir y configurar tu variable de bucle.

La sentencia condicional es evaluada al principio de cada iteración del bucle y continuará siempre y cuando sea `true`. Cuando la condición sea `false` al inicio de la iteración, el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falso, tu bucle nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de condición y se utiliza normalmente para incrementar o disminuir tu contador de bucle.

En el siguiente ejemplo inicializamos con `i = 0` e iteramos mientras nuestra condición `i < 5` es verdadera. Incrementaremos `i` por `1` en cada iteración de bucle con `i++` como nuestra expresión final.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` ahora tendrá el valor `[0, 1, 2, 3, 4]`.

# --instructions--

Usa un bucle `for` para empujar los valores desde el 1 al 5 en `myArray`.

# --hints--

Debes usar un bucle `for` para esto.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` debe ser igual a `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
