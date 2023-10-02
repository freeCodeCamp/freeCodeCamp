---
id: 587d7b85367417b2b2512b38
title: Captura el uso del operador de asignación en lugar del operador de igualdad
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

Los programas de bifurcación (branching), es decir, los que hacen cosas diferentes si se cumplen ciertas condiciones, se basan en las sentencias `if`, `else if` y `else` de JavaScript. La condición a veces toma la forma de probar si un resultado es igual a un valor.

Esta lógica se habla (en español, al menos) como "si x es igual a y, entonces...", lo que puede traducirse literalmente en código utilizando el `=`, u operador de asignación. Esto lleva a un flujo de control inesperado en tu programa.

Como hemos visto en desafíos anteriores, el operador de asignación (`=`) en JavaScript asigna un valor a una variable. Y los operadores `==` y `===` comprueban la igualdad (el triple `===` comprueba la igualdad estricta, lo que significa que tanto el valor como el tipo son iguales).

El código siguiente asigna a `x` el valor de 2, que se evalúa como `true`. Casi todos los valores por sí solos en JavaScript se evalúan como `true`, excepto lo que se conoce como valores "falsos" (falsy values): `false`, `0`, `""` (una cadena vacía), `NaN`, `undefined`, y `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

En este ejemplo, el bloque de código dentro de la sentencia `if` se ejecutará para cualquier valor de `y`, a menos que `y` sea algún valor falsy. El bloque `else`, que esperamos que se ejecute aquí, no se ejecutará realmente.

# --instructions--

Corrige la condición para que el programa ejecute la rama correcta y se asigne el valor adecuado a `result`.

# --hints--

Tu código debe corregir la condición para que compruebe igualdad, en lugar de utilizar asignación.

```js
assert(result == 'Not equal!');
```

La condición debe utilizar `==` o `===` para comprobar igualdad.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
