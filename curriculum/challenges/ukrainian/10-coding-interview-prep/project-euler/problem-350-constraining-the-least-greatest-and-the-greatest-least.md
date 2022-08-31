---
id: 5900f4cb1000cf542c50ffdd
title: 'Задача 350: Обмеження найменшого найбільшим та найбільшого найменшим'
challengeType: 1
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

Список розміру $n$ - це послідовність натуральних чисел $n$. Прикладами можуть бути (2, 4, 6), (2, 6, 4), (10, 6, 15, 6), та (11).

Найбільший спільний дільник або список $gcd$ - це найбільше натуральне число, яке розділяє всі елементи списку. Приклади: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ та $gcd(11) = 11$.

Найменше спільне кратне число або список $lcm$ - це найменше натуральне число, що ділиться на кожен елемент у списку. Приклади: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ and $lcm(11) = 11$.

$f(G, L, N)$ - це кількість списків розміру $N$ з $gcd ≥ G$ та $lcm ≤ L$. Наприклад:

$$\begin{align}   & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\   & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053 \end{align}$$

Знайдіть $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

# --hints--

`leastGreatestAndGreatestLeast()` повинен повертатися як `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
