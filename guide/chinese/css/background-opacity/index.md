---
title: Background Opacity
localeTitle: 背景不透明度
---
## 背景不透明度

opacity 属性指定元素的不透明度/透明度，即元素后面的内容可见的程度。

opacity 属性的值可以是 0.0 - 1.0 。值越低，越透明：

[在此](https://www.w3schools.com/css/css_image_transparency.asp)了解更多详情

您可以控制一个元素有多透明。
您必须添加以下CSS属性才能实现透明度级别。

**完全不透明**

```css
.class-name { 
  opacity: 1; 
} 
 
或者
 
.class-name { 
  opacity: 1.0; 
} 
```

**半透明**

```css
.class-name { 
  opacity: 0.5; 
} 
Opacity 可以是 0 到 1 之间的任何值; 
```

**透明**

```css
.class-name { 
  opacity: 0; 
} 
 
或者 
 
.class-name { 
  opacity: 0.0; 
} 
```

或者，您可以这样使用透明的 rgba 值： 

```css
.class-name{
  background-color: rgba( 0, 0, 0, .5);
}
```
 
上例中将背景设置为不透明度为50％的黑色。 rgba 值的最后一个值是 alpha 值。 alpha 值为 1 就是 100％ ， 0.5 （简写为 .5 ）就是 50％ 。我们使用此方法为元素添加透明度而不影响内部内容。

[用于显示背景不透明度范围的 codepen 示例](https://codepen.io/lvcoulter/full/dVrwmK/)

#### 更多信息：

有关更多信息，请访问 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity) [CSS-Tricks 的 Opacity CSS 属性](https://css-tricks.com/almanac/properties/o/opacity/)

浏览器支持： [caniuse](https://caniuse.com/#search=opacity)
