---
id: 594da033de4190850b893874
title: Média/Valor eficaz
challengeType: 1
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

Calcule a raiz do valor quadrático médio (RMS) dos números de 1 a 10.

A <abbr title="raiz do valor quadrático médio">RMS</abbr> é calculada pela raiz quadrada da média dos quadrados dos números, dada pela equação:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\sobre n}. $$

# --hints--

`rms` deve ser uma função.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` deve ser igual a `6.2048368229954285`.

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
