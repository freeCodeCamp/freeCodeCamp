---
title: CSS3 Shadow Effects
localeTitle: CSS3阴影效果
---
## CSS3阴影效果

使用CSS3，您可以创建两种类型的阴影： `text-shadow` （向文本添加阴影）和`box-shadow` （向其他元素添加阴影）。

### CSS3文字阴影

`text-shadow`属性最多可以包含四个值：

*   水平阴影
*   垂直阴影
*   模糊效果
*   颜色

##### 例子：

*   普通文字阴影

```css
h1 { 
    text-shadow: 2px 2px 5px crimson; 
 } 
```

![普通文本阴影示例](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

*   发光的文字效果

```css
h1 { 
    text-shadow: 0 0 4px #00FF9C; 
 } 
```

![发光文字示例](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)

#### 多个阴影

要实现此目的，您只需在两组（或多组）值之间添加逗号：

```css
h1 { 
    color: white; 
    text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5; 
 } 
```

![多个阴影examaple与白色文本](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)

### CSS3 Box Shadow

`box-shadow`属性最多可以包含六个值：

*   （可选） `inset`关键字（将阴影更改为框架内的一个）
*   水平阴影
*   垂直阴影
*   模糊效果
*   传播
*   颜色

##### 例子：

```css
.first-div { 
    box-shadow: 1px 1px 5px 3px grey; 
 } 
 
 .second-div { 
    box-shadow: 0 0 5px 1px lightgrey; 
 } 
 
 .third-div { 
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75); 
 } 
```

![箱影实例](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)

#### 更多信息：

*   [MDN网络文档](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
*   [检查浏览器支持](https://caniuse.com/#search=box-shadow)
*   [CSS盒子阴影生成器](https://www.cssmatic.com/box-shadow) （随意尝试盒阴影）