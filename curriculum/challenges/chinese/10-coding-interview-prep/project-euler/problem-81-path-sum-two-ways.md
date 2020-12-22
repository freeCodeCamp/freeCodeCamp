---
id: 5900f3bd1000cf542c50fed0
title: 问题81：路径总和：两种方式
challengeType: 5
videoUrl: ''
---

# --description--

在下面的5乘5矩阵中，从左上角到右下角的最小路径总和，仅向右和向下移动，以粗体红色表示，等于2427。

$$ \\ begin {pmatrix} \\ color {red} {131}＆673＆234＆103＆18 \\ \\ color {red} {201}＆\\ color {red} {96}＆\\ color {red} {342} ＆965＆150 \\ 630＆803＆\\ color {red} {746}＆\\ color {red} {422}＆111 \\ 537＆699＆497＆\\ color {red} {121}＆956 \\ 805＆732＆ 524＆\\ color {red} {37}＆\\ color {red} {331} \\ end {pmatrix} $$

在matrix.txt中找到最小路径总和（右键单击并“保存链接/目标为...”），一个包含80 x 80矩阵的31K文本文件，从左上角到右下角仅向右移动下。

# --hints--

`euler81()`应该返回427337。

```js
assert.strictEqual(euler81(), 427337);
```

# --solutions--

