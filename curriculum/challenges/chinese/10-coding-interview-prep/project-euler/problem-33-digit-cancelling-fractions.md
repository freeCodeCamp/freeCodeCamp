---
id: 5900f38d1000cf542c50fea0
title: 问题33：数字取消分数
challengeType: 5
videoUrl: ''
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

分数<sup><sub>九十八分之四十九</sub></sup>是好奇馏分，如在试图简化它可能会错误地认为<sup><sub>九十八分之四十九</sub></sup> = <sup><sub>4/8，</sub></sup>这是正确的，则通过取消787-9获得一个没有经验的数学家。我们应考虑馏分喜欢， <sup><sub>五十○分之三十○=</sub></sup> <sup><sub>3/5，</sub></sup>是微不足道的例子。这种类型的分数恰好有四个非平凡的例子，小于一个值，并且在分子和分母中包含两个数字。如果这四个分数的乘积以其最低公共项给出，请找到分母的值。

# --hints--

`digitCancellingFractions()`应该返回100。

```js
assert.strictEqual(digitCancellingFractions(), 100);
```

# --seed--

## --seed-contents--

```js
function digitCancellingFractions() {

  return true;
}

digitCancellingFractions();
```

# --solutions--

```js
function digitCancellingFractions() {
  function isCurious(numerator, denominator) {
    const fraction = numerator / denominator;
    const numString = numerator.toString();
    const denString = denominator.toString();

    if (numString[1] === '0' && denString[1] === '0') {
      // trivial
      return false;
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (numString[i] === denString[j]) {
          const newNum = parseInt(numString[1 - i], 10);
          const newDen = parseInt(denString[1 - j], 10);
          if (newNum / newDen === fraction) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function findLargestDivisor(a, b) {
    let gcd = a > b ? b : a;
    while (gcd > 1) {
      if (a % gcd === 0 && b % gcd === 0) {
        return gcd;
      }
      gcd--;
    }
    return gcd;
  }

  function simplifyFraction(numerator, denominator) {
    const divisor = findLargestDivisor(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
  }

  let multipleNumerator = 1;
  let multipleDenominator = 1;

  for (let denominator = 11; denominator < 100; denominator++) {
    for (let numerator = 10; numerator < denominator; numerator++) {
      if (isCurious(numerator, denominator)) {
        multipleNumerator *= numerator;
        multipleDenominator *= denominator;
      }
    }
  }

  return simplifyFraction(multipleNumerator, multipleDenominator)[1];
}
```
