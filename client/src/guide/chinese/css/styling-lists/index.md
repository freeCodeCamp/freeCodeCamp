---
title: Styling Lists
localeTitle: 样式列表
---
## 样式列表

### HTML列表回顾

HTML中有两种主要类型的列表 - **有序**和**无序** 。

在**有序**列表（ `<ol></ol>` ）中，列表项的顺序很重要。这些项目可以按数字，罗马数字，字母数字或其他类型的标记顺序出现。有序列表的默认标记是数字（或`decimal` ）：

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true "有序清单")

在**无序**列表（ `<ul></ul>` ）中，列表项的顺序无关紧要。项目以项目符号格式显示。无序列表的默认标记是圆形项目符号或`disc` 。

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true "无序列表")

使用`<li></li>`标记创建有序或无序列表中的每个列表项。

### 列表特定样式

特定于样式列表的常用属性有三种： `list-style-type` ， `list-style-position`和`list-style-image` 。还有一个速记属性，包括所有三个。

#### `list-style-type`

出现在有序和无序列表中的标记（或项目符号点）可以通过多种方式设置样式。用于样式化标记类型的CSS属性是`list-style-type` 。有序列表的默认`list-style-type`值是`decimal` ，而无序列表的默认值是`disc` 。

有序列表示例：

> ```css
> /* css */ 
>  ol { 
>   list-style-type: upper-roman; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true "list-style-type upper-roman")

无序列表示例：

> ```css
> /* css */ 
>  ul { 
>   list-style-type: square; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true "list-style-type square")

没有标记示例：

> ```css
> /* css */ 
>  ul { 
>   list-style-type: none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true "list-style-type none")

`list-style-type`属性的可接受值包括：

_无序：_

*   光盘（ _默认_ ）
*   圈
*   广场

_排序：_

*   十进制（ _默认_ ）
*   小数领先的零
*   低罗马
*   上罗马
*   降低希腊
*   较低的拉丁
*   上拉丁
*   亚美尼亚
*   格鲁吉亚
*   下-α
*   上-α

_其他：_

*   没有

注意：上面列出的所有属性值都可用于为有序列表和无序列表设置样式（例如：带有`square`列表标记的有序列表）。

#### `list-style-position`

`list-style-position`控制列表标记是出现在每个列表项元素的内部还是外部（ `<li></li>` ）。该属性接受两个值， `outside` （默认）或`inside` 。

将标记`outside`列表项元素`outside` ，每个列表项的所有文本行和子行将垂直对齐：

> ```css
> /* css */ 
>  ul { 
>   list-style-position: outside; /* default */ 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true "list-style-position outside")

将标记`inside` ，每个列表项的第一个文本行将缩进，以便为标记腾出空间。相同列表项的任何子行都将与标记对齐，而不是与第一个文本行对齐：

> ```css
> /* css */ 
>  ul { 
>   list-style-position: inside; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true "list-style-position inside")

#### `list-style-image`

`list-style-image`属性接受图像URL代替列表标记。此属性的默认值为`none` 。

> ```css
> /* css */ 
>  ul { 
>   list-style-image: url(https://url-to-image); 
>  } 
> 
> ```

#### `list-style`速记

`list-style`是上面列出的三个样式属性的简写属性。 `list-style`接受的值的顺序是`list-style-type` ， `list-style-position`和`list-style-image` 。如果省略任何值，将使用该属性的默认值。

> 例：
> 
> ```css
> /* css */ 
>  ul { 
>   list-style: circle inside none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true "列表式速记")

#### 更多列表特定的样式

有序列表标签还接受控制其列表项的流量，计数或特定标记值的属性。这些包括`start` ， `reversed`和`value`属性。有关更多详细信息，请参阅下面列出的MDN资源。

### 一般造型

列表内容可以像其他`p`或`div`元素一样进行样式设置。 `color` ， `font-family` ， `margin` ， `padding`或`border`只是可以添加到`ul` ， `ol`或`li`元素的属性的几个示例。

请注意，添加到`ul`或`ol`元素的任何样式都将影响整个列表。直接添加到`li`元素的样式将影响单个列表项。在下面的示例中，border和background-color属性在list和list item元素之间的样式不同：

> ```css
> /* css */ 
>  ul { 
>   list-style-type: circle; 
>   border: 2px solid blue; 
>   background-color: lightblue; 
>  } 
>  li { 
>   margin: 5px; 
>   background-color: lightyellow; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-styles.png?raw=true "列表式的一般造型")

#### 列表间距

当`list-style-type`设置为`none`时，您可能会注意到列表项前面有额外的间距。在list元素上将`padding`设置为`0` （或者首选任何间距）将覆盖此默认填充。

> ```css
> /* css */ 
>  ul { 
>   list-style: none; 
>   padding: 0; 
>  } 
>  li { 
>   padding: 5px 10px; 
>   background-color: #EEEEEE; 
>   border: 1px solid #DDDDDD; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true "列表式的一般造型")

* * *

#### 资料来源：

下面的链接在本文中的编译信息中引用。有关此主题的更多详细信息，请访问它们。

#### 更多信息：

[MDN - 样式列表](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - CSS列表](https://www.w3schools.com/css/css_list.asp)

[CSS技巧 - 列表样式](https://css-tricks.com/almanac/properties/l/list-style/)