---
id: 587d7db2367417b2b2512b8b
title: Пояснення негайно викликаного виразу функції (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

Найрозповсюдженіший шаблон в JavaScript — це виконання функції одразу після її оголошення:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

Цей анонімний вираз функції негайно відображає або виконує `Chirp, chirp!`.

Зверніть увагу, що функція безіменна й не зберігається у змінній. Дві дужки () наприкінці виразу сприяють негайному виконанню або виклику. Цей шаблон також відомий як <dfn>immediately invoked function expression</dfn> або <dfn>IIFE</dfn>.

# --instructions--

Перепишіть функцію `makeNest` й приберіть назву, щоб замість цього одразу одержати анонімний негайно викликаний вираз функції (IIFE).

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
