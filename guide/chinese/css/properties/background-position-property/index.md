---
title: Background Position Property
localeTitle: 背景位置属性
---
## 背景位置属性

background-property设置背景图像应该从哪里开始的位置。换句话说，此属性将采用x值和y值，并将从点`(x, y)`开始图像。

**例：**

```css
/* setting background-image of HTML doc */ 
 body { 
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png'); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

默认情况下，background-position属性设置为`0% 0%` 。

**物业价值：**

`background-position: x-value y-value`其中，

_x值_ ： `left | center | right | x% | x px` ，和

_y值_ ： `top | center | bottom | y% | y px` 。

其他允许的属性值是`initial`和`inherit` 。

`initial` ：将此属性设置为其默认值。

`inherit` ：继承父元素的值。

**注意：**当background-property只有一个值时，另一个值默认设置为`center` 。

**其他资源：**

MDN文档：https：//developer.mozilla.org/en-US/docs/Web/CSS/background-position