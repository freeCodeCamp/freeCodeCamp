---
title: Overflow
localeTitle: 溢出
---
# 溢出

`overflow`属性指定当内容溢出元素的框时会发生什么（此属性仅适用于具有指定高度的块元素）。

此属性指定当元素的内容太大而无法放入指定区域时是剪辑内容还是添加滚动条。

例如，给定块级元素（ `<div>` ）设置为300px宽，包含400px宽的图像。图像将伸出div并默认可见。但是，如果溢出值设置为隐藏，则图像将以300px切断。

## 值

*   `visible` ：这是属性的默认值。当内容大于框时，内容不会被剪裁。
*   `hidden` ： `hidden`溢出的内容。
*   `scroll` ：与hidden类似，但用户将能够滚动隐藏的内容。
*   `auto` ：如果内容在其框外进行，则该内容将被隐藏，同时应该可以看到滚动条以供用户阅读其余内容。
*   `initial` ：使用可见的默认值。
*   `inherit` ：将溢出设置为其父元素的值。

## 例子

### 可见：

```css
.box-element { overflow: visible; } 
```

![示例图像](https://s26.postimg.org/gweu6g5yh/1-vissible.png)

### 隐：

```css
.box-element { overflow: hidden; } 
```

![示例图像](https://s26.postimg.org/l49mf77e1/2-hidden.png)

### 滚动：

```css
.box-element { overflow: scroll; } 
```

![示例图像](https://s26.postimg.org/d8z30dxrd/3-scroll.png)

### 汽车：

```css
.box-element { overflow: auto; } 
```

![示例图像](https://s26.postimg.org/z5q7ei0bt/4-autoank.png)

## overflow-x和overflow-y

*   `overflow-x` ：允许用户滚动超出box元素高度的内容。
*   `overflow-y` ：允许用户滚动超出框宽度的内容。

```css
  .box-element { 
    overflow-x: scroll; 
    overflow-y: auto; 
  } 
```

而`.box-element`将如下所示： ![示例图像](https://s26.postimg.org/ff2kmdfzd/5-_Xand_Y.png)

如果内容溢出Y轴，则该内容将被隐藏，同时应该可以看到滚动条以供用户阅读其余内容。

#### 更多信息：

CSS技巧： [溢出](https://css-tricks.com/almanac/properties/o/overflow/)