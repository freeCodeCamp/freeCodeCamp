---
id: 594da033de4190850b893874
title: Medie/Valore efficace
challengeType: 5
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

Calcola il [Valore efficace](https://it.wikipedia.org/wiki/Valore_efficace "wp: Valore efficace") dei numeri da 1 a 10 inclusivo.

Il *valore efficace* è anche noto con le iniziali RMS (o rms dall'inglese root mean square), e come **media quadratica**.

Il RMS è calcolato come la radice quadrata della media dei quadrati dei numeri:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\over n}. $$

# --hints--

`rms` dovrebbe essere una funzione.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` dovrebbe essere uguale a `6.2048368229954285`.

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
