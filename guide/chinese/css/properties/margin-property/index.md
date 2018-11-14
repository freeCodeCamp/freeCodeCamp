---
title: Margin Property
localeTitle: 保证金财产
---
## 保证金财产

margin属性是元素周围的空间，而不是padding，它是元素中的空间。边距是透明的，是Box模型中最外层的元素（见下图）。

![框模型图](https://css-tricks.com/wp-content/csstricks-uploads/thebox.png)

资料来源：https：//css-tricks.com/the-css-box-model/

### 设定保证金

有多种方法可以设置元素的边距。

简单的方法......

```css
  margin: 10px; 
```

这将在元素周围放置10个像素的空间。

您还可以在元素的每一侧放置不同数量的空间。例如：

```css
  margin-top: 10px; 
  margin-bottom: 15px; 
  margin-left: 20px; 
  margin-right: 25px; 
```

但是，在定义元素的不同边时，可以使用简写。它从顶部开始，顺时针绕着元素（顶部，右侧，底部，左侧）移动。例如，about代码将用shorhand写成：

```css
  margin: 10px 25px 15px 25px; 
```

另外，如果底部和顶部边距相同，左边距和右边距相同，则可以这样写：

```css
  margin: 10px 20px; 
```

顶部和底部边距为10像素，左右边距为20像素。

### 其他财产价值

auto - 浏览器计算边距。

initial - 将属性设置为其初始值

inherit - element从其父元素继承边距

### 测量空间

就像有多种设置保证金的方法一样，也有多种方法可以衡量保证金。

px - 像素测量，屏幕空间的标准测量单位。

％ - 屏幕百分比。这将使元素随浏览器缩小和增长，并且是响应式网页设计的推荐测量单位之一。

em - 相对于当前元素的字体大小的大小单位。

rem - 相对于页面根元素的font-size的大小单位。

[这](https://www.w3schools.com/CSSref/css_units.asp)是CSS单元的指南。

[这种快速风格指南有助于确保您的拉取请求被接受](https://github.com/freecodecamp/guides/blob/master/README.md) 。

#### 更多信息：

*   [W3学校](https://www.w3schools.com/CSSref/pr_margin.asp)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [CSS技巧](https://css-tricks.com/almanac/properties/m/margin/)