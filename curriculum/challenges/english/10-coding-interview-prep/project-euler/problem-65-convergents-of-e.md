---
id: 5900f3ad1000cf542c50fec0
title: 'Problem 65: Convergents of e'
challengeType: 5
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

Find the sum of digits in the numerator of the 100<sup>th</sup> convergent of the continued fraction for `e`.

# --hints--

`convergentsOfE()` should return a number.

```js
assert(typeof convergentsOfE() === 'number');
```

`convergentsOfE()` should return 272.

```js
assert.strictEqual(convergentsOfE(), 272);
```

# --seed--

## --seed-contents--

```js
function convergentsOfE() {

  return true;
}

convergentsOfE();
```

# --solutions--

```js
// solution required
```
