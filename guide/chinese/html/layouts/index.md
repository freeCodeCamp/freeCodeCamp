---
title: Layouts
localeTitle: 布局
---
## 布局

布局组织网页的不同区域。

我们看到的几乎每个网页都可以分成多个框，可以按特定顺序排列以创建该网页。下图是一个这样的例子。

![网站设计样本 -  www.codementor.io](https://cdn-media-1.freecodecamp.org/imgr/Z1DSMYC.png)

> 网站通常以多列（如杂志或报纸）显示内容。

HTML布局技术帮助我们将所需信息放入所需的订单或设计中。

### 实施布局的技巧

#### HTML表格

作为在网页中实现布局的最基本工具之一，这些工具由HTML提供。但是随着布局变得复杂，由于标记文本的增加，HTML表很快就会失去它们的易用性。

#### CSS Float

如果要设计一个带有左侧导航窗格和中心内容查看区域的基于2列的页面，则使用CSS浮动可以轻松完成。只需将左侧导航页面设置为带有样式属性`float: left;`的`<div>` `float: left;` 。瞧，你得到那个设计。但是，如果您在一个部分中有4列，该怎么办？当然，人们可以用浮点数来做，但是你要编写的HTML语法很容易理解。

#### CSS框架

这就是CSS框架（如[Bootstrap](http://getbootstrap.com/)和[Materialize）的](http://materializecss.com/)用武之地。这些框架提供了一个网格功能，可以将网页的每个部分划分为12列，您可以订购这些列。

![网格示例](http://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)

> 示例Bootstrap网格

### HTML语义元素

网站通常以多列（如杂志或报纸）显示内容。

HTML5提供了定义网页不同部分的新语义元素：
```
<header> - Defines a header for a document or a section 
 <nav> - Defines a container for navigation links 
 <section> - Defines a section in a document 
 <article> - Defines an independent self-contained article 
 <aside> - Defines content aside from the content (like a sidebar) 
 <footer> - Defines a footer for a document or a section 
 <details> - Defines additional details 
 <summary> - Defines a heading for the <details> element 
```

#### 更多信息：

*   [W3学校 - 布局](https://www.w3schools.com/html/html_layout.asp)
*   [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - 创建站点的布局技术