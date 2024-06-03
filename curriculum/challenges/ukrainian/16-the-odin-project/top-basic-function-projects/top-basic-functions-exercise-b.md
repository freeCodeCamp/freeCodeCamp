---
id: 661e131f068359c3ccf2f4d6
title: Базові функції. Вправа B
challengeType: 1
dashedName: top-basic-functions-exercise-b
---

# --description--

Напишіть функцію під назвою `multiply`, яка приймає два параметри та повертає їхній добуток.

# --hints--

Ви повинні мати функцію під назвою `multiply`.

```js
assert.isFunction(multiply);
```

Функція має приймати два цілих числа як аргументи.

```js
assert.match(multiply.toString(), /\s*multiply\(\s*\w+\s*,\s*\w+\s*\)/);
```

Поверніть добуток двох цілих чисел.

```js
assert.strictEqual(multiply(10, 10), 100);
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js 
function multiply(a, b) {
  return a * b;
}
```
