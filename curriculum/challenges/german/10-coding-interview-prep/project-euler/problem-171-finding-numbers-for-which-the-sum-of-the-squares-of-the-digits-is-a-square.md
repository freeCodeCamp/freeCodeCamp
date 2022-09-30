---
id: 5900f4181000cf542c50ff2a
title: >-
  Problem 171: Finden von Zahlen, bei denen die Summe der Quadrate der Ziffern ein Quadrat ist
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

Für eine positive ganze Zahl $n$, lasse $f(n)$ die Summe der Quadrate der Ziffern (zur Basis 10) von $n$ sein, z.B.

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Finde die letzten neun Ziffern der Summe aller $n$, $0 &lt; n &lt; {10}^{20}$, sodass $f(n)$ ein perfektes Quadrat ist.

# --hints--

`lastDigitsSumOfPerfectSquare()` sollte `142989277` zurückgeben.

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
