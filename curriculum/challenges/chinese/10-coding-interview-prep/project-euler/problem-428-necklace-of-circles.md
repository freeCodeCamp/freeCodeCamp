---
id: 5900f5191000cf542c51002b
title: '问题 428：圆圈项链'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

令 $a$、$b$ 和 $c$ 为正数。

令 $W$, $X$, $Y$, $Z$ 为在一条直线上的四个点，其中 $|WX| = a$, $|XY| = b$, $|YZ| = c$ 且 $|WZ| = a + b + c$。

令 $C_{\text{in}}$ 是直径为 $XY$ 的圆。

令 $C_{\text{out}}$ 是直径为 $WZ$ 的圆。

定义三元组（$a$, $b$, $c$），如果可以同时放置 $k ≥ 3$ 个不同的圆 $C_1, C_2, \ldots, C_k$，且这些圆之间满足以下条件，则这个三元组被称为*项链三元组*：

- 对于任意的 $1 ≤ i$, $j ≤ k$ 且 $i ≠ j$，$C_i$ 与 $C_j$ 不相交。
- 对于任意的 $1 ≤ i ≤ k$，$C_i$ 同时与 $C_{\text{in}}$ 和 $C_{\text{out}}$ 相切，
- 对于任意的 $1 ≤ i &lt; k$，$C_i$ 与 $C_{i + 1}$ 相切。
- $C_k$ 与 $C_1$ 相切。

例如，(5, 5, 5) 与 (4, 3, 21) 是项链三元组，而 (2, 2, 5) 不是。

<img class="img-responsive center-block" alt="项链三元组的视觉表现。" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

定义 $T(n)$ 为项链三元组 $(a, b, c)$ 的数量，其中 $a$，$b$ 和 $c$ 为正整数，且 $b ≤ n$。 例如，$T(1) = 9$，$T(20) = 732$，$T(3\\,000) = 438\\,106$。

请计算 $T(1\\,000\\,000\\,000)$。

# --hints--

`necklace(1000000000)` 应该返回 `747215561862`。

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
