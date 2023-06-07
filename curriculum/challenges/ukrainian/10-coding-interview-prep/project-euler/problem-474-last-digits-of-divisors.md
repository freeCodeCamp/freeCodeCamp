---
id: 5900f5471000cf542c510059
title: 'Завдання 474: Останні цифри дільників'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

Для додатного цілого $n$ і цифри $d$ ми визначаємо $F(n, d)$ як кількість дільників $n$, останні цифри яких дорівнюють $d$.

Наприклад, $F(84, 4) = 3$. Серед дільників 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 44), три з них (4, 14, 84) мають останню цифру 4.

Ми також можемо перевірити, що $F(12!, 12) = 11$ та $F(50!, 123) = 17\\,888$.

Знайдіть $F({10}^6!, 65\\,432) \t{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` повинен повертатися як `9690646731515010`.

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
