---
title: Links
localeTitle: 链接
---
## 链接

这是一个存根。 [帮助我们的社区扩展它](https://github.com/freecodecamp/guides/tree/master/src/pages/html/attributes/links/index.md) 。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

链接在网络上的任何地方都使用，目的是将用户引导到各种内容项目。它们通常由光标变为手形图标来指示。链接可以是HTML或网页中包含的文本，图像或其他元素。

您使用`code <a>`标签或锚元素来定义链接，这也需要您使用`code href`属性访问的目标地址。这是一个片段，使“freeCodeCamp指南”这个短语成为一个链接：

```html

<a href="https://guide.freecodecamp.org">the freeCodeCamp Guide</a> 
```

如果您希望在新标签页中打开链接，则会在开始`code <a>`标记内使用`code target`属性以及`code "_blank"`值。看起来像这样：

```html

<a href="https://guide.freecodecamp.org" target="_blank">the freeCodeCamp Guide</a> 
```

当您需要引导用户访问网页的特定部分时，让我们假设最底层，您首先需要将哈希`code #`符号分配给`code href`属性，就像这样

```html

<a href="#footer>More about us<a/> 
```

然后，您需要在要引导用户的元素中使用`code id`属性 - 在这种情况下，网页底部的`code <footer>` 。

```html

<footer id="footer">Powered by freeCodeCamp</footer> 
```

#### 更多信息：

[w3sschools - HTML链接](https://www.w3schools.com/html/html_links.asp)