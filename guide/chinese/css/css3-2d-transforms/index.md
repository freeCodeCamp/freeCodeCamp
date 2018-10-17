---
title: CSS3 2d Transforms
localeTitle: CSS3 2d变换
---
## CSS3 2d变换

CSS3变换允许您平移，旋转，缩放和倾斜元素。

变换是一种让元素改变形状，大小和形状的效果 位置。

CSS3支持2D和3D转换。

## 浏览器支持2D变换

表中的数字指定了完全支持的第一个浏览器版本 财产。

数字后跟-ms-， - webkit-，-moz-或-o-指定第一个版本 使用前缀。

|财产| Chrome | IE | Firefox | Safari |歌剧| | --------------------------------------- | ---------------------- | ------------------ | ------------------- | -------------------- | -------------------------------------------- | |变换| 36.0 4.0 -webkit- | 10.0 9.0 -ms- | 16.0 3.5 -moz- | 9.0 3.2 -webkit- | 23.0 15.0 -webkit- 12.1 10.5 -o- | |变换原点 （双值语法）| 36.0 4.0 -webkit- | 10.0 9.0 -ms- | 16.0 3.5 -moz- | 9.0 3.2 -webkit- | 23.0 15.0 -webkit- 12.1 10.5 -o- |

## CSS3 2D变换

方法：

*   `translate()`
*   `rotate()`
*   `scale()`
*   `skewX()`
*   `skewY()`
*   `matrix()`

## translate（）方法

`translate()`方法将元素从其当前位置移开（相应地 给出了X轴和Y轴的参数。

以下示例将`<div>`元素向右移动50个像素，然后移动100个像素 从当前位置向下的像素：

### 例：

```css
div { 
  -ms-transform: translate(50px, 100px); /* IE 9 */ 
  -webkit-transform: translate(50px, 100px); /* Safari */ 
  transform: translate(50px, 100px); 
 } 
```

## rotate（）方法

`rotate()`方法顺时针或逆时针旋转元素 根据给定的程度。

以下示例以20度顺时针旋转`<div>`元素：

### 例：

```css
div { 
  -ms-transform: rotate(20deg); /* IE 9 */ 
  -webkit-transform: rotate(20deg); /* Safari */ 
  transform: rotate(20deg); 
 } 
```

使用负值将逆时针旋转元素。

以下示例使用20逆时针旋转`<div>`元素 度：

### 例：

```css
div { 
  -ms-transform: rotate(-20deg); /* IE 9 */ 
  -webkit-transform: rotate(-20deg); /* Safari */ 
  transform: rotate(-20deg); 
 } 
```

## scale（）方法

`scale()`方法增加或减少元素的大小（根据 给出的宽度和高度参数）。

以下示例将`<div>`元素增加到其两倍 原始宽度，原始高度的三倍：

### 例：

```css
div { 
  -ms-transform: scale(2, 3); /* IE 9 */ 
  -webkit-transform: scale(2, 3); /* Safari */ 
  transform: scale(2, 3); 
 } 
```

以下示例将`<div>`元素减少为原始元素的一半 宽度和高度：

### 例：

```css
div { 
  -ms-transform: scale(0.5, 0.5); /* IE 9 */ 
  -webkit-transform: scale(0.5, 0.5); /* Safari */ 
  transform: scale(0.5, 0.5); 
 } 
```

## skewX（）方法

`skewX()`方法沿X轴倾斜元素给定的角度。

以下示例将`<div>`元素沿X轴倾斜20度：

### 例：

```css
div { 
  -ms-transform: skewX(20deg); /* IE 9 */ 
  -webkit-transform: skewX(20deg); /* Safari */ 
  transform: skewX(20deg); 
 } 
```

## skewY（）方法

`skewY()`方法沿Y轴倾斜元素给定角度。

以下示例将`<div>`元素沿Y轴倾斜20度：

### 例：

```css
div { 
  -ms-transform: skewY(20deg); /* IE 9 */ 
  -webkit-transform: skewY(20deg); /* Safari */ 
  transform: skewY(20deg); 
 } 
```

## skew（）方法

`skew()`方法沿着X轴和Y轴倾斜给定角度的元素。

以下示例将`<div>`元素沿X轴倾斜20度，并且 沿Y轴10度：

### 例：

```css
div { 
  -ms-transform: skew(20deg, 10deg); /* IE 9 */ 
  -webkit-transform: skew(20deg, 10deg); /* Safari */ 
  transform: skew(20deg, 10deg); 
 } 
```

如果未指定第二个参数，则其值为零。那么，以下 示例将`<div>`元素沿X轴倾斜20度：

### 例：

```css
div { 
  -ms-transform: skew(20deg); /* IE 9 */ 
  -webkit-transform: skew(20deg); /* Safari */ 
  transform: skew(20deg); 
 } 
```

## matrix（）方法

`matrix()`方法将所有2D变换方法合并为一个。

matrix（）方法采用六个参数，包含数学函数 允许您旋转，缩放，移动（平移）和倾斜元素。

参数如下： 矩阵（将scaleX（），skewY（），如果skewX（），的scaleY（），平移X（），平移Y（））

### 例：

```css
div { 
  -ms-transform: matrix(1, -0.3, 0, 1, 0, 0); /* IE 9 */ 
  -webkit-transform: matrix(1, -0.3, 0, 1, 0, 0); /* Safari */ 
  transform: matrix(1, -0.3, 0, 1, 0, 0); 
 } 
```

## CSS3转换属性

下表列出了所有2D变换属性：

|财产|说明| | ---------------- | -------------------------------------------------- ------- | |变换|对元素应用2D或3D变换 |变换起源|允许您更改转换元素的位置

## 二维变换方法

|功能|说明| | --------------------- | -------------------------------------------------- ----------------------- | |矩阵（n，n，n，n，n，n）|使用六个值的矩阵定义2D变换 | translate（x，y）|定义2D平移，沿X轴和Y轴移动元素 | translateX（n）|定义2D平移，沿X轴移动元素 | translateY（n）|定义2D平移，沿Y轴移动元素 | scale（x，y）|定义2D比例变换，更改元素的宽度和高度 | scaleX（n）|定义2D比例变换，更改元素的宽度| | scaleY（n）|定义2D比例变换，更改元素的高度| |旋转（角度）|定义2D旋转，角度在参数|中指定 |歪斜（x角，y角）|定义沿X轴和Y轴的2D倾斜变换 | skewX（角度）|定义沿X轴的2D倾斜变换 | skewY（角度）|定义沿Y轴|的2D倾斜变换

## 更多信息：

*   https://css-tricks.com/almanac/properties/t/transform/
*   https://www.w3schools.com/css/css3\_2dtransforms.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/transform