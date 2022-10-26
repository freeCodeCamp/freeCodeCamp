---
id: 5900f43c1000cf542c50ff4e
title: 'Problem 207: Integer partition equations'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

Für einige positive ganze Zahlen $k$ gibt es eine ganzzahlige Partition der Form $4^t = 2^t + k$,

wobei $4^t$, $2^t$ und $k$ alle positive ganze Zahlen sind und $t$ eine reelle Zahl ist.

Die ersten beiden dieser Partitionen sind $4^1 = 2^1 + 2$ und $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots}. + 6$.

Partitionen, bei denen $t$ ebenfalls eine ganze Zahl ist, nennt man perfekt. Für jedes $m ≥ 1$ sei $P(m)$ der Anteil solcher Partitionen, die mit $k ≤ m$ perfekt sind.

Somit ist $P(6) = \frac{1}{2}$.

In der folgenden Tabelle sind einige Werte von $P(m)$ aufgeführt

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

Finde die kleinste $m$, für die $P(m) &lt; \frac{1}{12\,345}$

# --hints--

`integerPartitionEquations()` sollte `44043947822` zurückgeben.

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
