---
id: 5900f3b61000cf542c50fec8
title: '問題 73: 範囲内にある分数を数え上げる'
challengeType: 1
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

`n` と `d` を正の整数として、分数 $\frac{n}{d}$ を考えます。 `n` &lt; `d` かつ最大公約数 ${HCF}(n, d) = 1$ である場合、この分数は既約真分数と呼ばれます。

`d` ≤ 8 のとき、既約真分数を大きさに基づいて昇順で並べると次のようになります。

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

$\frac{1}{3}$ と $\frac{1}{2}$ の間に分数が `3` つあることが分かります。

`d` ≤ `limit` のとき、ソートされた既約真分数の集合において $\frac{1}{3}$ と $\frac{1}{2}$ の間に分数がいくつありますか。

# --hints--

`countingFractionsInARange(8)` は数値を返す必要があります。

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` は `3` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` は `50695` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` は `1823861` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` は `7295372` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
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
        const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSquaredIndex; j < upper; j += prime) {
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
const primeSeive = new PrimeSeive(12001);

function countingFractionsInARange(num) {
  const moebius = Array(num + 1).fill(1)

  // Generate Moebis function terms
  for (let i = 2; i <= num; i++) {
    if (!primeSeive.isPrime(i)) continue;
    for (let j = i; j <= num; j += i) moebius[j] *= -1;
    for (let j = i * i; j <= num; j += i * i) moebius[j] = 0;
  }
  // Evaluate totient sum
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    const coeff = Math.floor(num / i - 2);
    sum += moebius[i] * Math.floor(coeff * coeff / 12 + 0.5);
  }
  return sum;
}
```
