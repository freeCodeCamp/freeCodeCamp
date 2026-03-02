---
id: 5900f4a51000cf542c50ffb7
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- A Sierpiński graph of order-1 ($S_1$) is an equilateral triangle.
- $S_{n + 1}$ is obtained from $S_n$ by positioning three copies of $S_n$ so that every pair of copies has one common corner.

<img alt="Sierpinski graphs of order-1 to order-5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

Let $C(n)$ be the number of cycles that pass exactly once through all the vertices of $S_n$. For example, $C(3) = 8$ because eight such cycles can be drawn on $S_3$, as shown below:

<img alt="eight cycles that pass exactly once through all vertices of S_3" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

It can also be verified that:

$$\begin{align}
  & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\
  & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\
\end{align}$$

Find $C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` should return `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```
