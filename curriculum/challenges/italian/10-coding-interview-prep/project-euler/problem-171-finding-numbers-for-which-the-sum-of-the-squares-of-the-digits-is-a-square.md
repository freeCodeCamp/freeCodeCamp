---
id: 5900f4181000cf542c50ff2a
title: >-
  Problema 171: Trovare numeri per i quali la somma dei quadrati delle cifre è un quadrato
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

Per un numero intero positivo $n$, sia $f(n)$ la somma dei quadrati delle cifre (in base 10) di $n$, es.

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Trova le ultime nove cifre della somma di tutti $n$, $0 &lt; n &lt; {10}^{20}$, tali che $f(n)$ sia un quadrato perfetto.

# --hints--

`lastDigitsSumOfPerfectSquare()` dovrebbe restituire `142989277`.

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
