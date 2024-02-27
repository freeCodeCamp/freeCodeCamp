---
id: 594da033de4190850b893874
title: Durchschnitte/Quadratisches Mittel
challengeType: 1
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

Compute the Root Mean Square (RMS) of the numbers 1 through 10 inclusive.

Der <abbr title="Root mean square">QMW</abbr> wird anhand der quadratischen Wurzel des Mittelwerts der Quadrate der Zahlen berechnet, was durch die folgende Gleichung angegeben wird:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\over n}. $$

# --hints--

`rms` sollte eine Funktion sein.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` sollte `6.2048368229954285` entsprechen.

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
