---
id: 5900f3f31000cf542c50ff06
title: '問題 135: 同一の差違'
challengeType: 1
forumTopicId: 301763
dashedName: problem-135-same-differences
---

# --description--

正の整数 $x$, $y$, $z$ が等差数列の連続項であるとき、式 $x^2 − y^2 − z^2 = n$ がちょうど 2 つの解を持つような最小の正の整数 $n$ は、$n = 27$ です。

$$34^2 − 27^2 − 20^2 = 12^2 − 9^2 − 6^2 = 27$$

$n = 1155$ は、ちょうど 10 個の解を持つ最小値であることが分かります。

相異なる解をちょうど 10 個持つ 100 万未満 の$n$ の値はいくつありますか。

# --hints--

`sameDifferences()` は `4989` を返す必要があります。

```js
assert.strictEqual(sameDifferences(), 4989);
```

# --seed--

## --seed-contents--

```js
function sameDifferences() {

  return true;
}

sameDifferences();
```

# --solutions--

```js
// solution required
```
