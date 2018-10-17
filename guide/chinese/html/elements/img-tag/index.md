---
title: Img Tag
localeTitle: Img Tag
---
## Img Tag

一个简单的HTML Image元素可以包含在HTML文档中，如下所示：

```html

<img src="path/to/image/file" alt="this is a cool picture"> 
```

`alt`标签为图像提供替代文本。 `alt`标签的一个用途是用于使用屏幕阅读器的视障人士;他们可以阅读图像的`alt`标签，以了解图像的含义。

请注意，图像文件的路径可以是相对路径也可以是绝对路径。此外，请记住`img`元素是自动关闭的，这意味着它不会与`<img />`标记关闭，而只是关闭一个`>` 。

例：

```html

<img src="https://example.com/image.png" alt="my picture"> 
```

（这假设html文件位于https://example.com/index.html，因此它与图像文件位于同一文件夹中）

是相同的：

```html

<img src="image.png" alt="my picture"> 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) [W3Schools的](https://www.w3schools.com/TAGs/tag_img.asp)