---
id: 5900f4c11000cf542c50ffd3
title: 'Problema 341: Sequenza auto-descrittiva di Golomb'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

La sequenza di auto-descrizione di Golomb ($G(n)$) è l'unica sequenza non decrescente di numeri naturali tali che $n$ appaia esattamente $G(n)$ volte nella sequenza. I valori di $G(n)$ per i primi $n$ sono

$$\begin{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

Ti viene dato che $G({10}^3) = 86$, $G({10}^6) = 6137$.

Ti viene anche dato che $\sum G(n^3) = 153\\,506\\,976$ per $1 ≤ n &lt; {10}^3$.

Trova $\sum G(n^3)$ per $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` dovrebbe restituire `56098610614277016`.

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

# --seed--

## --seed-contents--

```js
function golombsSequence() {

  return true;
}

golombsSequence();
```

# --solutions--

```js
// solution required
```
