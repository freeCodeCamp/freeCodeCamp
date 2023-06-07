---
id: 5900f4021000cf542c50ff13
title: '問題 149: 和が最大である部分列を探索する'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

下表において、任意の方向 (縦、横、対角、反対角) に隣り合う数の最大和が 16 (= 8 + 7 + 1) であることは簡単に確認できます。

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

ここでは、この探索を巨大な規模で繰り返します。

まず、「ラグ付きフィボナッチ法」と呼ばれる特定の形式を使用して、400 万個の疑似乱数を生成します。

$1 ≤ k ≤ 55$ のとき、$s_k = (100003 − 200003k + 300007{k}^3) \\ (mod\\ 1000000) − 500000$ です。

$56 ≤ k ≤ 4000000$ のとき、$s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (mod\\ 1000000) − 500000$ です。

したがって、$s_{10} = −393027$ および $s_{100} = 86613$ となります。

次に、項 $s$ は、最初の 2000 個の数を 1 行目 (順番に)、次の 2000 個の数を 2 行目に、それ以降も同様に 2000 x 2000 の表の中に配置されます。

最後に、任意の方向 (縦、横、対角、反対角) に隣接する要素 (個数は任意) の最大和を求めなさい。

# --hints--

`maximumSubSequence()` は `52852124` を返す必要があります。

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
