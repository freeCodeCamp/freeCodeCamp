---
id: 5900f4281000cf542c50ff39
title: '問題186：網絡連接'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Here are the records from a busy telephone system with one million users:

| RecNr | 呼叫者    | 已撥打電話  |
| ----- | ------ | ------ |
| 1     | 200007 | 100053 |
| 2     | 600183 | 500439 |
| 3     | 600863 | 701497 |
| ...   | ...    | ...    |

打電話者的電話號碼和接電話者的電話號碼在記錄裏 $n$ 是 $Caller(n) = S_{2n - 1}$ 和 $Called(n) = S_{2n}$ 當${S}_{1,, 3,\ldots}$ 來自 "Lagged Fibonacci Generator":

對於$1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

對於$56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

如果$Caller(n) = Called(n)$，則假定用戶誤操作並且呼叫失敗; 否則通話成功。

從記錄一開始，我們就說任何用戶 $X$ 和 $Y$ 都是朋友如果 $X$ 打電話給 $Y$ 或反之亦然。 類似地， $X$ 是 $Z$ 的朋友，如果 $X$ 是 $Y$ 的朋友， $Y$ 是 $Z$的朋友； 等於更長的鏈。

總理的電話號碼爲524287。 After how many successful calls, not counting misdials, will 99% of the users (including the PM) be a friend, or a friend of a friend etc., of the Prime Minister?

# --hints--

`connectednessOfANetwork()` 應該返回`2325629`

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
