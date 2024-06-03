---
id: 5900f3a41000cf542c50feb7
title: '問題 56: 累乗の各位の和'
challengeType: 1
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

グーゴル ($10^{100}$) は 1 の後に 0 が 100 個も続く巨大な数で、$100^{100}$は 1 の後に 0 が 200 個続く、想像を絶する大きさの数です。 その大きさにもかかわらず、どちらの数も各位の和はわずか 1 です。

`a`, `b` &lt; `n` のとき、自然数 $a^b$ の最大の各位の和を求めなさい。

# --hints--

`powerfulDigitSum(3)` は数値を返す必要があります。

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` は `4` を返す必要があります。

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` は `45` を返す必要があります。

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` は `406` を返す必要があります。

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` は `684` を返す必要があります。

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` は `972` を返す必要があります。

```js
assert.strictEqual(powerfulDigitSum(100), 972);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitSum(n) {

  return true;
}

powerfulDigitSum(3);
```

# --solutions--

```js
function powerfulDigitSum(n) {
  function sumDigitsOfPower(numA, numB) {
    let digitsSum = 0;
    let number = power(numA, numB);
    while (number > 0n) {
      const digit = number % 10n;
      digitsSum += parseInt(digit, 10);
      number = number / 10n;
    }
    return digitsSum;
  }

  function power(numA, numB) {
    let sum = 1n;
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    return sum;
  }

  const limit = n - 1;
  let maxDigitsSum = 0;
  for (let a = limit; a > 0; a--) {
    for (let b = limit; b > 0; b--) {
      const curDigitSum = sumDigitsOfPower(a, b);
      if (curDigitSum > maxDigitsSum) {
        maxDigitsSum = curDigitSum;
      }
    }
  }
  return maxDigitsSum;
}
```
