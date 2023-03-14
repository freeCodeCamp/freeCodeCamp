---
id: 5900f53e1000cf542c510051
title: 'Problem 466: Verschiedene Begriffe in einer Multiplikationstabelle'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

Lass $P(m,n)$ die Anzahl der verschiedenen Begriffe in einer $m×n$ Multiplikationstabelle sein.

Zum Beispiel sieht eine 3×4 Multiplikationstabelle so aus:

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

Es gibt 8 verschiedene Begriffe {1, 2, 3, 4, 6, 8, 9, 12}, also $P(3, 4) = 8$.

Dir wird gegeben, dass:

$$\begin{align}   & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\   & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

Finde $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` sollte `258381958195474750` zurückgeben.

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

# --seed--

## --seed-contents--

```js
function multiplicationTable() {

  return true;
}

multiplicationTable();
```

# --solutions--

```js
// solution required
```
