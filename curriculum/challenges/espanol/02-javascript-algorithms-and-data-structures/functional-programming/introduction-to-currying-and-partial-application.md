---
id: 587d7dab367417b2b2512b70
title: Introducción a la currificación y a la aplicación de funciones parciales
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

La <dfn>aridad</dfn> de una función es el número de argumentos que requiere. <dfn>Currificar</dfn> una función significa convertir una función de N aridades a N funciones de 1 aridad.

En otras palabras, reestructura una función, por lo que toma un argumento, luego devolverá otra función que toma el siguiente argumento, y así sucesivamente.

A continuación un ejemplo:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` devolverá `3`.

Esto es útil en tu programa si no puedes proporcionar todos los argumentos a una función al mismo tiempo. Puedes guardar la llamada a cada función dentro de una variable, la cual mantendrá la referencia de la función devuelta que toma el siguiente argumento cuando este disponible. Aquí hay un ejemplo utilizando la función currificada del ejemplo anterior:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Similarmente, <dfn>la aplicación de una función parcial</dfn> puede describirse como aplicar algunos argumentos a la función al mismo tiempo y devolviendo una función que se aplica a más argumentos. A continuación un ejemplo:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Completa el cuerpo de la función `add` para que use currificación para añadir parámetros `x`, `y`, y `z`.

# --hints--

`add(10)(20)(30)` debe devolver `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` debe devolver `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` debe devolver `66`.

```js
assert(add(11)(22)(33) === 66);
```

Tu código deber incluir una declaración final que devuelva `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
