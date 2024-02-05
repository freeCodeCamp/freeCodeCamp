---
id: 5900f4d51000cf542c50ffe8
title: 'Problem 361: Abfolge der Thue-Morse-Sequenz'
challengeType: 1
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

The Thue-Morse sequence $\\{T_n\\}$ is a binary sequence satisfying:

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

Die ersten Terme von $\\{T_n\\}$ sind wie folgt gegeben: $01101001\color{red}{10010}1101001011001101001\ldots$.

Wir definieren $\\{A_n\\}$ als die sortierte Folge von ganzen Zahlen, sodass der binäre Ausdruck jedes Elements als Teilfolge in $\\{T_n\\}$ erscheint. Die Dezimalzahl 18 wird beispielsweise als 10010 im Binärformat ausgedrückt. 10010 appears in $\\{T_n\\}$ ($T_8$ to $T_{12}$), so 18 is an element of $\\{A_n\\}$. Die Dezimalzahl 14 wird im Binärformat als 1110 ausgedrückt. 1110 erscheint nie in $\\{T_n\\}$, also ist 14 kein Element von $\\{A_n\\}$.

Die ersten paar Terme von $A_n$ sind wie folgt gegeben:

$$\begin{array}{cr}   n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots \end{array}$$

Wir können auch bestätigen, dass $A_{100} = 3251$ und $A_{1000} = 80\\,852\\,364\\,498$.

Find the last 9 digits of $\displaystyle\sum_{k = 1}^{18} A_{{10}^k}$.

# --hints--

`subsequenceOfThueMorseSequence()` should return `178476944`.

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

# --seed--

## --seed-contents--

```js
function subsequenceOfThueMorseSequence() {

  return true;
}

subsequenceOfThueMorseSequence();
```

# --solutions--

```js
// solution required
```
