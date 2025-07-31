---
id: 5900f4ea1000cf542c50fffc
title: 'Problem 381: (prime-k) factorial'
challengeType: 1
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

For a prime $p$ let $S(p) = (\sum (p - k)!)\bmod (p)$ for $1 ≤ k ≤ 5$.

For example, if $p = 7$,

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

As $872\bmod (7) = 4$, $S(7) = 4$.

It can be verified that $\sum S(p) = 480$ for $5 ≤ p &lt; 100$.

Find $\sum S(p)$ for $5 ≤ p &lt; {10}^8$.

# --hints--

`primeKFactorial()` should return `139602943319822`.

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

# --seed--

## --seed-contents--

```js
function primeKFactorial() {

  return true;
}

primeKFactorial();
```

# --solutions--

```js
// solution required
```
