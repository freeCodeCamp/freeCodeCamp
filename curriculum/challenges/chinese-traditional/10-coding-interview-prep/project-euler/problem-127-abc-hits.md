---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 1
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

$n$ 的根數 $rad(n)$ 是 $n$ 的所有素數因子的積。 如 $504 = 2^3 × 3^2 × 7$，則 $rad(504) = 2 × 3 × 7 = 42$。

We shall define the triplet of positive integers (a, b, c) to be an abc-hit if:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$ 即 a、b、c 兩兩互質
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

例如， (5, 27, 32) 爲 abc-hit，因爲：

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

可以發現 abc-hits 非常罕見，對於 $c &lt; 1000$，只有 31 個 abc-hits，可得 $\sum{c} = 12523$。

求 $c &lt; 120000$ 時的 $\sum{c}$。

# --hints--

`abcHits()` 應該返回 `18407904`。

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
