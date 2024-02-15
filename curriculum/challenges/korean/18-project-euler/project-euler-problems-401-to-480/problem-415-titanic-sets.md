---
id: 5900f50c1000cf542c51001e
title: 'Problem 415: Titanic sets'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

A set of lattice points $S$ is called a titanic set if there exists a line passing through exactly two points in $S$.

An example of a titanic set is $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$, where the line passing through (0, 1) and (2, 0) does not pass through any other point in $S$.

On the other hand, the set {(0, 0), (1, 1), (2, 2), (4, 4)} is not a titanic set since the line passing through any two points in the set also passes through the other two.

For any positive integer $N$, let $T(N)$ be the number of titanic sets $S$ whose every point ($x$, $y$) satisfies $0 ≤ x$, $y ≤ N$. It can be verified that $T(1) = 11$, $T(2) = 494$, $T(4) = 33\\,554\\,178$, $T(111)\bmod {10}^8 = 13\\,500\\,401$ and $T({10}^5)\bmod {10}^8 = 63\\,259\\,062$.

Find $T({10}^{11})\bmod {10}^8$.

# --hints--

`titanicSets()` should return `55859742`.

```js
assert.strictEqual(titanicSets(), 55859742);
```

# --seed--

## --seed-contents--

```js
function titanicSets() {

  return true;
}

titanicSets();
```

# --solutions--

```js
// solution required
```
