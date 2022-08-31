---
id: 5900f43c1000cf542c50ff4e
title: 'Problema 207: Equazioni di partizione di numeri interi'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

Per alcuni numeri interi positivi $k$ esiste una partizione intera del modulo $4^t = 2^t + k$,

dove $4^t$, $2^t$, e $k$ sono tutti interi positivi e $t$ è un numero reale.

Le prime due partizioni sono $4^1 = 2^1 + 2$ and $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$.

Le partizioni dove $t$ è anche un intero sono chiamate perfette. Per ogni $m ≥ 1$ sia $P(m)$ la proporzione di tali partizioni che sono perfette con $k ≤ m$.

Così $P(6) = \frac{1}{2}$.

Nella tabella seguente sono elencati alcuni valori di $P(m)$

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

Trova il più piccolo $m$ per il quale $P(m) &lt; \frac{1}{12\\,345}

# --hints--

`integerPartitionEquations()` dovrebbe restituire `44043947822`.

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
