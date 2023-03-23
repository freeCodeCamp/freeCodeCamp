---
id: 5900f5081000cf542c510019
title: 'Problem 411: Uphill paths'
challengeType: 1
forumTopicId: 302080
dashedName: problem-411-uphill-paths
---

# --description--

Let $n$ be a positive integer. Suppose there are stations at the coordinates $(x, y) = (2^i\bmod n, 3^i\bmod n)$ for $0 ≤ i ≤ 2n$. We will consider stations with the same coordinates as the same station.

We wish to form a path from (0, 0) to ($n$, $n$) such that the $x$ and $y$ coordinates never decrease.

Let $S(n)$ be the maximum number of stations such a path can pass through.

For example, if $n = 22$, there are 11 distinct stations, and a valid path can pass through at most 5 stations. Therefore, $S(22) = 5$. The case is illustrated below, with an example of an optimal path:

<img class="img-responsive center-block" alt="valid path passing through 5 stations, for n = 22, with 11 distinct stations" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;">

It can also be verified that $S(123) = 14$ and $S(10\\,000) = 48$.

Find $\sum S(k^5)$ for $1 ≤ k ≤ 30$.

# --hints--

`uphillPaths()` should return `9936352`.

```js
assert.strictEqual(uphillPaths(), 9936352);
```

# --seed--

## --seed-contents--

```js
function uphillPaths() {

  return true;
}

uphillPaths();
```

# --solutions--

```js
// solution required
```
