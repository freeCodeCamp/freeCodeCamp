---
title: Li Tag
localeTitle: 李标
---
## 李标

`<li>`标签定义列表中的列表项。 `<li>`标签可以与无序列表（ `<ul>` ），有序列表（ `<ol>` ）和菜单（ `<menu>` ）一起使用。

要定义列表项，请在`<li>`标记中包含所需元素。 `<li>`元素必须包含在作为列表的父元素中。

### 例

```html

<body> 
  <ul> 
    <li> 
      <p>I'm a list item</p> 
    </li> 
    <li> 
      <p>I'm a list item too</p> 
    </li> 
    <li> 
      <p>Me three/p> 
    </li> 
  </ul> 
 </body> 
```

在有序列表中， `<li>`显示为带有项目符号点的项目。

*   第一项
*   第二项
*   第三项

在无序列表中， `<li>`显示为编号项。

1.  第一项
2.  第二项
3.  第三项

可以使用_list-style-type_ CSS属性自定义此数字显示计数器。

例子：

```html

<!-- In a simple unordered list --> 
 <ul> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ul> 
 
 <!-- In a simple ordered list --> 
 <ol> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ol> 
 
 <!-- In a menu list --> 
 <menu> 
  <li>Menu item one</li> 
  <li>Menu item two</li> 
  <li>Menu item three</li> 
 </menu> 
```

### 属性

`<li>`元素具有以下元素：

#### 类型

`type`属性定义将在列表中使用的编号类型。以下值用于确定将使用的编号样式：

*   `1` ：数字
*   `a` ：小写字母
*   `A` ：大写字母
*   `i` ：小写数字
*   `I` ：大写数字

#### 例

```html

<body> 
  <ol type="I"> 
    <li>list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

以上HTMl将输出：

1.  项目清单
2.  项目清单
3.  项目清单

#### 值

`value`属性指定当前`<li>`的数字顺序。此属性仅接受数值，并且只能与有序列表一起使用。随后的任何列表项将根据`value`属性的数字输入以数字顺序排序。

#### 例

```html

<body> 
  <ol> 
    <li value="4">list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

上面的HTML将输出：

4.  项目清单
5.  项目清单
6.  项目清单

### 将另一个列表嵌套为项目

除了创建单个项目，您还可以使用`<li>`标签创建有序或无序的嵌套列表。为此，您可以_在_ `<li>`标记中嵌套`<ol>`或`<ul>` 。

这是一个带有嵌套有序列表的无序列表。

*   第一项
*   第二项

1.  第一个子项目
2.  第二个子项目

*   第三项

这是一个带有嵌套无序列表的有序列表。

1.  第一项
2.  第二项

*   第一个子项目
*   第二个子项目

1.  第三项

```html

<!-- An unordered list with a nested, ordered list. --> 
 <ul> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ul> 
 
 <!-- An ordered list with a nested, unordered list. --> 
 <ol> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ul> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ul> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ol> 
```

#### 更多信息：

*   [HTML <li>元素：MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
*   [HTML <li>标签：w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
*   [CSS list-style属性：CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)