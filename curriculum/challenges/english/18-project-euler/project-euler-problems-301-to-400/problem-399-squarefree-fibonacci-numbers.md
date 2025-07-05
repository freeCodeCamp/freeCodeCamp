---
id: 5900f4fc1000cf542c51000e
title: 'Problem 399: Squarefree Fibonacci Numbers'
challengeType: 1
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

The first 15 fibonacci numbers are:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

It can be seen that 8 and 144 are not squarefree: 8 is divisible by 4 and 144 is divisible by 4 and by 9.

So the first 13 squarefree fibonacci numbers are:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ and } 610.$$

The $200$th squarefree fibonacci number is: 971183874599339129547649988289594072811608739584170445. The last sixteen digits of this number are: 1608739584170445 and in scientific notation this number can be written as `9.7e53`.

Find the $100\\,000\\,000$th squarefree fibonacci number. Give as your answer as a string with its last sixteen digits followed by a comma followed by the number in scientific notation (rounded to one digit after the decimal point). For the $200$th squarefree number the answer would have been: `1608739584170445,9.7e53`

**Note:** For this problem, assume that for every prime $p$, the first fibonacci number divisible by $p$ is not divisible by $p^2$ (this is part of Wall's conjecture). This has been verified for primes $≤ 3 \times {10}^{15}$, but has not been proven in general.

If it happens that the conjecture is false, then the accepted answer to this problem isn't guaranteed to be the $100\\,000\\,000$th squarefree fibonacci number, rather it represents only a lower bound for that number.

# --hints--

`squarefreeFibonacciNumbers()` should return a string.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` should return the string `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

# --seed--

## --seed-contents--

```js
function squarefreeFibonacciNumbers() {

  return true;
}

squarefreeFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
