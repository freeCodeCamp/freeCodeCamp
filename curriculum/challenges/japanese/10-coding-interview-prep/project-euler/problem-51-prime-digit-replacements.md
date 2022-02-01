---
id: 5900f39f1000cf542c50feb2
title: '問題 51: 素数の桁置換'
challengeType: 5
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
function primeDigitReplacements(n) {
  function isNFamily(number, primesMap, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return (
      doesReplacingMakeFamily(prime, '0', primesMap, n) ||
      (lastDigit !== '1' &&
        doesReplacingMakeFamily(prime, '1', primesMap, n)) ||
      doesReplacingMakeFamily(prime, '2', primesMap, n)
    );
  }

  function doesReplacingMakeFamily(prime, digitToReplace, primesMap, family) {
    let count = 0;
    const replaceWith = '0123456789';

    for (let i = 0; i < replaceWith.length; i++) {
      const nextNumber = parseInt(
        prime.replace(new RegExp(digitToReplace, 'g'), replaceWith[i]),
        10
      );

      if (isPartOfFamily(nextNumber, prime, primesMap)) {
        count++;
      }
    }
    return count === family;
  }

  function isPartOfFamily(number, prime, primesMap) {
    return (
      isPrime(number, primesMap) && number.toString().length === prime.length
    );
  }

  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i++) {
      if (primesMap[i]) {
        let j = i * i;
        for (j; j < max; j += i) {
          primesMap[j] = false;
        }
      }
    }
    return primesMap;
  }

  function isPrime(num, primesMap) {
    return primesMap[num];
  }

  const primesMap = getSievePrimes(1000000);

  for (let number = 1; number < 300000; number++) {
    if (primesMap[number]) {
      if (isNFamily(number, primesMap, n)) {
        return number;
      }
    }
  }
  return -1;
}
```
