---
id: 5900f4421000cf542c50ff55
title: '問題 214: トーティエント鎖'
challengeType: 1
forumTopicId: 301856
dashedName: problem-214-totient-chains
---

# --description--

$φ$ をオイラーのトーティエント関数とします。つまり、自然数 $n$ について、$φ(n)$ は $gcd(k,n) = 1$ となる $k$ (ここで $1 ≤ k ≤ n$) の 数です。

$φ$ を繰り返すと、それぞれの正の整数が作る鎖の中で値が徐々に小さくなり、最終的に 1 になります。 例えば、 5 から始めると 5, 4, 2, 1 の数列になります。 長さが 4 である鎖をすべて下に示します。

$$\begin{align}    5,4,2,1 & \\\\
   7,6,2,1 & \\\\    8,4,2,1 & \\\\
   9,6,2,1 & \\\\   10,4,2,1 & \\\\
  12,4,2,1 & \\\\   14,6,2,1 & \\\\
  18,6,2,1 & \end{align}$$

これらの鎖のうち 2 つのみが素数から始まり、その和は 12 です。

長さ 25 の鎖を作る $40\\,000\\,000$ 未満の素数の総和を求めなさい。

# --hints--

`totientChains()` は `1677366278943` を返す必要があります。

```js
assert.strictEqual(totientChains(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function totientChains() {

  return true;
}

totientChains();
```

# --solutions--

```js
// solution required
```
