---
title: Background
localeTitle: 背景
---
## 背景

background属性允许您使用图像和颜色为网页创建背景。

### 背景颜色

背景颜色属性允许您选择元素的颜色。这可以是整个页面的背景或页面一个部分的背景。

*   元素是一段HTML，例如网页上的标题或段落。

以下是将网页的背景颜色设置为绿色的示例。

```css
  body { 
    background-color: green; 
  } 
```

![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

以下是为两个元素设置颜色的示例。这将设置标题的背景 到紫色，页面的其余部分为蓝色。

```css
  body { 
    background-color: blue; 
  } 
  h1 { 
    background–color: purple; 
  } 
```

![twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

在CSS中，颜色可以通过三种方式定义：

*   有效的颜色名称，例如`blue`
*   HEX值，例如`#FFFFFF` （这是白色的十六进制值。）
*   RGB值，例如`rgb(76,175,80)` （这是浅绿色的RGB值。）

### 背景图片

您可以使用背景图像属性将图像设置为元素的背景。 默认情况下会重复该图像，以便覆盖整个元素。

```css
body { 
  background-image: url("barn.jpg"); 
 } 
```

![图片](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)

您还可以使用他们的链接链接您在线找到的图片或GIF（即从Google图像搜索）。

```css
body { 
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif"); 
 } 
```

### 背景图像 - 重复属性

默认情况下，背景图像垂直（上下）和水平（跨网页）重复。 您可以使用background-repeat属性垂直或水平重复图像。

这是一个垂直重复图像的示例。

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-y; 
 } 
```

![垂直](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

您可以通过将background-repeat属性设置为“repeat-x”来水平重复图像。

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: repeat-x; 
 } 
```

您还可以使用background-repeat属性将图像设置为不重复。

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
 } 
```

![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### 背景图片 - 位置属性

您可以使用position属性指定图像在网页上的位置。

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

![位置](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### 背景图像 - 固定位置

您可以使用background-attachment属性将图像设置为固定位置。 固定位置使得图像不会与页面的其余部分一起滚动。

```css
body { 
  background-image: url("barn.jpg"); 
  background-repeat: no-repeat; 
  background-position: right top; 
  background-attachment: fixed; 
 } 
```

![固定](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### 背景渐变

渐变是两种或更多种颜色之间的过渡，可以通过类似于背景图像的CSS使用。

渐变背景的语法可能非常复杂，并且由于支持的浏览器之间的不一致，因此通常仍与供应商前缀一起使用。

[Colorzilla Gradient Editor](http://www.colorzilla.com/gradient-editor/)是一个很棒的在线工具，用于生成自定义渐变和相关的css标记。

### 背景 - 速记属性

您可以在一行中编写背景属性。这被称为速记属性。

```css
body { 
  background: url("barn.jpg") no-repeat right top; 
 } 
```

使用速记属性但属性时，可以省略不需要的属性 必须按特定顺序使用。订单是：

*   颜色
*   图片
*   重复
*   附件
*   位置

### 多个背景图像

您可以在单个背景属性中指定多个背景图像。

```css
body { 
  background: url("barn.jpg"), url("stars.jpg"), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)); 
 } 
```

指定的第一个图像（或渐变）位于顶部，第二个位于后面，依此类推。 如果其中一个元素由于其URL或语法而不正确，则浏览器将忽略整行。

### CSS的一些基本背景属性

CSS背景属性用于定义元素的背景效果。

CSS背景属性： 背景颜色 背景图片 背景重复 背景附件 背景位置

您可以参考W3学校的以下链接，了解有关CSS中背景和相关内容的更多信息。 [背景参考W3](https://www.w3schools.com/css/css_background.asp)

### 其他资源

*   [颜色值列表](http://cloford.com/resources/colours/500col.htm)
*   [拾色器工具](http://colrd.com/create/palette/)
