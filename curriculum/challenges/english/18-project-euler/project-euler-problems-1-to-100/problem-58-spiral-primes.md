---
id: 5900f3a61000cf542c50feb9
title: 'Problem 58: Spiral primes'
challengeType: 1
forumTopicId: 302169
dashedName: problem-58-spiral-primes
---

# --description--

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

<div style='text-align: center;'>
  <strong><span style='color: red;'>37</span></strong> 36 35 34 33 32 <strong><span style='color: red;'>31</span></strong><br>
  38 <strong><span style='color: red;'>17</span></strong> 16 15 14 <strong><span style='color: red;'>13</span></strong> 30<br>
  39 18  <strong><span style='color: red;'>5</span></strong>  4  <strong><span style='color: red;'>3</span></strong> 12 29<br>
  40 19  6  1  2 11 28<br>
  41 20  <strong><span style='color: red;'>7</span></strong>  8  9 10 27<br>
  42 21 22 23 24 25 26<br>
  <strong><span style='color: red;'>43</span></strong> 44 45 46 47 48 49<br>
</div>

It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the percent of primes along both diagonals first falls below `percent`?

# --hints--

`spiralPrimes(50)` should return a number.

```js
assert(typeof spiralPrimes(50) === 'number');
```

`spiralPrimes(50)` should return `11`.

```js
assert.strictEqual(spiralPrimes(50), 11);
```

`spiralPrimes(15)` should return `981`.

```js
assert.strictEqual(spiralPrimes(15), 981);
```

`spiralPrimes(10)` should return `26241`.

```js
assert.strictEqual(spiralPrimes(10), 26241);
```

# --seed--

## --seed-contents--

```js
function spiralPrimes(percent) {

  return true;
}

spiralPrimes(50);
```

# --solutions--

```js
function spiralPrimes(percent) {
  function isPrime(n) {
    if (n <= 3) {
      return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  let totalCount = 1;
  let primesCount = 0;
  let curNumber = 1;
  let curSideLength = 1;
  let ratio = 1;
  const wantedRatio = percent / 100;

  while (ratio >= wantedRatio) {
    curSideLength += 2;
    for (let i = 0; i < 4; i++) {
      curNumber += curSideLength - 1;
      totalCount++;
      if (i !== 3 && isPrime(curNumber)) {
        primesCount++;
      }
    }
    ratio = primesCount / totalCount;
  }
  return curSideLength;
}
```
