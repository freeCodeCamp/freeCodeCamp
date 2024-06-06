---
id: 661e17c6068359c3ccf2f4d8
title: Базові функції. Вправа D
challengeType: 1
dashedName: top-basic-functions-exercise-d
---

# --description--

Напишіть функцію під назвою `lastLetter`, яка приймає рядок як параметр та повертає останню літеру рядка.

# --hints--

Ви повинні мати функцію під назвою `lastLetter`.

```js
assert.isFunction(lastLetter);
```

Функція має приймати рядок як параметр.

```js
assert.match(lastLetter.toString(), /\s*lastLetter\(\s*\w+\s*\)/);
```

Поверніть останню літеру рядка.

```js
assert.strictEqual(lastLetter('Sem'), 'm');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function lastLetter(str) {
  return str[str.length - 1];
}
```
