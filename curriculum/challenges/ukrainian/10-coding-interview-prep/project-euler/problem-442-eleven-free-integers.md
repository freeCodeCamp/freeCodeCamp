---
id: 5900f5271000cf542c510039
title: 'Задача 442: Цілі числа без одинадцяти'
challengeType: 1
forumTopicId: 302114
dashedName: problem-442-eleven-free-integers
---

# --description--

Ціле число називається без одинадцяти, якщо його десяткове розширення не містить жодного підрядка, що представляє степінь 11, крім 1.

Наприклад, 2404 і 13431 підходять для визначення, тоді як 911 і 4121331 - ні.

$E(n)$ - це $n$-те додатне ціле число без одинадцяти. Наприклад, $E(3) = 3$, $E(200) = 213$ та $E(500\\,000) = 531\\,563$.

Знайдіть $E({10}^{18})$.

# --hints--

`elevenFreeIntegers()` повинен видати `1295552661530920200`.

```js
assert.strictEqual(elevenFreeIntegers(), 1295552661530920200);
```

# --seed--

## --seed-contents--

```js
function elevenFreeIntegers() {

  return true;
}

elevenFreeIntegers();
```

# --solutions--

```js
// solution required
```
