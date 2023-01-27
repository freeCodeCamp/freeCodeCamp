---
id: 587d7db2367417b2b2512b8b
title: Verstehe den sofort aufgerufenen Funktions-Ausdruck (Immediately Invoked Function Expression (IIFE))
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Ein gängiges Muster in JavaScript ist es, eine Funktion auszuführen, sobald sie deklariert wird:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Dies ist ein anonymer Funktionsausdruck, der sofort ausgeführt wird und sofort `Chirp, chirp!` ausgibt.

Beachte, dass die Funktion keinen Namen hat und nicht in einer Variablen gespeichert ist. Die beiden Klammern () am Ende des Funktionsausdrucks bewirken, dass er sofort ausgeführt oder aufgerufen wird. Dieses Muster wird als <dfn>sofort aufgerufener Funktionsausdruck</dfn> oder <dfn>IIFE</dfn> bezeichnet.

# --instructions--

Schreibe die Funktion `makeNest` um und entferne ihren Aufruf, sodass sie stattdessen ein anonymer, sofort aufgerufener Funktionsausdruck (IIFE) ist.

# --hints--

Die Funktion sollte anonym sein.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

Deine Funktion sollte am Ende des Ausdrucks Klammern haben, um sie sofort aufrufen zu können.

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
