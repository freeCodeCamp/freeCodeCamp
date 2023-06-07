---
id: 5900f3ad1000cf542c50fec0
title: '問題 65: e の近似分数'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

2 の平方根は無限の連分数として表すことができます。

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

無限の連分数は $\\sqrt{2} = \[1; (2)]$ と表すことができ、これは 2 が*無限に*繰り返されることを示します 。 同様に、$\\sqrt{23} = \[4; (1, 3, 1, 8)]$ です。 平方根に対する連分数の部分的な値の数列から最良の有理近似が得られる、ということが分かります。 $\\sqrt{2} $ の近似分数について考えます。

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

したがって、$\\sqrt{2}$ の最初の10 個の近似分数は次のような数列になります。

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

最も驚くべきことは、重要な数学的定数について $e = \[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$ であることです。 `e` の近似分数の数列に含まれる最初の 10 項は、次のとおりです。

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

10 番目の近似分数について見ると、分子の各位の和は $1 + 4 + 5 + 7 = 17$ です。

`e` の連分数の `n` 番目の近似分数について、分子の各位の和を求めなさい。

# --hints--

`convergentsOfE(10)` は数値を返す必要があります。

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` は `17` を返す必要があります。

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` は `53` を返す必要があります。

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` は `91` を返す必要があります。

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` は `169` を返す必要があります。

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` は `272` を返す必要があります。

```js
assert.strictEqual(convergentsOfE(100), 272);
```

# --seed--

## --seed-contents--

```js
function convergentsOfE(n) {

  return true;
}

convergentsOfE(10);
```

# --solutions--

```js
function convergentsOfE(n) {
  function sumDigits(num) {
    let sum = 0n;
    while (num > 0) {
      sum += num % 10n;
      num = num / 10n;
    }
    return parseInt(sum);
  }

  // BigInt is needed for high convergents
  let convergents = [
    [2n, 1n],
    [3n, 1n]
  ];
  const multipliers = [1n, 1n, 2n];
  for (let i = 2; i < n; i++) {
    const [secondLastConvergent, lastConvergent] = convergents;
    const [secondLastNumerator, secondLastDenominator] = secondLastConvergent;
    const [lastNumerator, lastDenominator] = lastConvergent;
    const curMultiplier = multipliers[i % 3];

    const numerator = secondLastNumerator + curMultiplier * lastNumerator;
    const denominator = secondLastDenominator + curMultiplier * lastDenominator;

    convergents = [lastConvergent, [numerator, denominator]]
    if (i % 3 === 2) {
      multipliers[2] += 2n;
    }
  }
  return sumDigits(convergents[1][0]);
}
```
