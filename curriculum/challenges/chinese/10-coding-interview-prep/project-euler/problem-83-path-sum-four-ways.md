---
id: 5900f3bf1000cf542c50fed2
title: 问题83：路径总和：四种方式
challengeType: 5
videoUrl: ''
---

# --description--

注意：此问题是问题81的一个更具挑战性的版本。在下面的5乘5矩阵中，通过向左，向右，向上和向下移动，从左上角到右下角的最小路径总和以粗体表示红色等于2297。

$$ \\ begin {pmatrix} \\ color {red} {131}＆673＆\\ color {red} {234}＆\\ color {red} {103}＆\\ color {red} {18} \\ \\ color {red} {201}＆\\ color {red} {96}＆\\ color {red} {342}＆965＆\\ color {red} {150} \\ 630＆803＆746＆\\ color {red} {422}＆\\ color {red} {111} \\ 537＆699＆497＆\\ color {red} {121}＆956 \\ 805＆732＆524＆\\ color {red} {37}＆\\ color {red} {331} \\ end { pmatrix} $$

在matrix.txt中找到最小路径总和（右键单击并“保存链接/目标为...”），一个包含80 x 80矩阵的31K文本文件，通过向左，向右移动从左上角到右下角， 上和下。

# --hints--

`euler83()`应返回425185。

```js
assert.strictEqual(euler83(), 425185);
```

# --solutions--

