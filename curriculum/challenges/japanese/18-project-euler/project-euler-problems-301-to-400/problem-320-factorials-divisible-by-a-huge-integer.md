---
id: 5900f4ae1000cf542c50ffbf
title: '問題 320: 巨大な整数で割り切れる階乗'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

$n!$ が $(i!)^{1234567890}$ で割り切れるような最小の整数 $n$ を $N(i)$ とします。

$10 ≤ i ≤ u$ に対し、$S(u) = \sum N(i)$ と定義します。

$S(1000)=614\\,538\\,266\\,565\\,663$ です。

$S(1\\,000\\,000)\bmod {10}^{18}$ を求めなさい。

# --hints--

`divisibleByHugeInteger()` `278157919195482660` を返す必要があります。

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

# --seed--

## --seed-contents--

```js
function divisibleByHugeInteger() {

  return true;
}

divisibleByHugeInteger();
```

# --solutions--

```js
// solution required
```
