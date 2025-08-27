---
id: 5900f5041000cf542c510016
title: 'Problem 407: Idempotents'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

If we calculate $a^2\bmod 6$ for $0 ≤ a ≤ 5$ we get: 0, 1, 4, 3, 4, 1.

The largest value of a such that $a^2 ≡ a\bmod 6$ is $4$.

Let's call $M(n)$ the largest value of $a &lt; n$ such that $a^2 ≡ a (\text{mod } n)$. So $M(6) = 4$.

Find $\sum M(n)$ for $1 ≤ n ≤ {10}^7$.

# --hints--

`idempotents()` should return `39782849136421`.

```js
assert.strictEqual(idempotents(), 39782849136421);
```

# --seed--

## --seed-contents--

```js
function idempotents() {

  return true;
}

idempotents();
```

# --solutions--

```js
// solution required
```
