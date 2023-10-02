---
id: 5900f5191000cf542c51002b
title: '問題 428：圓圈項鍊'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

令 $a$、$b$ 和 $c$ 爲正數。

令 $W$, $X$, $Y$, $Z$ 爲在一條直線上的四個點，其中 $|WX| = a$, $|XY| = b$, $|YZ| = c$ 且 $|WZ| = a + b + c$。

令 $C_{\text{in}}$ 是直徑爲 $XY$ 的圓。

令 $C_{\text{out}}$ 是直徑爲 $WZ$ 的圓。

定義三元組（$a$, $b$, $c$），如果可以同時放置 $k ≥ 3$ 個不同的圓 $C_1, C_2, \ldots, C_k$，且這些圓之間滿足以下條件，則這個三元組被稱爲*項鍊三元組*：

- 對於任意的 $1 ≤ i$, $j ≤ k$ 且 $i ≠ j$，$C_i$ 與 $C_j$ 不相交。
- 對於任意的 $1 ≤ i ≤ k$，$C_i$ 同時與 $C_{\text{in}}$ 和 $C_{\text{out}}$ 相切，
- 對於任意的 $1 ≤ i &lt; k$，$C_i$ 與 $C_{i + 1}$ 相切。
- $C_k$ 與 $C_1$ 相切。

例如，(5, 5, 5) 與 (4, 3, 21) 是項鍊三元組，而 (2, 2, 5) 不是。

<img class="img-responsive center-block" alt="項鍊三元組的視覺表現。" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

定義 $T(n)$ 爲項鍊三元組 $(a, b, c)$ 的數量，其中 $a$，$b$ 和 $c$ 爲正整數，且 $b ≤ n$。 例如，$T(1) = 9$，$T(20) = 732$，$T(3\\,000) = 438\\,106$。

請計算 $T(1\\,000\\,000\\,000)$。

# --hints--

`necklace(1000000000)` 應該返回 `747215561862`。

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
