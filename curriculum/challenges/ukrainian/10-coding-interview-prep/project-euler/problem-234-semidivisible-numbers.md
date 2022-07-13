---
id: 5900f4571000cf542c50ff69
title: 'Завдання 234: Напівподільні числа'
challengeType: 1
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

Для цілого числа $n ≥ 4$ визначаємо нижній простий квадратний корінь з $n$, позначений $lps(n)$, як $\text{largest prime} ≤ \ sqrt{n}$ і верхній простий квадратний корінь з $n$, $ups(n)$, як $\text{smallest prime} ≥ \sqrt{n}$.

Так, наприклад, $lps(4) = 2 = ups (4)$, $lps(1000) = 31$, $ups(1000) = 37$.

Назвемо ціле число $n ≥ 4$ напівподільним, якщо один із $lps(n)$ та $ups(n)$ ділиться на $n$, але не на обидва.

Сума всіх напівподільних чисел не більших за 15 дорівнює 30, це числа — 8, 10 і 12. 15 не є напівподільним, оскільки воно кратне як $lps(15) = 3$, так $ups(15) = 5$. Також, наприклад, сума 92 напівподільних чисел до 1000 дорівнює 34825.

Яка сума всіх напівподільних чисел не більших за 999966663333?

# --hints--

`semidivisibleNumbers()` має повернути `1259187438574927000`.

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```
