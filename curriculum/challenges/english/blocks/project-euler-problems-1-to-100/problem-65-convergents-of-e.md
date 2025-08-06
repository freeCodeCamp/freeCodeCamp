---
id: 5900f3ad1000cf542c50fec0
title: 'Problem 65: Convergents of e'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

The square root of 2 can be written as an infinite continued fraction.

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

The infinite continued fraction can be written, $\\sqrt{2} = \[1; (2)]$ indicates that 2 repeats *ad infinitum*. In a similar way, $\\sqrt{23} = \[4; (1, 3, 1, 8)]$. It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for $\\sqrt{2}$.

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

Hence the sequence of the first ten convergents for $\\sqrt{2}$ are:

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

What is most surprising is that the important mathematical constant, $e = \[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$. The first ten terms in the sequence of convergents for `e` are:

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

The sum of digits in the numerator of the 10<sup>th</sup> convergent is $1 + 4 + 5 + 7 = 17$.

Find the sum of digits in the numerator of the `n`<sup>th</sup> convergent of the continued fraction for `e`.

# --hints--

`convergentsOfE(10)` should return a number.

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` should return `17`.

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` should return `53`.

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` should return `91`.

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` should return `169`.

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` should return `272`.

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
