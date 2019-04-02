---
title: Color Property
localeTitle: 颜色属性
---
## CSS颜色属性

您可以使用`color`属性设置元素中文本的颜色。

您可以使用多种方法声明颜色，例如：

*   按名称（注意：这仅适用于某些颜色）

```css
h1{ 
    color: blue; 
 } 
```

*   十六进制（指定为#rrggbb）

```css
h1{ 
    color:  #0000ff; 
 } 
```

*   RGB（指定为rgb（r，g，b））

```css
h1{ 
    color: rgb(0, 0, 255); 
 } 
```

*   RGBA（指定为rgba（r，g，b，alpha））

```css
h1{ 
    color: rgba(0, 0, 255, 0.5); 
 } 
```

*   HSL（色调，亮度，饱和度）

```css
h1{ 
    color: hsl(240, 100%, 50%); 
 } 
```

*   HSLA（色调，亮度，饱和度，Alpha）

```css
h1{ 
    color: hsl(240, 100%, 50%, 0.5); 
 } 
```

## CSS颜色属性解释

*   名称颜色：
    
    *   这些都是非常自我解释的。每种颜色都用它的名字表示。
*   十六进制：
    
    *   这些颜色由十六进制三元组表示。
    *   十六进制三元组是六位三字节十六进制数。
    *   三个字节中的每一个表示颜色#RRGGBB（红色，绿色，蓝色）。
    *   简写十六进制颜色由三位十六进制数字#RGB（红色，绿色，蓝色）表示。
*   RGB和RGBA颜色：
    
    *   RGB颜色是24位（3字节）颜色，由3个数字表示，范围为0-255。 （例如rgb（255,255,128））。
    *   RGBA颜色是32位（4字节）颜色，由0到255范围内的3个数字和控制不透明度的alpha值表示。 （例如rgb（255,255,128,0.3））。
*   HSL和HSLA颜色：
    
    *   HSL颜色由三个值（HUE，饱和度，亮度）表示。
    *   HSLA颜色由四个值（HUE，饱和度，亮度，Alpha）表示。 Alpha控制不透明度。

#### 更多信息

*   W3 Schools网站关于如何格式化[文本](https://www.w3schools.com/css/css_text.asp) 。
*   W3学校网站的[颜色](https://www.w3schools.com/colors/default.asp) 。
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color)上的颜色属性。
*   [w3.org](https://www.w3.org/wiki/CSS/Properties/color)上的[文档](https://www.w3.org/wiki/CSS/Properties/color) 。