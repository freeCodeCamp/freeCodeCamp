---
title: Background Color Property
localeTitle: 背景颜色属性
---
## 背景颜色属性

您可以使用`background-color`属性设置元素的背景颜色。您可以使用颜色值（颜色名称，十六进制值，RGB / RGBA值，HSL / HSLA值）或关键字`transparent` 。

**例：**

```css
body { 
    background-color: crimson; 
 } 
 
 div { 
    background-color: #ffffff; 
 } 
 
 .myClass { 
    background-color: rgba(0, 0, 0, 0.5); 
 } 
```

#### 物业价值：

`background-color: color | transparent | initial | inherit;`

`color` - 指定背景颜色（颜色名称，十六进制值，RGB / RGBA值，HSL / HSLA值）。

`transparent` - 默认值。将背景颜色设置为透明。

`initial` - 将此属性设置为其初始值（默认值）。

`inherit` - 从其父元素继承此属性。

#### 更多信息：

[MDN网络文档](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color?v=b)