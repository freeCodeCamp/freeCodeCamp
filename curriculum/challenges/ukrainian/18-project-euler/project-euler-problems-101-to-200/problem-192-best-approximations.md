---
id: 5900f42c1000cf542c50ff3f
title: 'Завдання 192: найкращі апроксимації'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Нехай $x$ буде дійсним числом.

Найкращою апроксимацією $x$ для знаменника, обмеженим $d$, є раціональне число $\frac{r}{s}$ у скороченій формі, де $s ≤ d$, щоб будь-яке раціональне число, яке ближче до $x$ ніж $\frac{r}{s}$, мало знаменник більший за $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

Наприклад, найкращою апроксимацією $\sqrt{13}$ для знаменника, обмеженим $20$, є $\frac{18}{5}$, а найкращою апроксимацією $\sqrt{13}$ для знаменника, обмеженим $30$, є $\frac{101}{28}$.

Знайдіть суму всіх знаменників найкращої апроксимації $\sqrt{n}$ для знаменника, обмеженим ${10}^{12}$, де $n$ не є повним квадратом та $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` має повернути `57060635927998344`.

```js
assert.strictEqual(bestApproximations(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function bestApproximations() {

  return true;
}

bestApproximations();
```

# --solutions--

```js
// solution required
```
