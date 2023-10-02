---
id: 5a23c84252665b21eecc7e76
title: Гамма-функція
challengeType: 1
forumTopicId: 302271
dashedName: gamma-function
---

# --description--

Implement one algorithm (or more) to compute the Gamma function (in the real field only).

Гамма-функція може бути визначена як:

<div style='padding-left: 4em;'><big><big>$\Gamma(x) = \displaystyle\int_0^\infty t^{x-1}e^{-t} dt$</big></big></div>

# --hints--

`gamma` має бути функцією.

```js
assert(typeof gamma == 'function');
```

`gamma(.1)` має повернути число.

```js
assert(typeof gamma(0.1) == 'number');
```

`gamma(.1)` має повернути `9.513507698668736`.

```js
assert.equal(round(gamma(0.1)), round(9.513507698668736));
```

`gamma(.2)` має повернути `4.590843711998803`.

```js
assert.equal(round(gamma(0.2)), round(4.590843711998803));
```

`gamma(.3)` має повернути `2.9915689876875904`.

```js
assert.equal(round(gamma(0.3)), round(2.9915689876875904));
```

`gamma(.4)` має повернути `2.218159543757687`.

```js
assert.equal(round(gamma(0.4)), round(2.218159543757687));
```

`gamma(.5)` має повернути `1.7724538509055159`.

```js
assert.equal(round(gamma(0.5)), round(1.7724538509055159));
```

# --seed--

## --after-user-code--

```js
function round(x) {
  return Number(x).toPrecision(13);
}
```

## --seed-contents--

```js
function gamma(x) {

}
```

# --solutions--

```js
function gamma(x) {
  var p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
  771.32342877765313, -176.61502916214059, 12.507343278686905,
  -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
  ];

  var g = 7;
  if (x < 0.5) {
    return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  }

  x -= 1;
  var a = p[0];
  var t = x + g + 0.5;
  for (var i = 1; i < p.length; i++) {
  a += p[i] / (x + i);
  }

  var result=Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;

  return result;
}
```
