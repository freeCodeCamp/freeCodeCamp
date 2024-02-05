---
id: 5900f4f11000cf542c510003
title: '問題387：Harshad數字'
challengeType: 1
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

A Harshad or Niven number is a number that is divisible by the sum of its digits.

201是一個Harshad數，因爲它可以被3整數（它的數字之和）。

當我們截斷201的最後一個數字時，我們得到20，這是一個Harshad數。

你得到的是，強度小，可截斷的Harshad素數小於10000的總和是90619。

找到小於1014的強可，可截斷的Harshad素數的總和。

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
