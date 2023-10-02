---
id: 587d7db2367417b2b2512b8b
title: Comprendere l'espressione di funzione invocata immediatamente (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Un modello comune in JavaScript è quello di eseguire una funzione non appena viene dichiarata:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Questa è un'espressione di funzione anonima che viene eseguita subito, e produce `Chirp, chirp!` immediatamente.

Nota che la funzione non ha un nome e non è memorizzata in una variabile. Le due parentesi () alla fine dell'espressione della funzione fanno sì che essa sia immediatamente eseguita o invocata. Questo modello è conosciuto come una <dfn>espressione funzione invocata immediatamente</dfn> o <dfn>IIFE</dfn>.

# --instructions--

Riscrivi la funzione `makeNest` e rimuovi la sua chiamata in modo che diventi un'espressione di funzione invocata immediatamente (IIFE).

# --hints--

La funzione dovrebbe essere anonima.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

La tua funzione dovrebbe avere delle parentesi alla fine dell'espressione, in modo da chiamarla immediatamente.

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
