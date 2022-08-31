---
id: 5900f40c1000cf542c50ff1e
title: '問題 159: 因数分解の数字根和'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

合成数はさまざまな方法で因数分解できます。

例えば、1 による乗算を除くと、24 は次の 7 通りに因数分解できます。

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

数字根とは何かを思い出してください。ある数の各位の和を求め、その結果が 10 未満になるまでそれを繰り返したときに得られる 10 進数が数字根です。 したがって、467 の数字根は 8 です。

ここでは、ある数の各因数の数字根の和を「数字根和」 (DRS: Digital Root Sum) と呼ぶことにします。 下表に、24 の DRS 値をすべて示します。

| 因数分解    | 数字根和 |
| ------- | ---- |
| 2x2x2x3 | 9    |
| 2x3x4   | 9    |
| 2x2x6   | 10   |
| 4x6     | 10   |
| 3x8     | 11   |
| 2x12    | 5    |
| 24      | 6    |

24 の最大の数字根和は 11 です。 $n$ の最大の数字根和を関数 $mdrs(n)$ と定義します。 したがって、$mdrs(24) = 11$ です。

$1 &lt; n &lt; 1,000,000$ のとき、$\sum{mdrs(n)}$ を求めなさい。

# --hints--

`euler159()` は `14489159` を返す必要があります。

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
