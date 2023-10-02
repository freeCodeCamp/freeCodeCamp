---
id: 5900f5261000cf542c510038
title: 'Завдання 441: Обернена сума пар взаємно простих чисел'
challengeType: 1
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

Для цілого числа $M$ визначаємо $R(M)$ як суму $\frac{1}{p·q}$ для всіх пар цілих чисел $p$ та $q$, якщо вони задовольняють усі ці умови:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ та $q$ є взаємно простими числами.

Також визначаємо $S(N)$ як суму $R(i)$ при $2 ≤ i ≤ N$.

Можна перевірити, що $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$, а $S(100) ≈ 58.2962$.

Знайдіть $S({10}^7)$. Дайте відповідь, округлену до 4 знаків після коми.

# --hints--

`inverseSummationCoprimeCouples()` має видати `5000088.8395`.

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
