---
id: 5900f53d1000cf542c51004f
title: 'Завдання 464: функція Мебіуса та інтервали'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

Функція Мебіуса, позначена $μ(n)$, визначається таким чином:

- $μ(n) = (-1)^{ω(n)}$, якщо $n$ є безквадратним (де $ω(n)$ є кількістю різних простих множників $n$)
- $μ(n) = 0$, якщо $n$ не є безквадратним.

Нехай $P(a, b)$ буде кількістю цілих чисел $n$ в інтервалі $[a, b]$, за яких $μ(n) = 1$.

Нехай $N(a, b)$ буде кількістю цілих чисел $n$ в інтервалі $[a, b]$, за яких $μ(n) = -1$.

Наприклад, $P(2, 10) = 2$ та $N(2, 10) = 4$.

Нехай $C(n)$ буде кількістю пар цілих чисел $(a, b)$, за яких:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, та
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

Наприклад, $C(10) = 13$, $C(500) = 16\\,676$ та $C(10\\,000) = 20\\,155\\,319$.

Знайдіть $C(20\\,000\\,000)$.

# --hints--

`mobiusFunctionAndIntervals()` має повернути `198775297232878`.

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function mobiusFunctionAndIntervals() {

  return true;
}

mobiusFunctionAndIntervals();
```

# --solutions--

```js
// solution required
```
