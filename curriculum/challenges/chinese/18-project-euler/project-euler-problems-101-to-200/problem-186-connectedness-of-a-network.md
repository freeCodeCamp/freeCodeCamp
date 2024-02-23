---
id: 5900f4281000cf542c50ff39
title: '问题186：网络连接'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Here are the records from a busy telephone system with one million users:

| RecNr | 呼叫者    | 已拨打电话  |
| ----- | ------ | ------ |
| 1     | 200007 | 100053 |
| 2     | 600183 | 500439 |
| 3     | 600863 | 701497 |
| ...   | ...    | ...    |

打电话者的电话号码和接电话者的电话号码在记录里 $n$ 是 $Caller(n) = S_{2n - 1}$ 和 $Called(n) = S_{2n}$ 当${S}_{1,, 3,\ldots}$ 来自 "Lagged Fibonacci Generator":

对于$1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

对于$56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

如果$Caller(n) = Called(n)$，则假定用户误操作并且呼叫失败; 否则通话成功。

从记录一开始，我们就说任何用户 $X$ 和 $Y$ 都是朋友如果 $X$ 打电话给 $Y$ 或反之亦然。 类似地， $X$ 是 $Z$ 的朋友，如果 $X$ 是 $Y$ 的朋友， $Y$ 是 $Z$的朋友； 等于更长的链。

总理的电话号码为524287。 After how many successful calls, not counting misdials, will 99% of the users (including the PM) be a friend, or a friend of a friend etc., of the Prime Minister?

# --hints--

`connectednessOfANetwork()` 应该返回`2325629`

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
