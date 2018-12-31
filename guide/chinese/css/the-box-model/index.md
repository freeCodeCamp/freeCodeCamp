---
title: Box Model
localeTitle: 盒子模型
---
## 盒子模型

理解CSS Box模型对于能够正确布局网页至关重要。

当浏览器呈现（绘制）网页时，每个元素（例如，一段文本或图像）被绘制为遵循CSS Box模型的规则的矩形框。

盒子的中心是内容本身，它占据一定的高度和宽度。该区域称为**内容区域** 。可以自动确定内容区域的大小，也可以显式设置高度和宽度的大小。 （参见下面关于`box-sizing` ）

![内容区域图像](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/content%20area.jpg)

在内容区域周围，这是一个称为**填充区域的区域** 。填充的大小可以是相同的（使用`padding`设置），或者您可以单独设置顶部，右侧，底部和左侧填充（使用`padding-top` ， `padding-right` ， `padding-bottom`和`padding-left` ） 。

![填充区域图像](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/padding%20area.jpg)

接下来，有一个**边境地区** 。这会在元素及其填充周围创建边框。您可以设置`border-width`粗细（ `border-width` ），颜色（ `border-color` ）和样式（ `border-style` ）。样式选项包括`none` （无边框）， `solid` ， `dashed` ， `dotted`和其他几个。此外，您可以单独设置4面的边框;例如，顶部边框的`border-top-width` ， `border-top-color`和`border-top-style`的厚度，颜色和样式。 （请参阅下面有关`box-sizing` 。）

![边境地区的形象](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/border%20area.jpg)

最后，还有**保证金区** 。这会在元素，填充和边框周围创建清晰的空间。您可以再次单独设置顶部，右侧，底部和左侧边距（ `margin-top` ， `margin-right` ， `margin-bottom`和`margin-left` ）。在某些情况下，边缘会发生坍塌，并且可以共享相邻元素之间的边距。

![保证金区域图像](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/margin%20area2.jpg)

**`box-sizing`属性** 此属性的默认值为`content-box` 。如果使用默认值，则框模型将允许作者指定内容区域的大小。但是，可以使用这些来指定边框区域的大小。这是通过将`box-sizing`属性更改为`border-box` 。这有时可以使布局更容易。您可以根据需要为每个元素设置`box-sizing`属性。

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)