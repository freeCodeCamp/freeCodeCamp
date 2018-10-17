---
title: Float and Clear
localeTitle: 漂浮和清除
---
## 漂浮和清除

CSS `float`属性指定元素应如何浮动。

CSS `clear`属性指定哪些元素可以浮动在已清除元素旁边以及哪一侧。

### `float`属性

`float`属性用于在网页上进行定位和布局。

`float`属性可以具有以下值之一：

`left` - 元素浮动到其容器的左侧 `right` - 元素浮动到其容器的右侧 `none` - 元素不浮动（将显示在文本中出现的位置）。这是默认的 `inherit` - 该元素继承其父级的float值 在最简单的用法中， `float`属性可用于在图像周围包装文本。

#### 漂浮在图片中：

![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "CSS-花招浮动IMG")
```
img { 
    float: right; 
 } 
```

此示例指定图像应在页面中向右浮动：

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "浮动img web")
```
img { 
    float: left; 
 } 
```

此示例指定图像应在页面中向左浮动：
```
img { 
    float: none; 
 } 
```

在下面的示例中，图像将显示在文本中出现的位置（ `float: none;` ）：

### `clear`财产

`clear`属性指定哪些元素可以浮动在已清除元素旁边以及哪一侧。

`clear`属性可以具有以下值之一：

`none` - 允许两侧浮动元素。这是默认的 `left` - `left`不允许浮动元素 `right` - `right`不允许浮动元素 `both` - 左侧或右侧不允许浮动元素 `inherit` - 元素继承其父级的clear值 使用`clear`属性的最常用方法是在元素上使用`float`属性之后。

清除浮动时，应将`clear`与`float`匹配。如果元素浮动到`left` ，那么您应该`left` `clear` 。您的浮动元素将继续`float` ，但清除的元素将显示在网页下方。

#### 例：

![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "不清楚的页脚图像") 资料来源：CSS-TRICS
```
div { 
    clear: left; 
 } 
```

![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "清晰的页脚图像") 资料来源：CSS-TRICS

### 其他资源：

*   MDN CSS： [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) ＆ [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
*   [W3Schools教程](https://www.w3schools.com/css/css_float.asp)
*   CSS-Tricks： [浮动](https://css-tricks.com/all-about-floats/)和[清除](https://css-tricks.com/almanac/properties/c/clear/)