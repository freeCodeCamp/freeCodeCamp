---
id: 5900f39f1000cf542c50feb2
title: '問題 51: 素数の桁置換'
challengeType: 1
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

2 桁の数 \*3 の 1 桁目を置き換えることで、あり得る 9 つの値のうち 6 つ (13, 23, 43, 53, 73, 83) がすべて素数であることが分かります。

56\*\*3 の 3 桁目と 4 桁目を同一の数字に置き換えると、この 5 桁の数は、得られる 10 個の数字のうち 7 つが素数である最初の例であり、56003, 56113, 56333, 56443, 56663, 56773, 56993 からなる族を形成します。 したがって、この族の 1 つ目である 56003 は、この性質を持つ最小の素数です。

数の一部 (隣り合う桁でなくても良い) を同一の数字に置き換えると `n` 個の素数値の族に属するような素数のうち、最小のものを求めなさい。

# --hints--

`primeDigitReplacements(6)` は数値を返す必要があります。

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` は `13` を返す必要があります。

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` は `56003` を返す必要があります。

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` は `121313` を返す必要があります。

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
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

function primeDigitReplacements(n) {
  const primeSeive = new PrimeSeive(n * n * n * 2000);

  function isNFamily(number, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return doesReplacingMakeFamily(prime, '0', n) ||
      doesReplacingMakeFamily(prime, '2', n) ||
      (lastDigit !== '1' && doesReplacingMakeFamily(prime, '1', n));
  }

  function doesReplacingMakeFamily(prime, digitToReplace, family) {
    let miss = 0;
    const base = parseInt(
      prime
        .split('')
        .map(digit => digit == digitToReplace ? '0' : digit)
        .join('')
    );
    const replacements = parseInt(
      prime
        .split('')
        .map(digit => digit === digitToReplace ? '1' : '0')
        .join('')
    );
    const start = prime[0] === digitToReplace ? 1 : 0;
    for (let i = start; i < 10; i++) {
      const nextNumber = base + i * replacements;
      if (!isPartOfFamily(nextNumber, prime)) miss++;
      if (10 - start - miss < family) break;
    }
    return 10 - start - miss === family;
  }

  function isPartOfFamily(number, prime) {
    return (
      primeSeive.isPrime(number) && number.toString().length === prime.length
    );
  }

  for (let number = 1; number < 125000; number++) {
    if (primeSeive.isPrime(number) && isNFamily(number, n)) {
      return number;
    }
  }
  return -1;
}
```
