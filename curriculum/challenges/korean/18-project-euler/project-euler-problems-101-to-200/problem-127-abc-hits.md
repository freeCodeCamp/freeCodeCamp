---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

The radical of $n$, $rad(n)$, is the product of distinct prime factors of $n$. For example, $504 = 2^3 × 3^2 × 7$, so $rad(504) = 2 × 3 × 7 = 42$.

We shall define the triplet of positive integers (a, b, c) to be an abc-hit if:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

For example, (5, 27, 32) is an abc-hit, because:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

It turns out that abc-hits are quite rare and there are only thirty-one abc-hits for $c &lt; 1000$, with $\sum{c} = 12523$.

Find $\sum{c}$ for $c &lt; 120000$.

# --hints--

`abcHits()` should return `18407904`.

```js
assert.strictEqual(abcHits(), 18407904);
```

# --seed--

## --seed-contents--

```js
function abcHits() {

  return true;
}

abcHits();
```

# --solutions--

```js
// solution required
```
