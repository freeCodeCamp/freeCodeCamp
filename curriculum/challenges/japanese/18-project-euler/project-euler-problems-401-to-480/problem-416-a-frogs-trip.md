---
id: 5900f50e1000cf542c510020
title: '問題 416: カエルの旅'
challengeType: 1
forumTopicId: 302085
dashedName: problem-416-a-frogs-trip
---

# --description--

$n$ 個のマスが一列に並べられ、左端のマスにカエルがいます。 カエルは連続して跳ぶことにより、右端のマスへ移動してから左端のマスに戻ります。 左端から右へ向かうとき、カエルは右へ 1 マス、2 マス、または 3 マス跳びます。右端から左へ戻るときも同様に跳びます。 マスの外へ跳ぶことはできません。 カエルは、この往復を $m$ 回繰り返します。

カエルが途中で一度も着地しないマスがたかだか 1 つになるような旅のしかたの数を、$F(m, n)$ とします。

例えば、$F(1, 3) = 4$, $F(1, 4) = 15$, $F(1, 5) = 46$, $F(2, 3) = 16$, $F(2, 100)\bmod {10}^9 = 429\\,619\\,151$ です。

$F(10, {10}^{12})$ の下位 9 桁 を求めなさい。

# --hints--

`frogsTrip()` は `898082747` を返す必要があります。

```js
assert.strictEqual(frogsTrip(), 898082747);
```

# --seed--

## --seed-contents--

```js
function frogsTrip() {

  return true;
}

frogsTrip();
```

# --solutions--

```js
// solution required
```
