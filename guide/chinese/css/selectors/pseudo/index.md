---
title: Pseudo
localeTitle: 伪
---
# 伪选择器

伪选择器提供了使用伪类或伪元素来定位元素的方法。

## 结构伪类

结构伪类提供了一种基于位置来定位元素的方法。

班级|描述 --------- | ------------ `:root` |文件的根。在HTML文档的上下文中，这将是顶部的`html`标记。它可能意味着其他文档中的不同元素，如XML或SVG。 `:only-child`一个元素，它是其父元素的唯一子元素。 `:first-child` |父母的第一个孩子。 `:last-child` |父元素的最后一个子元素。 `:nth-child(n)` |其父母的第n个孩子。 `:nth-last-child(n)` |来自最后一个孩子的第n个孩子。相反`:nth-child` 。 `:only-of-type` |在其兄弟姐妹中与其他类型的唯一元素。 `:first-of-type` |兄弟姐妹中的第一个元素。 `:last-of-type` |兄弟姐妹中该类型的最后一个元素。 `:nth-of-type(n)` |第n个同类型的兄弟姐妹。 `:nth-last-of-type(n)` |从最后一个类型的同类型的第n个兄弟。相反`:nth-of-type` 。 `:empty` |没有任何子元素的元素。

## UI状态伪类

UI状态伪类提供了一种基于其当前状态来定位元素的方法。

班级|描述 --------- | ------------ `:link` |未访问的链接元素。 `:visited` |已经访问了一个链接。 `:hover` |鼠标指针悬停的元素。 `:active` |单击鼠标指针但尚未释放的元素。 `:focus` |一个有焦点的元素。对于辅助功能很重要，例如，使用`tab`键进行导航时。 `:enabled` |处于启用状态的元素。 `:disabled` |已禁用的元素。 `:checked` |选中的复选框或单选按钮。

## 伪元素

另一方面，伪元素是在特殊位置动态生成的元素或元素。

选择器|描述 --------- | ------------ `::first-line` |元素的第一行，通常是容器或段落。 `::first-letter` |一个元素的字母。广泛用于造型滴盖。 `::before` |在实际元素之前使用自己的内容创建的动态元素。 `::after` |在实际元素之后使用自己的内容创建的动态元素。

## 更多信息：

其他信息可在以下参考资料中找到。

*   [官方CSS3选择器规范](https://www.w3.org/TR/css3-selectors/#structural-pseudos)
*   [选择器上的Mozilla开发人员网络页面](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)