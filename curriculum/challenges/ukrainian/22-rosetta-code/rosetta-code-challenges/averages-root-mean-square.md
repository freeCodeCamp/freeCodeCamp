---
id: 594da033de4190850b893874
title: 'Середні значення: середнє квадратне значення'
challengeType: 1
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

Знайдіть середнє квадратне значення (RMS) чисел від 1 до 10 включно.

Щоб знайти <abbr title="Root mean square">середнє квадратне значення</abbr>, знайдіть квадратний корінь середнього значення чисел, що задано формулою:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\over n}. $$

# --hints--

`rms` має бути функцією.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` має дорівнювати `6.2048368229954285`.

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
