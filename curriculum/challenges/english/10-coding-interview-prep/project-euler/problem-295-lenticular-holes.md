---
id: 5900f4931000cf542c50ffa6
title: 'Problem 295: Lenticular holes'
challengeType: 1
forumTopicId: 301947
dashedName: problem-295-lenticular-holes
---

# --description--

We call the convex area enclosed by two circles a lenticular hole if:

- The centres of both circles are on lattice points.
- The two circles intersect at two distinct lattice points.
- The interior of the convex area enclosed by both circles does not contain any lattice points.

Consider the circles:

$$\begin{align}
  & C_0: x^2 + y^2 = 25 \\\\
  & C_1: {(x + 4)}^2 + {(y - 4)}^2 = 1 \\\\
  & C_2: {(x - 12)}^2 + {(y - 4)}^2 = 65
\end{align}$$

The circles $C_0$, $C_1$ and $C_2$ are drawn in the picture below.

<img class="img-responsive center-block" alt="C_0, C_1 and C_2 circles" src="https://cdn.freecodecamp.org/curriculum/project-euler/lenticular-holes.gif" style="background-color: white; padding: 10px;">

$C_0$ and $C_1$ form a lenticular hole, as well as $C_0$ and $C_2$.

We call an ordered pair of positive real numbers ($r_1$, $r_2$) a lenticular pair if there exist two circles with radii $r_1$ and $r_2$ that form a lenticular hole. We can verify that ($1$, $5$) and ($5$, $\sqrt{65}$) are the lenticular pairs of the example above.

Let $L(N)$ be the number of distinct lenticular pairs ($r_1$, $r_2$) for which $0 &lt; r_1 ≤ r_2 ≤ N$. We can verify that $L(10) = 30$ and $L(100) = 3442$.

Find $L(100\\,000)$.

# --hints--

`lenticularHoles()` should return `4884650818`.

```js
assert.strictEqual(lenticularHoles(), 4884650818);
```

# --seed--

## --seed-contents--

```js
function lenticularHoles() {

  return true;
}

lenticularHoles();
```

# --solutions--

```js
// solution required
```
