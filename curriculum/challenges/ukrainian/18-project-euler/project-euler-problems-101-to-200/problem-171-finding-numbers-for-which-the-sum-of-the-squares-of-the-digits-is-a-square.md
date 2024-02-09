---
id: 5900f4181000cf542c50ff2a
title: >-
  Завдання 171: пошук чисел, для яких сума квадратів чисел є квадратом
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

Нехай $f(n)$, де $n$ є натуральним числом, є сумою квадратів чисел $n$ (з основою 10). Наприклад:

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Знайдіть останні дев’ять цифр суми усіх $n$, $0 &lt; n &lt; {10}^{20}$, за яких $f(n)$ є повним квадратом.

# --hints--

`lastDigitsSumOfPerfectSquare()` має повернути `142989277`.

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
