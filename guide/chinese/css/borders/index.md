---
title: Border Property
localeTitle: 边框属性
---
## 边框属性

## CSS边框

我们个人最喜欢的CSS属性允许您完全自定义HTML元素周围出现的边框。使用HTML，过去不可能在元素周围放置边框，除了表格。与HTML的过时方法相比，CSS Borders可以让您创建清晰，自定义的边框样式，而且工作量很少。

`border`简写属性在一个声明中设置所有边框属性。 \`\`\`CSS 边框：1px solid ＃000;
```
The properties that can be set, are (in order): 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 It does not matter if one of the values above are missing, for example: 
```

CSS 边界：纯红色;
```
The above code is also valid CSS. 
 
 ### Border Styles 
 
 The `border-style` property sets a wide range of different types of borders. 
 
 The various values are: 
 - `dotted` - Sets a dotted border. 
 - `dashed` - Sets a dashed border. 
 - `solid` - Sets a solid border. 
 - `double` - Sets a double border. 
 - `groove` - Sets a 3D grooved border. 
 - `ridge` - Sets a 3D ridged border. 
 - `inset` - Sets a 3D inset border. 
 - `outset` - Sets a 3D outset border. 
 - `none` - Sets no border. 
 - `hidden` - Sets a hidden border. 
 
 Based on the property you choose, these styles can be mismatched. 
 You can style each side seperately: 
```

CSS border-top-style：solid; border-left-style：dotted; border-right-style：dashed; border-bottom-style：double;
```
Or you can style them all at once: 
```

CSS 边框式：实心虚线双点;
```
As shown, the border property allows you to select different sections of it. [top, bottom, left, right] 
 
 ### Border Width 
 
 To alter the thickness of your border use the border-width attribute. You may use key terms or exact values to define the border width. Note: You must 
 define a border-style for the border to show up. The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined 
 values: thin, medium, or thick. 
 
 Example: 
```

CSS

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }
```
### Border Color 
 
 Now for the creative aspect of CSS Borders! With the use of the border-color attribute, you will be able to create customized borders to fit the flow and layout 
 of your website. Border colors can be any color defined by RGB, hexadecimal, or key terms. Below is an example of each of these types. 
 
 Example: 
```

CSS

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }
```
### Border-Radius 
 The `border-radius` property allows the corners of a border to be rounded. This is done by providing a size for 
 how much the border is to be rounded. Size can be in px or %. 
```

CSS border-radius：25px;
```
Each corner of `border-radius` can be adjusted. The order is top, bottom, left, right. 
```

CSS border-radius：15％10px 30％5px;
```
### Border: All in One 
 
 While it is nice that CSS allows a web developer to be very specific in creating a customized border, sometimes it is just easier and less of a headache to create a uniform border, all in single line of CSS code. 
 
 Example: 
```

CSS

p { border: 20px outset blue; } h4 { border: 5px solid; } h5 { border: dotted; }

\`\`\`

### 更多信息：

*   [MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [CSS3边界半径](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### 其他边界属性

*   'border-radius' - 这可以设置边框的半径。
*   'border-spacing' - 这可以设置文本和边框之间的间距。
*   'border-image' - 将图像设置为边框。

浏览器支持：IE6 +
