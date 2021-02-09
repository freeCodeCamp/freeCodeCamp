---
id: 5900f5151000cf542c510028
title: 'Problem 425: Prime connection'
challengeType: 5
forumTopicId: 302095
dashedName: problem-425-prime-connection
---

# --description--

Two positive numbers A and B are said to be connected (denoted by "A ↔ B") if one of these conditions holds:

(1) A and B have the same length and differ in exactly one digit; for example, 123 ↔ 173.

(2) Adding one digit to the left of A (or B) makes B (or A); for example, 23 ↔ 223 and 123 ↔ 23.

We call a prime P a 2's relative if there exists a chain of connected primes between 2 and P and no prime in the chain exceeds P.

For example, 127 is a 2's relative. One of the possible chains is shown below: 2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127 However, 11 and 103 are not 2's relatives.

Let F(N) be the sum of the primes ≤ N which are not 2's relatives. We can verify that F(103) = 431 and F(104) = 78728.

Find F(107).

# --hints--

`euler425()` should return 46479497324.

```js
assert.strictEqual(euler425(), 46479497324);
```

# --seed--

## --seed-contents--

```js
function euler425() {

  return true;
}

euler425();
```

# --solutions--

```js
// solution required
```
