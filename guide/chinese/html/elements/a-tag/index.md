---
title: A Tag
localeTitle: a 标记
---
## a 标记

`<a>`标签或_锚_元素创建指向另一个页面或文件的超链接。为了链接到不同的页面或文件， `<a>`标签还必须包含一个`href`属性，该属性指示链接的目的地。

开始和结束`<a>`标签之间的文本成为链接。

默认情况下，除非指定了其他目标，否则链接页面将显示在当前浏览器窗口中。

#### 例：

```html

  <a href= "https://guide.freecodecamp.org/">freeCodeCamp</a> 
```

通过将`<img>`标记包含在`<a>`标记中，也可以将图像转换为链接。

#### 例：

```html

  <a href= "https://guide.freecodecamp.org/"><img src="logo.svg"></a> 
```

"herf"还可以通过"target"属性确定`<a>`标签的目标。 `target`属性可以是以下值`_blank|_self|_parent|_top|framename` 。

`_blank` ：根据用户的偏好，在新选项卡或新窗口中打开链接。 `_self` ：在同一框架中打开链接（默认行为）。 `_parent` ：打开父框架中的链接，例如，当用户单击iframe中的链接时。 `_top` ：打开窗口整个主体中的链接。 `framename` ：打开指定框架中的链接。

#### 例：

```html

  <a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a> 
```

[freeCodeCamp](https://guide.freecodecamp.org/) 此链接的创建方式与示例代码块建议的方式相同。单击它以查看其工作原理。

#### 更多信息：

*   [HTML <a>element：MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
*   [tag：w3schools](https://www.w3schools.com/tags/tag_a.asp)
*   [tag：htmlreference.io](http://htmlreference.io/element/a/)
