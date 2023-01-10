---
id: 5900f4231000cf542c50ff36
title: 'Problema 183: Massimo prodotto di parti'
challengeType: 1
forumTopicId: 301819
dashedName: problem-183-maximum-product-of-parts
---

# --description--

Sia $N$ un numero intero positivo che sia divisibile in $k$ parti uguali $r = \frac{N}{k}$, in modo che $N = r + r + \cdots + r$.

Sia $P$ il prodotto di queste parti, $P = r × r × \cdots × r = r^k$.

Ad esempio, se 11 è diviso in cinque parti uguali, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, quindi $P = {2.2}^5 = 51.53632$.

Sia $M(N) = P_{max}$ per un dato valore di $N$.

Si scopre che il massimo per $N = 11$ è trovato dividendo undici in quattro parti uguali che porta a $P_{max} = {(\frac{11}{4})}^4$; cioè, $M(11) = \frac{14641}{256} = 57.19140625$, che è un decimale finito.

Tuttavia, per $N = 8$ il massimo è raggiunto dividendolo in tre parti uguali, quindi $M(8) = \frac{512}{27}$, che è un decimale periodico.

Sia $D(N) = N$ se $M(N)$ è un decimale periodico e $D(N) = -N$ se $M(N)$ è un decimale finito.

Ad esempio, $\sum D(N)$ per $5 ≤ N ≤ 100$ è 2438.

Trova $\sum D(N)$ per $5 ≤ N ≤ 10000$.

# --hints--

`maximumProductOfParts()` dovrebbe restituire `48861552`.

```js
assert.strictEqual(maximumProductOfParts(), 48861552);
```

# --seed--

## --seed-contents--

```js
function maximumProductOfParts() {

  return true;
}

maximumProductOfParts();
```

# --solutions--

```js
// solution required
```
