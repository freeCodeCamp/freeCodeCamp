---
id: 5900f4481000cf542c50ff5a
title: 'Problem 219: Skew-cost coding'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

Let $A$ and $B$ be bit strings (sequences of 0's and 1's).

If $A$ is equal to the <u>left</u>most length($A$) bits of $B$, then $A$ is said to be a prefix of $B$.

For example, 00110 is a prefix of <u>00110</u>1001, but not of 00111 or 100110.

A prefix-free code of size $n$ is a collection of $n$ distinct bit strings such that no string is a prefix of any other. For example, this is a prefix-free code of size 6:

$$0000, 0001, 001, 01, 10, 11$$

Now suppose that it costs one penny to transmit a '0' bit, but four pence to transmit a '1'. Then the total cost of the prefix-free code shown above is 35 pence, which happens to be the cheapest possible for the skewed pricing scheme in question. In short, we write $Cost(6) = 35$.

What is $Cost(10^9)$?

# --hints--

`skewCostCoding()` should return `64564225042`.

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function skewCostCoding() {

  return true;
}

skewCostCoding();
```

# --solutions--

```js
// solution required
```
