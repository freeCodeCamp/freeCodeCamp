---
id: 5900f5241000cf542c510037
title: '問題 440: 最大公約数とタイル貼り'
challengeType: 1
forumTopicId: 302112
dashedName: problem-440-gcd-and-tiling
---

# --description--

1 × 2 のタイル、または下図のように 1 桁の 10 進数が書かれた 1 × 1 のタイルを、長さ$n$、高さ 1 の板全体に貼ります。

<img class="img-responsive center-block" alt="1 桁の 10 進数が書かれた 1 × 1 のブロック と、1 x 2 のブロック" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;" />

例えば、$n = 8$ のときに板にタイルを貼る方法をいくつか示します。

<img class="img-responsive center-block" alt="長さ n = 8 の板にタイルを貼る方法の例" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;" />

上述の長さ $n$ の板にタイルを貼る方法の数を $T(n)$ とします。

例えば、$T(1) = 10$, $T(2) = 101$ です。

$1 ≤ a, b, c ≤ L$ のとき、三重和 $\sum_{a, b, c} gcd(T(c^a), T(c^b))$ を $S(L)$ とします。

例えば、次のようになります。

$$\begin{align}   & S(2) = 10\\,444 \\\\
  & S(3) = 1\\,292\\,115\\,238\\,446\\,807\\,016\\,106\\,539\\,989 \\\\ & S(4)\bmod 987\\,898\\,789 = 670\\,616\\,280. \end{align}$$

$S(2000)\bmod 987\\,898\\,789$ を求めなさい。

# --hints--

`gcdAndTiling()` は `970746056` を返す必要があります。

```js
assert.strictEqual(gcdAndTiling(), 970746056);
```

# --seed--

## --seed-contents--

```js
function gcdAndTiling() {

  return true;
}

gcdAndTiling();
```

# --solutions--

```js
// solution required
```
