---
id: 5900f5061000cf542c510017
title: 'Problem 409: Nim Extreme'
challengeType: 1
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

Let $n$ be a positive integer. Consider nim positions where:

- There are $n$ non-empty piles.
- Each pile has size less than $2^n$.
- No two piles have the same size.

Let $W(n)$ be the number of winning nim positions satisfying the above conditions (a position is winning if the first player has a winning strategy).

For example, $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$ and $W(100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$.

Find $W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`nimExtreme()` should return `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```
