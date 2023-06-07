---
id: 5900f45f1000cf542c50ff71
title: 'Problem 242: Odd Triplets'
challengeType: 1
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

Given the set {1,2,..., $n$}, we define $f(n, k)$ as the number of its $k$-element subsets with an odd sum of elements. For example, $f(5,3) = 4$, since the set {1,2,3,4,5} has four 3-element subsets having an odd sum of elements, i.e.: {1,2,4}, {1,3,5}, {2,3,4} and {2,4,5}.

When all three values $n$, $k$ and $f(n, k)$ are odd, we say that they make an odd-triplet $[n, k, f(n, k)]$.

There are exactly five odd-triplets with $n ≤ 10$, namely: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ and $[9, 9, f(9, 9) = 1]$.

How many odd-triplets are there with $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` should return `997104142249036700`.

```js
assert.strictEqual(oddTriplets(), 997104142249036700);
```

# --seed--

## --seed-contents--

```js
function oddTriplets() {

  return true;
}

oddTriplets();
```

# --solutions--

```js
// solution required
```
