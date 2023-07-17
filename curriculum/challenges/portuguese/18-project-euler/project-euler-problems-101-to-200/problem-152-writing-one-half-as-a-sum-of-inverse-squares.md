---
id: 5900f4041000cf542c50ff17
title: 'Problema 152: Escrever a metade como uma soma de quadrados inversos'
challengeType: 1
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

Há várias maneiras de escrever o número $\frac{1}{2}$ como uma soma de quadrados inversos usando números inteiros distintos.

Por exemplo, os números {2, 3, 4, 5, 7, 12, 15, 20, 28, 35} podem ser usados:

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

De fato, usando apenas números inteiros entre 2 e 45, há exatamente três maneiras de fazer isso. As duas formas restantes são: {2, 3, 4, 6, 7, 9, 10, 20, 28, 35, 36, 45} e {2, 3, 4, 6, 7, 9, 12, 15, 28, 30, 35, 36, 45}.

Quantas formas existem de escrever o número $\frac{1}{2}$ como uma soma de quadrados inversos usando números inteiros distintos entre 2 e 80?

# --hints--

`sumInverseSquares()` deve retornar `301`.

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```
