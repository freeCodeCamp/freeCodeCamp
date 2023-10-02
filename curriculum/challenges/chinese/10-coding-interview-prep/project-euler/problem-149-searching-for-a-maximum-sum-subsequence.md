---
id: 5900f4021000cf542c50ff13
title: '问题 149：搜索最大和子序列'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

观察下表，可以轻易验证任意方向（水平、垂直、对角线或反对角线）上相邻数字最大和为 $16 (= 8 + 7 + 1)$。

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

现在我们重复一遍搜索过程，但是这次是在一个更大规模的表格中：

首先，使用被称为“滞后斐波那契生成器”的特殊方法，生成四百万个伪随机数：

对于 $1 ≤ k ≤ 55$，$s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$。

对于 $56 ≤ k ≤ 4000000$，$s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$。

可得，$s_{10} = −393027$，$s_{100} = 86613$。

这些数字 $s$ 随后排列在一个 2000 x 2000 的表格中，前 2000 个数字填入第一行（顺序填入），后 2000 个数字填充第二行，依次类推。

最后，请找到任意方向（水平、垂直、对象线或反对角线）上相邻数字（任意数量）的最大和。

# --hints--

`maximumSubSequence()` 应该返回 `52852124`。

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
