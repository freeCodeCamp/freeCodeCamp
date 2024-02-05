---
id: 5900f4dd1000cf542c50ffef
title: '問題368：類似肯珀納的系列'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

The harmonic series $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ is well known to be divergent.

然而，如果我們在這個系列中省略了分母中有9個的每個項，則該系列顯着地收斂到大約22.9206766193。 這種改進的諧波系列稱爲肯普納系列。

現在讓我們通過省略分母具有3個或更多相等連續數字的每個項的諧波系列來考慮另一個修正的諧波系列。 可以驗證在諧波系列的前1200個項中，僅省略20個項。

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
