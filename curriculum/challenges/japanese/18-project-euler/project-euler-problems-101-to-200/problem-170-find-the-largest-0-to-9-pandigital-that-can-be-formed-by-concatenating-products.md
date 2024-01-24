---
id: 5900f4161000cf542c50ff29
title: >-
  問題 170: 積を連結して作られる 0 ～ 9 のパンデジタル数の最大値を求める
challengeType: 1
forumTopicId: 301805
dashedName: >-
  problem-170-find-the-largest-0-to-9-pandigital-that-can-be-formed-by-concatenating-products
---

# --description--

6 に 1273 と 9854 をそれぞれ掛けると、次のようになります。

$$\begin{align}   & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\ \end{align}$$

これらの積を連結すると、1 から 9 のパンデジタル数 763859124 になります。 ここでは、763859124 を「6 と (1273, 9854) の連結積」と呼ぶことにします。 注目すべき点として、元の 3 つの数を連結した数 612739854 もまた 1 から 9 のパンデジタル数になっています。

0 から 9 のパンデジタル数についても同じことを行えます。

ある整数と 2 つ以上の他の整数との連結積で作られる、0 から 9 の 10 桁のパンデジタル数の最大値を求めなさい。ただし、元の 3 つの数を連結した数も、0 から 9 の 10 桁のパンデジタル数でなければなりません。

# --hints--

`largestPandigital()` は `9857164023` を返す必要があります。

```js
assert.strictEqual(largestPandigital(), 9857164023);
```

# --seed--

## --seed-contents--

```js
function largestPandigital() {

  return true;
}

largestPandigital();
```

# --solutions--

```js
// solution required
```
