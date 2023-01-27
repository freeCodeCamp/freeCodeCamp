---
id: 594da033de4190850b893874
title: 平均／二乗平均平方根
challengeType: 1
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

Compute the Root Mean Square (RMS) of the numbers 1 through 10 inclusive.

The <abbr title="Root mean square">RMS</abbr> is calculated by taking the square root of the mean of the squares of the numbers, given by the equation:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\over n}. $$

# --hints--

`rms` should be a function.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` should equal `6.2048368229954285`.

```js
assert.equal(rms(arr1), answer1);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer1 = 6.2048368229954285;
```

## --seed-contents--

```js
function rms(arr) {

}
```

# --solutions--

```js
function rms(arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}
```
