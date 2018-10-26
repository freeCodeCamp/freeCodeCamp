---
title: Media Queries
localeTitle: 媒体查询
---
#### 推荐阅读：

[使用媒体查询 - MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

另请参阅Beta版的[响应式Web设计原则](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json)部分

#### 条款草案：

媒体查询是定义CSS属性的一组规则。您可以设置媒体查询，以根据内容的查看方式更改内容的外观。

媒体查询可以确定您的内容在不同显示中的外观。不同显示器的一些示例是：计算机屏幕上的图像，打印文本或音频屏幕阅读器中的网页。

在网页中，某些元素可能无法在不同的屏幕尺寸上一致显示。您可以使用媒体查询为小屏幕和大屏幕设置特殊规则。

以下是在电话屏幕上设置正文文本大小的媒体查询示例：

```css
@media screen and (max-width: 450px) { 
 body { 
   font-size: 12px; 
  } 
 } 
```

此媒体查询规定，对于宽度最大为450像素的屏幕，正文文本应以12px字体大小显示。

媒体查询可以在[响应式网页设计中提供](https://guide.freecodecamp.org/html/responsive-web-design)帮助。