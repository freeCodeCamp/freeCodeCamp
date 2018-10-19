---
title: Background Opacity
localeTitle: 背景不透明度
---
## 背景不透明度

opacity属性指定元素的不透明度/透明度，即元素后面的内容可见的程度。

opacity属性的值可以是0.0 - 1.0。值越低，越透明：

[在此](https://www.w3schools.com/css/css_image_transparency.asp)查找更多详情

您可以选择在何种程度上使元素透明化。 您必须添加以下CSS属性才能实现透明度级别。

**完全不透明**

```css
.class-name { 
  opacity:1; 
 } 
 
 OR 
 
 .class-name { 
  opacity:1.0; 
 } 
```

**半透明**

```css
.class-name { 
  opacity:0.5; 
 } 
 Opacity value can be anything between 0 and 1; 
```

**透明**

```css
.class-name { 
  opacity:0; 
 } 
 
 OR 
 
 .class-name { 
  opacity:0.0; 
 } 
```

或者，您可以使用透明的rgba值，如下所示：

```css
.class-name {
  background-color: rgba (0,0,0,0.5);
}
```
上面的示例将背景设置为黑色，不透明度为50％。 rgba值的最后一个值是alpha值。 α值为1等于100％，0.5（简称为.5）则为50％。我们使用此方法为元素添加透明度而不影响内部内容。

[用于显示背景不透明度范围的codepen示例](https://codepen.io/lvcoulter/full/dVrwmK/)

#### 更多信息：

有关更多信息，请访问[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) [CSS-Tricks的Opacity CSS属性](https://css-tricks.com/almanac/properties/o/opacity/)

浏览器支持： [caniuse](https://caniuse.com/#search=opacity)
