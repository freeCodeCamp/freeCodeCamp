---
id: 5900f4dd1000cf542c50ffef
title: 'Problem 368: A Kempner-like series'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

The harmonic series $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ is well known to be divergent.

If we however omit from this series every term where the denominator has a 9 in it, the series remarkably enough converges to approximately 22.9206766193. This modified harmonic series is called the Kempner series.

Let us now consider another modified harmonic series by omitting from the harmonic series every term where the denominator has 3 or more equal consecutive digits. One can verify that out of the first 1200 terms of the harmonic series, only 20 terms will be omitted.

These 20 omitted terms are:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

This series converges as well.

Find the value the series converges to. Give your answer rounded to 10 digits behind the decimal point.

# --hints--

`kempnerLikeSeries()` should return `253.6135092068`.

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```
