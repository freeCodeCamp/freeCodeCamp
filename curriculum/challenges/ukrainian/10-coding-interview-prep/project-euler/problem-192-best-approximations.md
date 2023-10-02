---
id: 5900f42c1000cf542c50ff3f
title: 'Завдання 192: Найкращі наближення'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Нехай $x$ буде дійсним числом.

Найкраще наближення до $x$ для знаменника $d$ - раціональне число $\frac{r}{s}$ в зменшеному вигляді, із $s ≤ d$, таким чином, що будь-яке раціональне число, яке ближче до $x$ за $\frac{r}{s}$ має знаменник, що є більшим, ніж $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

Наприклад, найкращим наближенням до $\sqrt{13}$ для знаменника $20$ є $\frac{18}{5}$ і найкращим наближенням до $\sqrt{13}$ для знаменника $30$ буде $\frac{101}{28}$.

Знайдіть суму всіх знаменників найкращого наближення до $\sqrt{n}$ для знаменника ${10}^{12}$, де $n$ це не ідеальний квадрат і $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` має видати `57060635927998344`.

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
