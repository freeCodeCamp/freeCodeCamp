---
id: 5900f49d1000cf542c50ffb0
title: 'Problem 305: Reflexive Position'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Let's call $S$ the (infinite) string that is made by concatenating the consecutive positive integers (starting from 1) written down in base 10.

Thus, $S = 1234567891011121314151617181920212223242\ldots$

It's easy to see that any number will show up an infinite number of times in $S$.

Let's call $f(n)$ the starting position of the $n^{\text{th}}$ occurrence of $n$ in $S$. For example, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ and $f(7780) = 111\\,111\\,365$.

Find $\sum f(3^k) for 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` should return `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
