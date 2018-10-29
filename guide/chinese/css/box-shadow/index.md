---
title: Box Shadow
localeTitle: 盒子阴影
---
## 盒子阴影

`box-shadow`属性在元素的框架周围附加一个或多个阴影（可以在内部）。它是一个选项，让您有能力轻松设计精彩的阴影效果。框阴影是提升网页视觉效果的绝佳方式。

可以用几个属性描述盒子阴影，包括：

*   X和Y偏离元素
*   模糊和传播半径
*   颜色

### 句法：

```css
  div { 
    box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]# 
    } 
  ``` 
 * #### inset (default: none) 
 If not specified, the shadow is assumed to be a drop shadow (as if the box were raised above the content). 
 The presence of the `inset` keyword changes the shadow to one inside the frame 
 
 * #### offset-x offset-y 
 These are two `length` values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. `offset-y` specifies the vertical distance. Negative values place the shadow above the element. See `length` for possible units. 
 
 * #### blur-radius (default: 0) 
 This is a third `length` value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp). 
 
 * #### spread-radius (default: 0) 
 This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element). 
 
 * #### color 
 This value is used to set the color of the shadow, usually defined with hex `#000000`, rgba value `rgba(55,89,88,0.8)` or rgb value `rgb(55,89,88)` 
 
 #### Extended 
 
 To maximize compatibility, it is recommended that you declare box shadow property for `moz-appearance` and `webkit`, this extends the normal syntax to: 
```

CSS DIV { box-shadow：none | \[插图？ && \[ ？ ？ ？ \]\]＃ -moz-box-shadow：无| \[插图？ && \[ ？ ？ ？ \]\]＃ -webkit-box-shadow：none | \[插图？ && \[ ？ ？ ？ \]\]＃ }
```
However, this step can be ignored if it is creating confusion, as moz property and webkit property will only work in specific applications such as Firefox, and are not on a standards track. 
 
 ### Examples 
 
 #### Basic use 
```

CSS div { 宽度：200px; 身高：50px; 背景色：＃333; box-shadow：10px 10px 5px #ccc; }
```
10px - offset-x 
 10px - offset-y 
 5px -  blur 
 #ccc - light gray color 
 
 It will display 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow1.png) 
 
 #### Inside box shadow 
```

CSS div { 宽度：200px; 身高：50px; 背景色：＃333; box-shadow：inset 10px 10px 5px #ccc; }
```
It uses very similar code, but with inset value, which displays shadow inside the div element 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow2.png) 
 
 
 #### Multiple box shadows 
```

CSS div { 宽度：200px; 身高：50px; 背景色：＃333; box-shadow：inset 10px 10px 5px #ccc，10px 10px 5px #ccc; } \`\`\`

您可以使用逗号组合前两个框阴影，以在同一个div上获得多个框阴影

#### 更多信息

*   文件： [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)