---
id: 594810f028c0303b75339ad0
title: 对齐列
challengeType: 5
videoUrl: ''
---

# --description--

<p>给定一个包含许多行的文本文件，其中一行中的字段由单个<code>$</code>字符描述，编写一个程序，通过确保每列中的单词至少由一个空格分隔来对齐每列字段。此外，允许列中的每个单词在其列中左对齐，右对齐或居中对齐。 </p><p>使用以下文本测试您的程序： </p><pre>的$ $多行给出$ A $文本$文件$
其中$领域内$ A $线$ $
是$由$ A $单个$ '美元' $字符划定$
写$ A $程序
即$对齐$ $场的每个$列$
由$ $确保该$字美元$ $每
列$ $是在$最少$一张价值$空间被分隔$ $。
此外，$允许为$ $ $中的每个字$ $ A $ $列到$为$要么离开$ $
对齐，右$ $有道理
或$ $中心内$有道理$ $其列。
</pre><p>注意： </p>示例输入文本行可以或可以不具有尾随美元字符。所有列应共享相同的对齐方式。为了完成任务，在行尾附近产生的连续空格字符是无关紧要的。输出文本将以纯文本编辑器或基本终端上的单行间隔字体查看。列之间的最小间距应根据文本计算，而不是硬编码。不需要在列之间或列周围添加分隔字符。 

# --hints--

`formatText`是一个函数。

```js
assert(typeof formatText === 'function');
```

具有上述输入和“右”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'right'), rightAligned);
```

具有上述输入和“左”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'left'), leftAligned);
```

具有上述输入和“居中”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'center'), centerAligned);
```

# --solutions--

