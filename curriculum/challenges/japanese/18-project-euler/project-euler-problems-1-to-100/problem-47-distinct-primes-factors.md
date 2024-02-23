---
id: 5900f39c1000cf542c50feae
title: '問題 47: 相異なる素因数'
challengeType: 1
forumTopicId: 302145
dashedName: problem-47-distinct-primes-factors
---

# --description--

相異なる 2 つの素因数を持つ 2 つの連続する数のうち、最小のものは次のとおりです。

<div style='padding-left: 4em;'>
  14 = 2 × 7<br>
  15 = 3 × 5
</div>

相異なる 3 つの素因数を持つ 3 つの連続する数のうち、最小のものは次のとおりです。

<div style='padding-left: 4em;'>
  644 = 2<sup>2</sup> × 7 × 23<br>
  645 = 3 × 5 × 43<br>
  646 = 2 × 17 × 19
</div>

それぞれ 4 つの相異なる素因数を持つ 4 つの連続する整数のうち、最小のものを求めなさい。 それらの数の 1 つ目は何ですか。

# --hints--

`distinctPrimeFactors(2, 2)` は数値を返します。

```js
assert(typeof distinctPrimeFactors(2, 2) === 'number');
```

`distinctPrimeFactors(2, 2)` は 14 を返す必要があります。

```js
assert.strictEqual(distinctPrimeFactors(2, 2), 14);
```

`distinctPrimeFactors(3, 3)` は 644 を返す必要があります。

```js
assert.strictEqual(distinctPrimeFactors(3, 3), 644);
```

`distinctPrimeFactors(4, 4)` は 134043 を返す必要があります。

```js
assert.strictEqual(distinctPrimeFactors(4, 4), 134043);
```

# --seed--

## --seed-contents--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {

  return true;
}

distinctPrimeFactors(4, 4);
```

# --solutions--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  const primeLimit = targetNumPrimes * targetConsecutive * 10000;
  const numFactors = Array(primeLimit).fill(0);

  let numConsecutive = 0;
  for (let i = 2; i < primeLimit; i++) {
    if (numFactors[i] === targetNumPrimes) {
      // Current number is composite with target num factors
      numConsecutive++;
      if (numConsecutive === targetConsecutive) {
        return i - numConsecutive + 1;
      }
    } else {
      // Current number is not matching composite
      numConsecutive = 0;
      if (numFactors[i] === 0) {
        // Current number is prime
        for (let j = i; j < primeLimit; j += i) {
          numFactors[j]++;
        }
      }
    }
  }
}
```
