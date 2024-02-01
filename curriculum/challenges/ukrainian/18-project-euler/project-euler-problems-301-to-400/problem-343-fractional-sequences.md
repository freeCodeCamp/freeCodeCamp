---
id: 5900f4c41000cf542c50ffd6
title: 'Завдання 343: дробові послідовності'
challengeType: 1
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

Для будь-якого натурального числа $k$ скінченна послідовність $a_i$ дробів $\frac{x_i}{y_i}$ визначається як:

- $a_1 = \displaystyle\frac{1}{k}$ та
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ в скороченому вигляді за умови $i > 1$.

Коли $a_i$ досягає певного цілого числа $n$, послідовність зупиняється. (Тобто тоді, коли $y_i = 1$.)

Визначимо $f(k) = n$.

Наприклад, за умови $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

Отже, $f(20) = 6$.

Також $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ та $\sum f(k^3) = 118\\,937$ за умови $1 ≤ k ≤ 100$.

Знайдіть $\sum f(k^3)$ за умови $1 ≤ k ≤ 2 × {10}^6$.

# --hints--

`fractionalSequences()` має повернути `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
