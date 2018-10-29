---
title: Make an Image Responsive
localeTitle: 使图像响应
---
## 使图像响应

按照说明：

添加img标记的样式规则，使其响应其容器的大小。它应该显示为块级元素，它应该适合其容器的整个宽度而不拉伸，并且它应该保持其原始的宽高比。

风格变成：

```css
<style> 
  img { 
  max-width: 100%; 
  display: block; 
  height: auto; 
 } 
 </style> 

```