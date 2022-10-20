---
id: 5900f40c1000cf542c50ff1e
title: 'Problem 159: Digital root sums of factorisations'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

A composite number can be factored many different ways.

For instance, not including multiplication by one, 24 can be factored in 7 distinct ways:

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

Recall that the digital root of a number, in base 10, is found by adding together the digits of that number, and repeating that process until a number arrives at less than 10. Thus the digital root of 467 is 8.

We shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number. The chart below demonstrates all of the DRS values for 24.

| Factorisation | Digital Root Sum |
| ------------- | ---------------- |
| 2x2x2x3       | 9                |
| 2x3x4         | 9                |
| 2x2x6         | 10               |
| 4x6           | 10               |
| 3x8           | 11               |
| 2x12          | 5                |
| 24            | 6                |

The maximum Digital Root Sum of 24 is 11. The function $mdrs(n)$ gives the maximum Digital Root Sum of $n$. So $mdrs(24) = 11$.

Find $\sum{mdrs(n)}$ for $1 &lt; n &lt; 1,000,000$.

# --hints--

`euler159()` should return `14489159`.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
