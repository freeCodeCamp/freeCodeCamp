---
id: 587d7db2367417b2b2512b8b
title: Вираз негайно викликаної функції (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Часто у JavaScript виконують функцію одразу після її оголошення:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Це анонімний вираз функції, яка одразу виконується та виводить `Chirp, chirp!`.

Зверніть увагу, що функція не має назви та не зберігається у змінній. Дві дужки () наприкінці виразу сприяють негайному виконанню або виклику. Це відомо як <dfn>вираз негайно викликаної функції</dfn> або <dfn>IIFE</dfn>.

# --instructions--

Перепишіть функцію `makeNest` та видаліть виклик, щоб це був анонімний вираз негайно викликаної функції (IIFE).

# --hints--

Функція має бути анонімною.

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

Для негайного виклику ваша функція повинна мати дужки наприкінці.

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
