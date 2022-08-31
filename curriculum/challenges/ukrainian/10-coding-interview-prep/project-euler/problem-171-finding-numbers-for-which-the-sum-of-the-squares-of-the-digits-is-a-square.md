---
id: 5900f4181000cf542c50ff2a
title: >-
  Завдання 171: Пошук чисел, для яких сума квадратів чисел — це квадрат
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

Для додатного цілого числа $n$, нехай $f(n)$ — це сума квадратів чисел (з основою 10) $n$, наприклад.

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Знайдіть останні дев'ять чисел суми усіх $n$, $0 &lt; n &lt; {10}^{20}$, якщо $f(n)$ є повним квадратом.

# --hints--

`lastDigitsSumOfPerfectSquare()` має повертати `142989277`.

```js
assert.strictEqual(lastDigitsSumOfPerfectSquare(), 142989277);
```

# --seed--

## --seed-contents--

```js
function lastDigitsSumOfPerfectSquare() {

  return true;
}

lastDigitsSumOfPerfectSquare();
```

# --solutions--

```js
// solution required
```
