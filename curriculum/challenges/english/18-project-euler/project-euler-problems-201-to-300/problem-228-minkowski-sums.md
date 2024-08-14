---
id: 5900f4511000cf542c50ff63
title: 'Problem 228: Minkowski Sums'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

Let $S_n$ be the regular $n$-sided polygon – or shape – whose vertices $v_k (k = 1, 2, \ldots, n)$ have coordinates:

$$\begin{align}
  & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°)
\end{align}$$

Each $S_n$ is to be interpreted as a filled shape consisting of all points on the perimeter and in the interior.

The Minkowski sum, $S + T$, of two shapes $S$ and $T$ is the result of adding every point in $S$ to every point in $T$, where point addition is performed coordinate-wise: $(u, v) + (x, y) = (u + x, v + y)$.

For example, the sum of $S_3$ and $S_4$ is the six-sided shape shown in pink below:

<img alt="image showing S_3, S_4 and S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

How many sides does $S_{1864} + S_{1865} + \ldots + S_{1909}$ have?

# --hints--

`minkowskiSums()` should return `86226`.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
