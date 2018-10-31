---
title: How to Insert Spaces or Tabs in Text Using HTML and CSS
localeTitle: 如何使用HTML和CSS在文本中插入空格或制表符
---
## 如何使用HTML和CSS在文本中插入空格或制表符

使用html插入空格的方法有很多种。为简单起见，我们会 通过插入Span标签来查看其中一个。

## 跨度标签

`<span>`

Span标签`<span>`是自闭标签，意味着它们不需要`/>` 。

## 跨度示例

有关`<span>`标记如何在文本之间插入空格的示例，请参见下文。

`<p>Hello may name is <span> James</p>`

如果您为`<span>`分配了一个类，那么您可以为其添加一些css。 像这样，

`<p>Hello my name is <span class=tab> James</p>`

然后在外部样式表或内部样式表中，您可以给出`class .tab` 一些属性。

## 跨类实例

例如

`.tab {padding-left: 2px;}`

您还可以为`<span>`一些内联样式属性，如下所示。

`<p>Hello my name is <span style="padding-left: 2px;"> James</p>`

## 更多信息

有关标签或更多信息;如何在文本中插入空格或制表符使用HTML和CSS，您可以访问w3schools。 https://www.w3schools.com/tags/tag\_span.asp