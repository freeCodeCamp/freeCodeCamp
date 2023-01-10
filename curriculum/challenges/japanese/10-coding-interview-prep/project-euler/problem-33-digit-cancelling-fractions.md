---
id: 5900f38d1000cf542c50fea0
title: '問題 33: 分数の数字を消す'
challengeType: 1
forumTopicId: 301987
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

<sup>49</sup>/<sub>98</sub>は不思議な分数です。経験の浅い数学者がこの分数を単純化しようとしたとき、<sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub> (これ自体は正しい) は 9 を消して得られるものと勘違いする可能性があるからです。

<sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub> のような分数を、自明な例と考えることにします。

この種の分数には、値が 1 未満で分子と分母が 2 桁である非自明な例が、ちょうど 4 つあります。

これらの 4 つの分数の積が約分されて与えられている場合に、分母の値を求めなさい。

# --hints--

`digitCancellingFractions()` は数値を返す必要があります。

```js
assert(typeof digitCancellingFractions() === 'number');
```

`digitCancellingFractions()` は 100 を返す必要があります。

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
