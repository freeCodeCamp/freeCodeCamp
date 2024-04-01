---
id: 5900f3a41000cf542c50feb7
title: 'Problem 56: Mächtige Quersumme'
challengeType: 1
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

Ein Googol ($10^{100}$) ist eine riesige Zahl: eine Eins, gefolgt von einhundert Nullen; $100^{100}$ ist unvorstellbar groß: eine Eins, gefolgt von zweihundert Nullen. Trotz ihrer Größe ist die Summe der Ziffern in jeder Zahl nur 1.

Considering natural numbers of the form, $a^b$, where `a`, `b` &lt; `n`, what is the maximum digital sum?

# --hints--

`powerfulDigitSum(3)` sollte eine Zahl zurückgeben.

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` sollte `4` zurückgeben.

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` sollte `45` zurückgeben.

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` sollte `406` zurückgeben.

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` sollte `684` zurückgeben.

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` sollte `972` zurückgeben.

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
