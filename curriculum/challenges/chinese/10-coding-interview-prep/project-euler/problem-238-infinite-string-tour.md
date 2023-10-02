---
id: 5900f45b1000cf542c50ff6d
title: 'Problem 238: Infinite string tour'
challengeType: 1
forumTopicId: 301883
dashedName: problem-238-infinite-string-tour
---

# --description--

Create a sequence of numbers using the "Blum Blum Shub" pseudo-random number generator:

$$ s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20\\,300\\,713 $$

Concatenate these numbers $s_0s_1s_2\ldots$ to create a string $w$ of infinite length. Then, $w = 14025256741014958470038053646\ldots$

For a positive integer $k$, if no substring of $w$ exists with a sum of digits equal to $k$, $p(k)$ is defined to be zero. If at least one substring of $w$ exists with a sum of digits equal to $k$, we define $p(k) = z$, where $z$ is the starting position of the earliest such substring.

例如：

The substrings 1, 14, 1402, … with respective sums of digits equal to 1, 5, 7, … start at position 1, hence $p(1) = p(5) = p(7) = \ldots = 1$.

The substrings 4, 402, 4025, … with respective sums of digits equal to 4, 6, 11, … start at position 2, hence $p(4) = p(6) = p(11) = \ldots = 2$.

The substrings 02, 0252, … with respective sums of digits equal to 2, 9, … start at position 3, hence $p(2) = p(9) = \ldots = 3$.

Note that substring 025 starting at position 3, has a sum of digits equal to 7, but there was an earlier substring (starting at position 1) with a sum of digits equal to 7, so $p(7) = 1$, not 3.

We can verify that, for $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$.

Find $\sum p(k)$, for $0 &lt; k ≤ 2 \times {10}^{15}$.

# --hints--

`infiniteStringTour()` should return `9922545104535660`.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

# --seed--

## --seed-contents--

```js
function infiniteStringTour() {

  return true;
}

infiniteStringTour();
```

# --solutions--

```js
// solution required
```
