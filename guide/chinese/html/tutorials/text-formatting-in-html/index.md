---
title: Text Formatting in HTML
localeTitle: HTML中的文本格式
---
## HTML中的文本格式

HTML为文本格式提供了许多有用的元素。它允许您的文本：粗体，斜体，标记等等。改变你的文字风格并非没有任何理由 - 主要的是让读者去看一些重要的笔记。

### 大胆而坚强

您可以使用HTML `<b>`元素轻松更改文本含义。它使单词变粗，哪个函数单独列出序列片段。例如：
```
The most important part of your code is <b>the end</b>, because if you <b>don't close</b> the element, it will affect to <b>everything</b>! 
```

您也可以使用`<strong>` - 它还增加了语义“强”的重要性。您的浏览器无法识别这两个元素之间的差异，但它存在。

### 斜体和强调

通常用于引用某些内容或在很多文章中翻译单词。它使它们变成斜体 - 想象一下，用正确的字母踢了一下。例如：
```
Theatre - <i>teatos</i>, <i>teates</i> and <i>teatron</i>. 
```

您也可以使用`<em>` - 它还增加了语义“强调”的重要性。您的浏览器无法识别这两个元素之间的差异，但它存在。

### 小

它使您的文本小于使用字体的正常大小。这个元素的含义在HTML5中有所改变 - 它代表了侧面评论和小字体。

`Normal, <small>small</small>, normal, <small>small</small>!`

### 标记

元素`<mark>`使您的文字被标记 - 用不同的词语，它会使您的文字突出显示。您可以使用它来告诉读者这是您文章中的重要内容之一。例如：

`HTML is full of things and <mark>it's our journey</mark> to get known them better!`

### 删除

元素`<del>`使您的文本在中心受到攻击。显示文档中的更改很有用。

`WWI started in <del>1913</del> 1914 year.`

### 插入

标签`<ins>`使您的文本插入文章。使用其他更易于理解的词语 - 添加。它在插入的文本下显示一行。

`HTML isn't boring. <ins>You can make a lot of combinations of elements!</ins>`

### 下标

使用元素`<sub>`为您提供有用的格式作为下标文本（在底部显示较小）。有一个示例代码：

`This was in 2003 year <sub>(needs a link).`

### 上标

如果要与下标文本相反，则可以轻松使用`<sup>`元素。它在顶部显示较小的文本。

`10<sup>x+y</sup> = 1000`