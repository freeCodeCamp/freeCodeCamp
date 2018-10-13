---
title: Iframe Tag
localeTitle: Iframe标签
---
## Iframe标签

iframe代码用于在设定的空间内将现有网页或应用添加到您的网站。

使用iframe标记时，应使用src属性来指示要在框架内使用的网页或应用程序的位置。

```html

<iframe src="framesite/index.html"></iframe> 
```

您可以设置width和height属性以限制框架的大小。

```html

<iframe src="framesite/index.html" height="500" width="200"></iframe> 
```

默认情况下，iframe有边框，如果要删除它，可以使用style属性并将CSS border属性设置为none。

```html

<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe> 
```

#### 更多信息：

*   [MDN - HTML iframe标记](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [W3 - HTML 5.2 iframe规范](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)