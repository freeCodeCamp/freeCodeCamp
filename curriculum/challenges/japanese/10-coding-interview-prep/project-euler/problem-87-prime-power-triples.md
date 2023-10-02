---
id: 5900f3c51000cf542c50fed8
title: '問題 87: 素数の累乗の三つ組'
challengeType: 1
forumTopicId: 302201
dashedName: problem-87-prime-power-triples
---

# --description--

素数の 2 乗、素数の 3 乗、および素数の 4 乗の和で表せる最小数は `28` です。 このように表せる 50 未満の数はちょうど 4 つあります。

<div style='margin-left: 4em;'>
  28 = 2<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  33 = 3<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  49 = 5<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br>
  47 = 2<sup>2</sup> + 3<sup>3</sup> + 2<sup>4</sup>
</div><br>

`n` 未満の数のうち、素数の 2 乗、素数の 3 乗、および素数の 4 乗の和で表せる数はいくつありますか。

# --hints--

`primePowerTriples(50)` は数値を返す必要があります。

```js
assert(typeof primePowerTriples(50) === 'number');
```

`primePowerTriples(50)` は `4` を返す必要があります。

```js
assert.strictEqual(primePowerTriples(50), 4);
```

`primePowerTriples(10035)` は `684` を返す必要があります。

```js
assert.strictEqual(primePowerTriples(10035), 684);
```

`primePowerTriples(500000)` は `18899` を返す必要があります。

```js
assert.strictEqual(primePowerTriples(500000), 18899);
```

`primePowerTriples(5000000)` は `138932` を返す必要があります。

```js
assert.strictEqual(primePowerTriples(5000000), 138932);
```

`primePowerTriples(50000000)` は `1097343` を返す必要があります。

```js
assert.strictEqual(primePowerTriples(50000000), 1097343);
```

# --seed--

## --seed-contents--

```js
function primePowerTriples(n) {

  return true;
}

primePowerTriples(50);
```

# --solutions--

```js
function primePowerTriples(n) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i <= max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j <= max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function getPowersSummed(numbers, powers, limit, curSum) {
    if (curSum >= limit) {
      return [];
    } else if (powers.length === 0) {
      return [curSum];
    }

    const powersSummed = [];

    const curPower = powers[0];
    const powersLeft = powers.slice(1);
    for (let i = 0; i < numbers.length; i++) {
      const curNumber = numbers[i];
      const nextSum = curSum + curNumber ** curPower;
      if (nextSum >= limit) {
        return powersSummed;
      }
      const result = getPowersSummed(
        numbers,
        powersLeft,
        limit,
        curSum + curNumber ** curPower
      );
      powersSummed.push(...result);
    }
    return powersSummed;
  }

  const maximumBaseNumber = Math.floor(Math.sqrt(n - 2 ** 3 - 2 ** 4)) + 1;
  const primes = getSievePrimes(maximumBaseNumber);
  const uniqueSums = new Set(getPowersSummed(primes, [2, 3, 4], n, 0));

  return uniqueSums.size;
}
```
