---
title: Background Size
localeTitle: 背景大小
---
## 背景大小

background-size属性指定背景图像的大小。您可以设置长度或百分比，第一个值是宽度，第二个值是高度。您还可以使用以下5个关键字值之一：

```css
 .auto {background-size: auto;} 
 .cover {background-size: cover;} 
 .contain {background-size: contain;} 
 .initial {background-size: initial;} 
 .inherit {background-size: inherit;} 
 /* Percentage and pixel can also be used */ 
 .pixel {background-size: 50px 50px;} 
 .percentage {background-size: 50% 50%;} 
```

要在多个背景图像上设置此属性，请用逗号分隔值：

```css
 .multiple { 
    background-image: url(1.png), url(2.png); 
    background-size: 3px 3px, cover; 
 } 
```

#### 更多信息：

文档： [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

CSS-Tricks： [背景大小](https://css-tricks.com/almanac/properties/b/background-size/)

浏览器支持： [caniuse](http://caniuse.com/#search=background-size)
