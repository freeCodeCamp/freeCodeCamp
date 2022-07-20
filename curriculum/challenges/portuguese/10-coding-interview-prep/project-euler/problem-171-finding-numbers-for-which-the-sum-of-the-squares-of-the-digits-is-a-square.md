---
id: 5900f4181000cf542c50ff2a
title: >-
  Problema 171: Encontrar números para os quais a soma dos quadrados dos algarismos é um quadrado
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

Para um número inteiro positivo $n$, considere $f(n)$ como a soma dos quadrados dos algarismos (na base 10) de $n$, por exemplo,

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Encontre os últimos nove algarismos da soma de todos os $n$, sendo que $0 &lt; n &lt; {10}^{20}$, de modo que $f(n)$ seja um quadrado perfeito.

# --hints--

`lastDigitsSumOfPerfectSquare()` deve retornar `142989277`.

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
