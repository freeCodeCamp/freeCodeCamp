---
title: Link to Internal Sections of a Page with Anchor Elements
localeTitle: 链接到具有锚元素的页面的内部部分
---
## 链接到具有锚元素的页面的内部部分

如说明中所述，内部链接由两个元素组成： `a`标签和html元素，其`id`在`a`标签的`href`属性中使用。

所有这些都是有效的内部链接：

主播标签|带来 ----- | ------ `<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>` `<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>` `<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>` `<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

系统会要求您使用现有的锚元素来创建内部链接，因此请勿编写其他锚标记。

要改变实际的锚标签并不是挑战要求你做的唯一事情，还有两点：

*   要删除`a`标记的`target`属性：您不再希望在浏览器中打开新标签页，它将是向上/向下“移动”的实际页面。
    
*   要修改的文本内容`a`标签：从`cat photos`来`Jump to Bottom` （仔细检查大小写）。
    
    祝你好运！