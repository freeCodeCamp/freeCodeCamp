---
id: 5900f4f11000cf542c510003
title: 'Problem 387: Harshad Numbers'
challengeType: 1
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

A Harshad or Niven number is a number that is divisible by the sum of its digits.

201 is a Harshad number because it is divisible by 3 (the sum of its digits.)

When we truncate the last digit from 201, we get 20, which is a Harshad number.

When we truncate the last digit from 20, we get 2, which is also a Harshad number.

Let's call a Harshad number that, while recursively truncating the last digit, always results in a Harshad number a right truncatable Harshad number.

Also:

$\frac{201}{3} = 67$ which is prime.

Let's call a Harshad number that, when divided by the sum of its digits, results in a prime a strong Harshad number.

Now take the number 2011 which is prime. When we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable. Let's call such primes strong, right truncatable Harshad primes.

You are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.

Find the sum of the strong, right truncatable Harshad primes less than ${10}^{14}$.

# --hints--

`harshadNumbers()` should return `696067597313468`.

```js
assert.strictEqual(harshadNumbers(), 696067597313468);
```

# --seed--

## --seed-contents--

```js
function harshadNumbers() {

  return true;
}

harshadNumbers();
```

# --solutions--

```js
// solution required
```
