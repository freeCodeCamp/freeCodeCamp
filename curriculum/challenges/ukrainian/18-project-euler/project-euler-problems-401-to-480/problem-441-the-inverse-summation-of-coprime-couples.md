---
id: 5900f5261000cf542c510038
title: 'Завдання 441: обернена сума пар взаємно простих чисел'
challengeType: 1
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

Для цілого числа $M$ визначимо $R(M)$ як суму $\frac{1}{p·q}$ для всіх пар цілих чисел $p$ та $q$, які задовільняють такі умови:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ та $q$ є взаємно простими числами.

Також визначимо $S(N)$ як суму $R(i)$ за умови $2 ≤ i ≤ N$.

Можна довести, що $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ та $S(100) ≈ 58.2962$.

Знайдіть $S({10}^7)$. Дайте відповідь, заокруглену до чотирьох знаків після коми.

# --hints--

`inverseSummationCoprimeCouples()` має повернути `5000088.8395`.

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function inverseSummationCoprimeCouples() {

  return true;
}

inverseSummationCoprimeCouples();
```

# --solutions--

```js
// solution required
```
