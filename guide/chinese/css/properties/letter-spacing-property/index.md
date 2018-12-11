---
title: Letter Spacing Property
localeTitle: 字母间距属性
---
## 字母间距属性

letter-spacing属性调整文本块中所有字母之间的间距。它在排版术语和具有高级类型设置选项的软件中也称为“跟踪”。该属性接受`px`和`em`长度值，包括负值。

```css
.first-example { 
  letter-spacing: 3px; 
 } 
 .second-example { 
  letter-spacing: -1px; 
 } 
 .third-example { 
  letter-spacing: 0.5em; 
 } 
```

![CSS的结果](https://github.com/kaithrendyle/guide-photos/blob/master/letter-spacing.png)

一般来说，最好使用相对单位（ `em` ），因为间距总是相对于你声明的字体大小。

在调整字母间距时考虑易读性非常重要。如果字母太靠近，它们会显得狭窄而难以阅读。另一方面，如果字母相距太远，它们可能不会读作单词，而是作为单个字母。这也可能影响屏幕阅读器如何向低视力人群大声朗读文本。

通常，小写字母通常不需要调整字母间距。如果间距看起来过紧，则在使用大写部分时可能会发现需要进行调整。

#### 更多信息：