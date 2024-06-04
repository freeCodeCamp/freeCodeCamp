---
id: 6619240f46cec8e04d77e03a
title: Базові функції. Вправа A
challengeType: 1
dashedName: top-basic-functions-exercise-a
---

# --description--

Створіть функцію, яка приймає ціле число. Ця функція має повернути задане `ціле число + 7`, якщо це число менше за `10`. Якщо це число більше або дорівнює `10`, то вона має повернути задане `ціле число - 3`.

Назвою функції має бути `addOrSubtract`.

# --hints--

Ви повинні мати функцію під назвою `addOrSubtract`.

```js
assert.isFunction(addOrSubtract);
```

Функція має приймати ціле число як аргумент.

```js
assert.match(addOrSubtract.toString(), /\s*addOrSubtract\(\s*\w+\s*\)/);
```

Поверніть задане ціле число + 7, якщо ціле число менше ніж 10.

```js
assert.strictEqual(addOrSubtract(5), 12);
```

Поверніть задане ціле число - 3, якщо ціле число більше або дорівнює 10.

```js
assert.strictEqual(addOrSubtract(10), 7);
```




# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function addOrSubtract(num) {
  if (num < 10) {
    return num + 7;
  } else {
    return num - 3;
  }
}
```
