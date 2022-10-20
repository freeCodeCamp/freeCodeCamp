---
id: a3bfc1673c0526e06d3ac698
title: جمع كل الأعداد الأولية (Sum All Primes)
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

الـ <dfn>prime number</dfn> هو رقم صحيح أكبر من 1 يقبل القسمة علي رقمين بالضبط: 1 و نفسه. فعلى سبيل المثال، 2 هو prime number لأنه لا يمكن قسمته إلا علي 1 و 2. وعلى النقيض من ذلك، فإن 4 ليس prime number لأنه قابل للقسمة علي 1 و 2 و 4.

أعد كتابة `sumPrimes` حتى يرجع مجموع جميع الـ prime numbers التي هي أقل من أو تساوي num.

# --hints--

`sumPrimes(10)` يجب أن يعيد رقم.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` يجب أن يرجع 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` يجب أن يرجع 73156.

```js
assert.deepEqual(sumPrimes(977), 73156);
```

# --seed--

## --seed-contents--

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

# --solutions--

```js
class PrimeSeive {
  constructor(num) {
    const seive = Array(Math.floor((num - 1) / 2)).fill(true);
    const upper = Math.floor((num - 1) / 2);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);

    for (let i = 0; i <= sqrtUpper; i++) {
      if (seive[i]) {
        // Mark value in seive array
        const prime = 2 * i + 3;
        // Mark all multiples of this number as false (not prime)
        const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSqaredIndex; j < upper; j += prime) {
          seive[j] = false;
        }
      }
    }

    this._seive = seive;
  }

  isPrime(num) {
    return num === 2
      ? true
      : num % 2 === 0
        ? false
        : this.isOddPrime(num);
  }

  isOddPrime(num) {
    return this._seive[(num - 3) / 2];
  }
};

function sumPrimes(num) {
  const primeSeive = new PrimeSeive(num);

  let sum = 2;
  for (let i = 3; i <= num; i += 2) {
    if (primeSeive.isOddPrime(i)) sum += i;
  }
  return sum;
}

sumPrimes(10);
```
