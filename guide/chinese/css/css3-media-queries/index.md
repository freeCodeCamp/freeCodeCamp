---
title: CSS3 Media Queries
localeTitle: CSS3媒体查询
---
## CSS3媒体查询

媒体查询允许您针对不同的设备/屏幕尺寸使用不同的样式。他们在CSS3中的介绍大大缓解了这一建设 响应式网页。

设计响应式网站时的最佳方法是先考虑移动设备;意味着您从设计和内容开始创建页面 移动版本。您可能认为使用某些可扩展的大小（％，vw或vh），您的页面将完全适应任何设备。但事实并非如此。也许 对于一些非常基本的设计，但肯定不适用于更常见或复杂的页面！

在为较小的设备设计页面时，您将专注于主要内容。在更大的屏幕上，你必须重新设置一些字体大小，边距， 填充等等，以保持您的网站舒适和可读，但你也想要/需要添加更多的内容，你没有判断的内容 基本的，并填写由屏幕大小创建的空间。

思考过程应该是：

1.  要显示哪些内容？
2.  怎么布局？
3.  尺寸？

### 基本语法

```css
    @media only screen and (min-width: 768px) { 
      p {padding: 30px;} 
    } 
```

一旦屏幕达到最小768px宽度， `p`标签将具有30px的填充。

### AND语法

```css
  @media only screen and (min-height: 768px) and (orientation: landscape) { 
    p {padding: 30px;} 
  } 
```

一旦屏幕达到最小768px高度且其方向为横向， `p`标签将具有30px的填充。

### OR语法

```css
    @media only screen and (min-width: 768px), (min-resolution: 150dpi) { 
      p {padding: 30px;} 
    } 
```

一旦屏幕达到最小768px宽度或其分辨率达到最小150dpi， `p`标签将具有30px的填充。

### 更多信息

*   [MDN - 媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
*   [W3学校 - @media规则](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [CSS欺骗标准设备宽度Atricle](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   \[https://alistapart.com/article/responsive-web-design\](Ethan Marcotte在响应式网页设计上列出一个单独的列表）