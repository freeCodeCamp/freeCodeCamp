---
id: 587d7db2367417b2b2512b8b
title: Comprende las funciones que son invocadas inmediatamente (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Un patrón común en JavaScript es la ejecución de una función apenas declarada:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Esta es una expresión de función anónima que se ejecuta de inmediato y produce `Chirp, chirp!` inmediatamente.

Ten en cuenta que la función no tiene nombre y que no se almacena en un valor. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque de forma inmediata. Este patrón se conoce como una <dfn>expresión de función inmediatamente invocada</dfn> o <dfn>IIFE (por sus siglas en inglés)</dfn>.

# --instructions--

Reescribe la función `makeNest` y elimina su llamada, por lo que es una expresión de función anónima inmediatamente invocada (IIFE).

# --hints--

La función debe ser anónima.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

Tu función debe tener paréntesis al final de la expresión para llamarle de inmediato.

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
