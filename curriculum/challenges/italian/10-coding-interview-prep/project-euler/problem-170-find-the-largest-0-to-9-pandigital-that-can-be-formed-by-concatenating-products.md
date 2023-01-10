---
id: 5900f4161000cf542c50ff29
title: >-
  Problema 170: trova il pandigitale 0-9 più grande che puoi formare concatenando prodotti
challengeType: 1
forumTopicId: 301805
dashedName: >-
  problem-170-find-the-largest-0-to-9-pandigital-that-can-be-formed-by-concatenating-products
---

# --description--

Prendi il numero 6 e moltiplicalo per 1273 e 9854:

$$\begin{align}   & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\ \end{align}$$

Concatenando questi prodotti otteniamo il pandigitale 1-9 763859124. Chiamiamo 763859124 il "prodotto concatenato di 6 e (1273, 9854)". Nota anche, che la concatenazione dei numeri di input, 612739854, è pure un numero pandigitale 1-9.

Si può fare lo stesso con numeri 0-9 pandigitali.

Qual è il più grande prodotto concatenato pandigitale 0-9 a 10 cifre di un numero intero con due o più altri numeri interi, cosicché la concatenazione dei numeri di input è pure un numero a 10 cifre pandigitale 0-9?

# --hints--

`largestPandigital()` dovrebbe restituire `9857164023`.

```js
assert.strictEqual(largestPandigital(), 9857164023);
```

# --seed--

## --seed-contents--

```js
function largestPandigital() {

  return true;
}

largestPandigital();
```

# --solutions--

```js
// solution required
```
