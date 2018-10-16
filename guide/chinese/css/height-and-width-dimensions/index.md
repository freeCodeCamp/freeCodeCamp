---
title: Height and Width Dimensions
localeTitle: 高度和宽度尺寸
---
## 高度和宽度尺寸

### 定义

程序员可以使用height和width属性来更改特定元素的高度和宽度。为了更改其尺寸，必须将这些元素的`display`属性值设置为`block`或`inline-block` 。

### 句法

#### 高度：

*   `height: auto|length|initial|inherit;`
*   `min-height: length|initial|inherit;`
*   `max-height: none|length|initial|inherit;`

#### 宽度：

*   `width: auto|value|initial|inherit;`
*   `min-width: length|initial|inherit;`
*   `max-width: none|length|initial|inherit;`

### 用法和例子

上面提到的所有属性只能有**一个**值。

#### 高度：

`height`属性设置元素的确切高度。值`auto`是默认值，它允许浏览器自动设置高度。这通常取决于元素内容占用多少垂直空间。高度的长度可以设置为固定为`px` ，相对于最近的父元素的高度使用`%`单位，或相对于视口的高度使用`vh`单位。 `initial`值与`auto`值具有相同的效果，而`inherit`值将使元素与其最近的父元素具有相同的高度。

**例：**

```html

<p id="red">Example text</p> 
```

```css
p#red { 
    margin: 0; 
  background-color: red; 
  height: 50vh; 
    line-height: 50vh; 
    text-align:center; 
 } 
```

**结果：** ![例一](https://image.prntscr.com/image/dbKSQofTThGZRD7FJLyjJQ.png) 上面的示例使用`vh`单位设置高度。此单位用于设置元素相对于视口高度的高度。在这种情况下，红色段落的高度为视口高度的一半，因此它占据了屏幕的50％。 _注意：必须从正文中删除所有默认边距，以使结果显示为应该的结果。_

`min-height`属性设置元素必须具有的最小高度。在垂直调整页面大小时，此属性很有用，因为程序员可以防止元素收缩太多而不能很好地显示。元素的`min-height`的默认值设置为0.下面的CSS代码将阻止`ID`为**example**的段落缩小到高度小于400px。

**例：**

```css
p#example { 
  min-height: 400px; 
 } 
```

`max-height`属性设置元素可以达到的最大高度。当您不希望元素大于特定大小时，这可能很有用。如果元素的内容的高度大于`max-height`值，则内容将溢出。

**例：**

```css
p { 
  max-height: 40px; 
  background-color: red; 
 } 
```

**结果：** ![例3](https://image.prntscr.com/image/eRdqazdUSWO2rdVfcUb5rQ.png)

#### 宽度：

CSS宽度属性说明与高度属性完全相同，除了它们改变元素的宽度。因此，我将仅在下面展示一些使用这些属性的示例。

**例：**

```css
p { 
  width: 150px; 
  background-color: red; 
 } 
```

**结果：** ![例4](https://image.prntscr.com/image/x1_khU6TQsmZQznt7YU9qw.png)

_注意：内容不会向右溢出，它只占用指定的宽度，然后分成下一行。_

**例：**

```css
p { 
  min-width: 50px; 
 } 
```

上面的代码将不允许段落元素水平缩小到小于50px。

**例：**

```css
p { 
  max-width: 300px; 
  background-color: red; 
 } 
```

上面的代码不允许元素的宽度大于300px。

我希望这篇文章能帮助您熟悉CSS高度和宽度尺寸。我在下面列出了一些链接，如果您想了解更多关于这些属性的信息。

#### 更多信息：

*   CSS高度和宽度尺寸：https：//www.w3schools.com/css/css\_dimension.asp
*   CSS height属性：https：//www.w3schools.com/cssref/pr _dim_ height.asp
*   CSS宽度属性：https：//css-tricks.com/almanac/properties/w/width/
*   CSS长度：https：//developer.mozilla.org/en-US/docs/Web/CSS/length