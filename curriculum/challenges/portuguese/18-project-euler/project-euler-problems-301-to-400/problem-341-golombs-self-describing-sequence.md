---
id: 5900f4c11000cf542c50ffd3
title: 'Problema 341: Sequência autodescritiva de Golomb'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

A sequência autodescritiva de Golomb ($G(n)$) é a única sequência não decrescente de números naturais, tal que $n$ aparece exatamente $G(n)$ vezes na sequência. Os valores de $G(n)$ para os primeiros $n$ são

$$\begin{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

Você é informado de que $G({10}^3) = 86$, $G({10}^6) = 6137$.

Você também fica sabendo de que $\sum G(n^3) = 153.506.976$ para $1 ≤ n &lt; {10}^3$.

Encontre $\sum G(n^3)$ para $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` deve retornar `56098610614277016`.

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
