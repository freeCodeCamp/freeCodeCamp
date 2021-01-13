---
id: 5900f4d51000cf542c50ffe8
title: 问题361：Thue-Morse序列的子序列
challengeType: 5
videoUrl: ''
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

Thue-Morse序列{Tn}是满足以下条件的二进制序列：T0 = 0T2n = Tn T2n + 1 = 1-Tn

{Tn}的前几个术语如下：01101001100101101001011001101001 ....

我们将{An}定义为整数的排序序列，使得每个元素的二进制表达式在{Tn}中显示为子序列。例如，十进制数18以二进制表示为10010。 10010出现在{Tn}（T8到T12）中，因此18是{An}的元素。十进制数14以二进制表示为1110。 1110永远不会出现在{Tn}中，因此14不是{An}的元素。

An的前几个术语如下：n0123456789101112 ... An012345691011121318 ...

我们还可以验证A100 = 3251和A1000 = 80852364498。

找到最后9位数。

# --hints--

`euler361()`应该返回178476944。

```js
assert.strictEqual(euler361(), 178476944);
```

# --seed--

## --seed-contents--

```js
function euler361() {

  return true;
}

euler361();
```

# --solutions--

```js
// solution required
```
