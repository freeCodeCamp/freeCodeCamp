---
id: 5900f4021000cf542c50ff13
title: '問題 149：搜索最大和子序列'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

觀察下表，可以輕易驗證任意方向（水平、垂直、對角線或反對角線）上相鄰數字最大和爲 $16 (= 8 + 7 + 1)$。

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

現在我們重複一遍搜索過程，但是這次是在一個更大規模的表格中：

首先，使用被稱爲“滯後斐波那契生成器”的特殊方法，生成四百萬個僞隨機數：

對於 $1 ≤ k ≤ 55$，$s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$。

對於 $56 ≤ k ≤ 4000000$，$s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$。

可得，$s_{10} = −393027$，$s_{100} = 86613$。

這些數字 $s$ 隨後排列在一個 2000 x 2000 的表格中，前 2000 個數字填入第一行（順序填入），後 2000 個數字填充第二行，依次類推。

最後，請找到任意方向（水平、垂直、對象線或反對角線）上相鄰數字（任意數量）的最大和。

# --hints--

`maximumSubSequence()` 應該返回 `52852124`。

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
