---
title: CSS3 Backgrounds
localeTitle: CSS3背景
---
## CSS3背景

CSS `background`速记属性用于定义多个属性，如：

`background-color` ， `background-image` ， `background-repeat` ， `background-attachment`和`background-position`

### 背景颜色

`background-color`属性指定元素的背景颜色。

```css
   background-color : #F00; 
```

### 背景图片

`background-image`属性指定要用作元素背景的图像。 默认情况下，图像重复自身以覆盖元素的整个表面。

```css
   background-image: url("GitHub-Mark.png"); 
```

### 背景图片 - 重复

默认情况下， `background-image`属性在X轴和Y轴上重复。 如果要设置轴，如X轴，请使用`background-repeat`属性类型：

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: repeat-x; 
```

但有时你不想在所有表面上都有背景，你可以通过输入以下内容来指定它：

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
```

### 背景图片 - 位置

您可以通过键入以下内容来指定背景的位置：

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position : left bottom; 
```

它会在元素的左下角设置背景。

### 背景图像 - 固定位置

如果您想要一个不会与页面其余部分一起滚动的背景图像，您可以使用`background-attachement`属性：

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position: left bottom; 
   background-attachment: fixed; 
```

### 速记财产

您可以在一个超级属性`background`传递所有属性：

```css
   background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom; 
```

使用速记属性时，您必须遵守此顺序：

1.  背景颜色
2.  背景图片
3.  背景重复
4.  背景附件
5.  背景位置

只要您尊重订单，如果缺少一处房产并不重要：

```css
   background: url("GitHub-Mark.png") no-repeat left bottom; 
```

即使缺少颜色和附件，这也会起作用。

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)