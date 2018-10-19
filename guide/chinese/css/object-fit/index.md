---
title: Object Fit
localeTitle: 对象适合
---
# 对象适合

`object-fit`属性指定元素如何响应其父框的宽度/高度。

此属性可用于图像，视频或任何其他媒体。它还可以与`object-position`属性一起使用，以更好地控制媒体的显示方式。

基本上我们使用`object-fit`属性来定义它如何拉伸或挤压内联媒体。

## 句法

```css
.element { 
    object-fit: fill || contain || cover || none || scale-down; 
 } 
```

## 值

*   `fill` ： **这是默认值** 。无论宽高比如何，都要调整内容大小以匹配其父框。
    
*   `contain` ：使用正确的宽高比调整内容大小以填充其父框。
    
*   `cover` ：类似于`contain`但经常裁剪内容。
    
*   `none` ：以原始大小显示图像。
    
*   `scale-down` ：比较`none`和`contain`之间的差异，找到最小的具体对象大小。
    

## 浏览器兼容性

大多数现代浏览器都支持`object-fit` ，有关兼容性的最新信息，请查看http://caniuse.com/#search=object-fit

还有一个不受支持的浏览器（主要是IE）的polyfill。 https://github.com/anselmh/object-fit

## 更多信息

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit https://drafts.c​​sswg.org/css-images-3/#the-object-fit