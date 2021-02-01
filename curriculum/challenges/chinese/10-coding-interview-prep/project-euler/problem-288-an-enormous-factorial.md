---
id: 5900f48d1000cf542c50ff9f
title: 问题288：一个巨大的阶乘
challengeType: 5
videoUrl: ''
dashedName: problem-288-an-enormous-factorial
---

# --description--

对于任何素数p，数N（p，q）定义为

N（p，q）= ∑n = 0至q Tn \* pn，其中Tn由以下随机数生成器生成：

S0 = 290797 Sn + 1 = Sn2 mod 50515093 Tn = Sn mod p

令Nfac（p，q）为N（p，q）的阶乘。 令NF（p，q）为Nfac（p，q）中因子p的数量。

给出NF（3,10000）mod 320 = 624955285。

求NF（61,107）mod 6110

# --hints--

`euler288()`应该返回605857431263982000。

```js
assert.strictEqual(euler288(), 605857431263982000);
```

# --seed--

## --seed-contents--

```js
function euler288() {

  return true;
}

euler288();
```

# --solutions--

```js
// solution required
```
