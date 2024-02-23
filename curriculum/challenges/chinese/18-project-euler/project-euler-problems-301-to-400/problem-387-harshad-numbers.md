---
id: 5900f4f11000cf542c510003
title: '问题387：Harshad数字'
challengeType: 1
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

A Harshad or Niven number is a number that is divisible by the sum of its digits.

201是一个Harshad数，因为它可以被3整数（它的数字之和）。

当我们截断201的最后一个数字时，我们得到20，这是一个Harshad数。

你得到的是，强度小，可截断的Harshad素数小于10000的总和是90619。

找到小于1014的强可，可截断的Harshad素数的总和。

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
