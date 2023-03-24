---
id: 5900f53e1000cf542c510051
title: 'Problem 466: Distinct terms in a multiplication table'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

Let $P(m,n)$ be the number of distinct terms in an $m×n$ multiplication table.

For example, a 3×4 multiplication table looks like this:

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

There are 8 distinct terms {1, 2, 3, 4, 6, 8, 9, 12}, therefore $P(3, 4) = 8$.

You are given that:

$$\begin{align}   & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\   & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

Find $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` should return `258381958195474750`.

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
