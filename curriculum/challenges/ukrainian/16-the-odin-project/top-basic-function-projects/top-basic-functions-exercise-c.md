---
id: 661e151f068359c3ccf2f4d7
title: Базові функції. Вправа C
challengeType: 1
dashedName: top-basic-functions-exercise-c
---

# --description--

Напишіть функцію під назвою `capitalize`, яка приймає рядок як параметр та повертає новий рядок із великою першою літерою.

# --hints--

Ви повинні мати функцію під назвою `capitalize`.

```js
assert.isFunction(capitalize);
```

Функція має приймати рядок як параметр.

```js
assert.match(capitalize.toString(), /\s*capitalize\(\s*\w+\s*\)/);
```

Функція має повернути новий рядок із великою першою літерою.

```js
assert.strictEqual(capitalize('sem'), 'Sem');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```
