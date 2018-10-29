---
title: Images in HTML
localeTitle: HTML中的图像
---
## 介绍

您可以使用`<img>`标记定义图像。它没有结束标记，因为它只能包含属性。 要插入图像，您需要定义源，并在无法渲染图像时显示替代文本。

`src` - 此属性提供您的PC /笔记本电脑上存在的图像的URL或者包含在其他网站中的图像。请记住，提供的链接不应该被破坏，否则图片将不会在您的网页上生成。

`alt` - 此属性用于克服图像损坏或浏览器无法在网页上生成图像的问题。这个名称的属性建议为图像提供“替代”，这是描述图像的一些“文本”

## 例

```html

<img src="URL of the Image" alt="Descriptive Title" /> 
```

### 要定义图像的高度和宽度，可以使用height和width属性：

```html

<img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/> 
```

### 您还可以定义边框粗细（0表示没有边框）：

```html

<img src="URL of the Image" alt="Descriptive Title" border="2"/> 
```

### 对齐图像：

```html

<img src="URL of the Image" alt="Descriptive Title" align="left"/> 
```

### 您还可以在style属性中使用样式：

```html

<img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/> 
```

#### 更多信息

*   看到在该页面freeCodeCamp `<img>`标签[在这里](https://guide.freecodecamp.org/html/elements/img-tag) 。
*   要获取有关HTML中图像的更多详细信息，请查看[MDN文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)