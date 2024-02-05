---
id: 5900f3ec1000cf542c50fefe
title: '問題 127: abc-hit'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

$n$ の累乗根 $rad(n)$ は、$n$ の相異なる素数の積です。 例えば、$504 = 2^3 × 3^2 × 7$ なので、$rad(504) = 2 × 3 × 7 = 42$ です。

以下が成り立つとき、正の整数 (a, b, c) の三つ組数を "abc-hit" と呼ぶことにします。

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

例えば、(5, 27, 32) は abc-hit です。

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

abc-hit は極めてまれです。$c &lt; 1000$ のとき、abc-hits はわずか 31 個であり $\sum{c} = 12523$ です。

$c &lt; 120000$ のとき、$\sum{c}$ を求めなさい。

# --hints--

`abcHits()` は `18407904` を返す必要があります。

```js
assert.strictEqual(abcHits(), 18407904);
```

# --seed--

## --seed-contents--

```js
function abcHits() {

  return true;
}

abcHits();
```

# --solutions--

```js
// solution required
```
