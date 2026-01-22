---
id: 5900f4451000cf542c50ff57
title: 'Problem 216: Investigating the primality of numbers of the form 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Consider numbers $t(n)$ of the form $t(n) = 2n^2 - 1$ with $n > 1$.

The first such numbers are 7, 17, 31, 49, 71, 97, 127 and 161.

It turns out that only $49 = 7 \times 7$ and $161 = 7 \times 23$ are not prime.

For $n ≤ 10000$ there are 2202 numbers $t(n)$ that are prime.

How many numbers $t(n)$ are prime for $n ≤ 50\\,000\\,000$?

# --hints--

`primalityOfNumbers()` should return `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```
