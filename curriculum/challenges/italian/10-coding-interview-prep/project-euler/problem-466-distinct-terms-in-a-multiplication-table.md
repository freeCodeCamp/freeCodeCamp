---
id: 5900f53e1000cf542c510051
title: 'Problema 466: termini distinti in una tabella di moltiplicazione'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

Sia $P(m,n)$ il numero di termini distinti in una tabella di moltiplicazione $m×n$.

Ad esempio, una tabella di moltiplicazione 3×4 assomiglia a questa:

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

Ci sono 8 termini distinti {1, 2, 3, 4, 6, 8, 9, 12}, quindi $P(3, 4) = 8$.

Ti è dato che:

$$\begin{align}   & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\   & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

Trova $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` dovrebbe restituire `258381958195474750`.

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
