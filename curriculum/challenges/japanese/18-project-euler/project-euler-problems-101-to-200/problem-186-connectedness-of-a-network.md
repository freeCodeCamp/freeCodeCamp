---
id: 5900f4281000cf542c50ff39
title: '問題 186: ネットワークのつながり'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

下表は、100 万人のユーザーを持つ混雑した電話システムの記録です。

| 記録 No. | 発信者    | 着信者    |
| ------ | ------ | ------ |
| 1      | 200007 | 100053 |
| 2      | 600183 | 500439 |
| 3      | 600863 | 701497 |
| ...    | ...    | ...    |

記録 No. $n$ における発信者の電話番号と着信者の電話番号は、$Caller(n) = S_{2n - 1}$ と $Called(n) = S_{2n}$ であり、ここで、${S}_{1,2,3,\ldots}$ は「ラグ付きフィボナッチ 法」で生成されます。

$1 ≤ k ≤ 55$ のとき、$S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{mod}\\;1000000)$ です。

$56 ≤ k$ のとき、$S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{mod}\\;1000000)$ です。

$Caller(n) = Called(n)$ の場合、ユーザーがかけ間違えたものとされ、発信は失敗します。それ以外の場合、発信は成功します。

記録の開始時点から、$X$ が $Y$ に、またはその逆に電話をかけたら、「ユーザ $X$ とユーザ $Y$ の対は友達である」ということにします。 同様に、$X$ が $Y$ の友達であり、$Y$ が $Z$ の友達であれば、$X$ は $Z$ の友達です。このように友達の輪が広がっていきます。

首相の電話番号は 524287 です。 間違い電話を除き、発信が何回成功すれば、ユーザーの 99% (首相を含む) が首相の友達、友達の友達、または友達の友達の友達… (以下同様) になりますか。

# --hints--

`connectednessOfANetwork()` は `2325629` を返す必要があります。

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```
