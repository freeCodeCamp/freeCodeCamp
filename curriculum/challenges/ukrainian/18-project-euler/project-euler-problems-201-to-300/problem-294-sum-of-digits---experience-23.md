---
id: 5900f4931000cf542c50ffa5
title: 'Завдання 294: сума цифр, випадок №23'
challengeType: 1
forumTopicId: 301946
dashedName: problem-294-sum-of-digits---experience-23
---

# --description--

Визначимо $d(k)$, де $k$ є натуральним числом, як суму цифр числа $k$ звичайного десяткового запису. Отже, $d(42) = 4 + 2 = 6$.

Визначимо $S(n)$, де $n$ є натуральним числом, як кількість натуральних чисел $k &lt; {10}^n$ з такими властивостями:

- $k$ ділиться на 23 без остачі,
- $d(k) = 23$.

Дано, що $S(9) = 263\\,626$ та $S(42) = 6\\,377\\,168\\,878\\,570\\,056$.

Знайдіть $S({11}^{12})$ та надайте відповідь за $\bmod {10}^9$.

# --hints--

`experience23()` має повернути `789184709`.

```js
assert.strictEqual(experience23(), 789184709);
```

# --seed--

## --seed-contents--

```js
function experience23() {

  return true;
}

experience23();
```

# --solutions--

```js
// solution required
```
