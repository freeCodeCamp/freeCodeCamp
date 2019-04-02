---
title: CSS3 at Media Rule
localeTitle: 媒体规则的CSS3
---
## 媒体规则的CSS3

CSS3 Media规则是允许使用媒体查询的规则。媒体查询可以允许您根据不同的媒体类型或设备对网页（部分或全部）进行不同的样式设置。

使用`@media`标记创建媒体查询，然后提供规则以检查以下内容：

*   当前视口的宽度和高度
*   设备的方向（这适用于平板电脑或手机）
*   目前的决议
*   和更多

目前有四种可能的媒体类型：

*   all（默认 - 这将针对所有设备）
*   打印（用于打印机;例如提供单独的打印样式）
*   屏幕（用于电脑，手机，平板电脑等）
*   speech（用于屏幕阅读器等网页内容的辅助设备）

媒体查询用于各种各样的purporses，因为它们允许许多不同的媒体功能。媒体查询最常见的用途之一是使网页响应;意味着它会根据屏幕大小而有所不同。

媒体查询示例如下：

```CSS
@media screen and (max-width: 1000px) { 
  body { 
    background: #000; 
  } 
 } 
```

媒体查询规则中的CSS仅在规则成立时适用。例如，查看上面的代码段，只有当用户使用1000px或更小的设备访问该页面时，正文背景才会更改为`#000` 。如果超过1000px，该规则将不适用。

#### 更多信息：

*   [CSS @media规则](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [使用媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)