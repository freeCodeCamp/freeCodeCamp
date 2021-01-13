---
id: 5900f39a1000cf542c50fead
title: 问题46：哥德巴赫的另一个猜想
challengeType: 5
videoUrl: ''
dashedName: problem-46-goldbachs-other-conjecture
---

# --description--

由Christian Goldbach提出，每个奇数的复合数可以写成素数和两个平方的总和。 9 = 7 + 2×1 <sup>2</sup> 15 = 7 + 2×2 <sup>2</sup> 21 = 3 + 2×3 <sup>2</sup> 25 = 7 + 2×3 <sup>2</sup> 27 = 19 + 2×2 <sup>2</sup> 33 = 31 + 2×1 <sup>2</sup>转这个猜想是假的。什么是最小的奇数复合，不能写为素数和两倍平方的总和？

# --hints--

`goldbachsOtherConjecture()`应返回5777。

```js
assert.strictEqual(goldbachsOtherConjecture(), 5777);
```

# --seed--

## --seed-contents--

```js
function goldbachsOtherConjecture() {

  return true;
}

goldbachsOtherConjecture();
```

# --solutions--

```js
function goldbachsOtherConjecture() {  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  // construct a list of prime numbers
  const primes = [];
  for (let i = 2; primes.length < 1000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let num = 3;
  let answer;
  while (!answer) {
    num += 2;
    if (!isPrime(num)) {
      let found = false;
      for (let primeI = 0; primeI < primes.length && !found; primeI++) {
        const square = (num - primes[primeI]) / 2;
        if (isSquare(square)) {
          found = true;
          break;
        }
      }
      if (!found) answer = num;
    }
  }
  return answer;
}
```
