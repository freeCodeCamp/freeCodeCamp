---
id: 5900f4521000cf542c50ff64
title: 'Problema 229: Quatro representações usando quadrados'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Considere o número 3600. Ele é muito especial, porque

$$\begin{align}   & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\   & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\ \end{align}$$

Da mesma forma, descobrimos que $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

Em 1747, Euler provou quais números são representáveis como uma soma de dois quadrados. Estamos interessados nos números $n$ que admitem representações de todos os quatro tipos a seguir:

$$\begin{align}   & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\   & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\ \end{align}$$

onde $a_k$ e $b_k$ são números inteiros positivos.

Há 75373 números que não excedem ${10}^7$.

Quantos desses números existem e que não excedam $2 × {10}^9$?

# --hints--

`representationsUsingSquares()` deve retornar `11325263`.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
