---
title: Fonts
localeTitle: 字体
---
## 字体

CSS字体属性定义文本的字体系列，重量，大小，变体，行高和样式。

### 字体系列

只需使用`font-family`属性设置文本的`font-family` 。

它适用于_后备_系统，如果您的浏览器不支持第一个字体，它会尝试使用下一个字体，依此类推。如果字体的名称不止一个单词，则必须用引号括起来。

```css
p { 
    font-family: "Times New Roman", Times, serif; 
 } 
```

在上面的例子中，“Times New Roman”是字体，而“serif”是 。通用名称用作后备 如果姓氏不可用，则保留样式的机制。通用名称应始终是字体系列名称列表中的最后一项。通用 姓氏是serif，sans-serif，monospace，cursive，fantasy，system-ui。

### 字体样式

`font-style`属性可用于指定斜体文本。

此属性有3个值：

*   normal - 正常显示文本
*   斜体 - 以_斜体显示的_文字
*   斜 - 文字显示倾斜

```css
.normal { 
    font-style: normal; 
 } 
 
 .italic { 
    font-style: italic; 
 } 
 
 .oblique { 
    font-style: oblique; 
 } 
```

### 字体大小

`font-size`属性设置文本的大小。

有不同类型的字体大小值：

*   `px` （pixels） - 文本的默认大小为`16px`
*   `em` - `1em` =当前字体大小，因此`1em` = `16px` （由W3C推荐）
*   `small` ， `medium` ， `large` - 称为绝对大小值
*   `%` - 百分比

```css
.with-pixels { 
    font-size: 14px; 
 } 
 
 .with-ems { 
    font-size: 0.875em; 
 } 
 
 .with-absolute { 
    font-size: large; 
 } 
 
 .with-percentage { 
    font-size: 80%; 
 } 
```

### 字体重量

`font-weight`属性指定`font-weight`的粗细（或粗体）。接受的关键字（ `bold` ， `normal` ， `bolder` ， `lighter` ）或数字的关键词（ `100` ， `200` ， `300` ， `400`等） `400`是一样的`normal` 。

```css
p { 
   font-weight: bold 
 } 
```

### 字体响应

可以使用vw（视口宽度）单位设置文本大小。 这样，文本大小将遵循浏览器窗口的大小。

```html

<h1 style="font-size:10vw">Hello World</h1> 
```

`Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.`

### 字体变体

`font-variant`属性指定文本是否应以小型大写字体显示（其中所有小写字母都转换为大写字母，而字体大小小于文本中的原始大写字母）。

```css
p.small { 
  font-variant: small-caps; 
 } 
```

#### 更多信息：

*   [W3学校 - CSS字体](https://www.w3schools.com/css/css_font.asp)
*   [MND - CSS字体](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
*   [CSSFontStack](https://www.cssfontstack.com/)