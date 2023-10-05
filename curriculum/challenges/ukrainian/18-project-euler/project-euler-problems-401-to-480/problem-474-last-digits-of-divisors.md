---
id: 5900f5471000cf542c510059
title: 'Завдання 474: останні цифри дільників'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

Визначимо $F(n, d)$ для натурального числа $n$ та цифр $d$ як кількість дільників числа $n$, останні цифри якого дорівнюють $d$.

Наприклад, $F(84, 4) = 3$. Серед дільників числа 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84), три з них (4, 14, 84) закінчуються на 4.

Також можна довести, що $F(12!, 12) = 11$ та $F(50!, 123) = 17\\,888$.

Знайдіть $F({10}^6!, 65\\,432) \text{ mod } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` має повернути `9690646731515010`.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
