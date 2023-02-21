---
id: 587d7b7e367417b2b2512b24
title: Використання умовного (тернарного) оператора
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

<dfn>Умовний оператор</dfn>, який також називається <dfn>тернарним оператором</dfn>, можна використовувати як однорядкову інструкцію «if-else».

Синтаксисом є `a ? b : c`, де `a` – умова, `b` – код, якщо умова повертає `true` та `c` – код, якщо умова повертає `false`.

Ця функція використовує інструкцію `if/else`, щоб перевірити умову:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

Її можна переписати, використовуючи умовний оператор:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

Використайте умовний оператор у функції `checkEqual`, щоб перевірити, чи два числа рівні. Функція повинна повернути рядок `Equal` або рядок `Not Equal`.

# --hints--

`checkEqual` має використовувати умовний оператор

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` має повертати рядок `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` має повертати рядок `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` має повертати рядок `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
