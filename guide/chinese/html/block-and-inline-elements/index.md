---
title: Block and Inline Elements
localeTitle: 块和内联元素
---
## 块和内联元素

让我们使用以下示例来理解它们：

#### 带输出的代码示例：

![块输出](https://user-images.githubusercontent.com/16048167/31070017-6f2cf0a2-a77c-11e7-9de6-110b9d0b488d.PNG)

#### 块级元素：

块级元素占据父级（容器）的整个空间，例如示例中的`<div>`和`<p>` 。

请注意， `<div>`和`<p>`每次都从一个新行开始，形成一个**块状**结构。块级元素从新行开始。

常见的**块级元素**是`<div>` ， `<p>` ， `<article>` ， `<section>` ， `<figure>` ， `<footer>`等。

#### 内联元素：

内联名称“作为正文的一部分而不是单独的部分”。内联元素在主元素定义的空间内根据需要占据空间。与块级元素不同，它们不会在新行上开始。

一些**内联元素**是`<a>` ， `<span>` ， `<img>` ， `<code>` ， `<cite>` ， `<button>` ， `<input>`等。

#### 带输出的代码示例：

![内联输出](https://user-images.githubusercontent.com/16048167/31069389-e1e3fc10-a779-11e7-86d2-6685e0061f52.png)

**_注意_** ：块级元素可能包含其他块级元素或内联元素。内联元素**不能**包含块级元素。

#### HTML5中的更改

虽然对块和内联元素的理解仍然相关，但您应该知道这些术语是在HTML规范的早期版本中定义的。在HTML5中，一组更复杂的“内容类别”替换了块级和内联元素。块级元素主要放在HTML5中的“流内容”类别中，而内联元素对应于“短语内容”类别。有关HTML5中新内容类别的更多信息，包括流内容和短语内容，请参阅[Mozilla开发人员网络上的](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) “ [内容类别”页面。](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)

#### 更多信息：

请参阅[Mozilla文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Block-level_vs._inline)