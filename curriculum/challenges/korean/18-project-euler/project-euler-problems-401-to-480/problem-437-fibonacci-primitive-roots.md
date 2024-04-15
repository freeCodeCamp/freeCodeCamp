---
id: 5900f5241000cf542c510036
title: 'Problem 437: Fibonacci primitive roots'
challengeType: 1
forumTopicId: 302108
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

When we calculate $8^n$ modulo 11 for $n = 0$ to 9 we get: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7.

As we see all possible values from 1 to 10 occur. So 8 is a primitive root of 11.

But there is more:

If we take a closer look we see:

$$\begin{align}   & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\   & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\   & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\   & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\ & 5 + 7 = 12 ≡ 1\bmod 11. \end{align}$$

So the powers of 8 mod 11 are cyclic with period 10, and $8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$. 8 is called a Fibonacci primitive root of 11.

Not every prime has a Fibonacci primitive root. There are 323 primes less than 10000 with one or more Fibonacci primitive roots and the sum of these primes is 1480491.

Find the sum of the primes less than $100\\,000\\,000$ with at least one Fibonacci primitive root.

# --hints--

`fibonacciPrimitiveRoots()` should return `74204709657207`.

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function fibonacciPrimitiveRoots() {

  return true;
}

fibonacciPrimitiveRoots();
```

# --solutions--

```js
// solution required
```
