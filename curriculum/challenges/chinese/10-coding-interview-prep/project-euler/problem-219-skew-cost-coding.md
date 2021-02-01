---
id: 5900f4481000cf542c50ff5a
title: 问题219：偏差成本编码
challengeType: 5
videoUrl: ''
dashedName: problem-219-skew-cost-coding
---

# --description--

设A和B为位串（0和1的序列）。如果A等于B的最左边长度（A）位，则A被称为B的前缀。例如，00110是001101001的前缀，但不是00111或100110的前缀。

大小为n的无前缀代码是n个不同位串的集合，因此没有字符串是任何其他字符串的前缀。例如，这是一个大小为6的无前缀代码：

0000,0001,001,01,10,11

现在假设发送'0'位需要一分钱，而传输'1'需要4便士。然后，上面显示的无前缀代码的总成本是35便士，这恰好是所讨论的偏斜定价方案可能最便宜的。简而言之，我们写Cost（6）= 35。

什么是成本（109）？

# --hints--

`euler219()`应返回64564225042。

```js
assert.strictEqual(euler219(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function euler219() {

  return true;
}

euler219();
```

# --solutions--

```js
// solution required
```
