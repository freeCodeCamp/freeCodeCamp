---
title:  CSS3 Colors
localeTitle:  CSS3颜色
---
## 颜色

CSS Colors是一个CSS模块，用于处理颜色，颜色类型，颜色混合和不透明度。不是所有的CSS属性都需要作为一个值是这个模块的一部分，但它们依赖于它。在CSS中，您可以更改HTML页面中几乎任何元素的颜色。 `background-color` ， `color`和`border-color`等属性设置这些元素的颜色。

CSS支持颜色名称，十六进制和RGB颜色。 除了引入`opacity`声明之外，现在可以使用颜色名称或RGB，HEX，HSL，RGBA，HSLA值来指定CSS3中的颜色。

HTML支持140种标准[颜色名称](https://www.w3schools.com/colors/colors_names.asp) 。

### RGB（A）

RGB代表“红色，绿色，蓝色”。 RGB值是红色，绿色和蓝色的强度值的组合。每个都在0（黑色）和255（全强度）之间。 RGBA颜色值是RGB颜色值的扩展，带有alpha通道 - 指定颜色的不透明度。 alpha参数是介于0.0（完全透明）和1.0（完全不透明）之间的数字。

RGB颜色值指定为：rgb（红色，绿色，蓝色） RGBA颜色值类似，最后位置的alpha值：rgba（红色，绿色，蓝色，alpha）

### HSL（A）

HSL代表“色调，饱和度和亮度”。 色调是色轮上的度数（从0到360）： 0（或360）为红色 120是绿色的 240是蓝色的 饱和度是一个百分比值：100％是全彩色。 亮度也是一个百分比; 0％为深色（黑色），100％为白色。 HSLA颜色值是HSL颜色值的扩展，带有alpha通道 - 指定颜色的不透明度。

HSL颜色值指定为：hsl（色调，饱和度，亮度）。 HSLA颜色值类似，最后位置的alpha值：hsla（色调，饱和度，亮度，alpha）

### CMYK

CMYK颜色是CYAN，MAGENTA，YELLOW和BLACK的组合。计算机屏幕使用RGB颜色值显示颜色。打印机通常使用CMYK颜色值显示颜色。 HTML不支持CMYK，但建议将其作为CSS4中的新标准。

示例颜色： CMYK红色：cmyk（0％，100％，100％，0％） CMYK绿色：cmyk（100％，0％，100％，0％） CMYK蓝色：cmyk（100％，100％，0％，0％）

### Hexcodes

Hexcode是十六进制代码的缩写，是一种向计算机表示颜色值的方法。它以这种方式命名，因为16个唯一符号可用作值。在这种情况下，使用数字0到9和字母a到f。

十六进制代码以这种格式表示：＃000000，在这种情况下将是黑色。使用前面提到的16个字符中的任何一个，在每个十六进制代码中使用六个字符。这六个字符分为三对，两对。

这三对表示特定颜色的红色，绿色和蓝色的值。取十六进制颜色＃AA11BB，AA为红色量，11为绿色量，BB为蓝色量。 0是颜色的最低值，而f是最高值。

十六进制代码不区分大小写，这意味着#FFFFFF和#ffffff将是相同的颜色：白色。

此外，使用十六进制代码有16,777,216种可能的颜色组合。

### 不透明度

CSS3 opacity属性设置整个元素的不透明度（背景颜色和文本都是不透明/透明的）。与使用rgba和hsla指定的alpha值不同，不透明度由子元素继承。

不透明度属性值必须是介于0.0（完全透明）和1.0（完全不透明）之间的数字。

#### 例子

```html

<html> 
  <body> 
    <p>Hello Moto</p> 
  </body> 
 </html> 
```

```css
body { 
  background-color: green; 
  color: white; 
 } 
```

在上面的示例中， `background-color: green`将`<body>`元素变为绿色。这会将整个网页变为绿色。 `<p>`元素在`color: white`后都是白色的`color: white`也是。 您可以使用命名颜色，如`green` ， `blue` ， `yellow` ， `red` ， `purple`等等。但对于自定义颜色，您可以使用十六进制代码（ `#147ACC` ），RGB值（ `rgb(20, 122, 204)` `#147ACC` ）），甚至HSL值（ `hsl(145, 59%, 30%)` ）。

```css
p { 
  color: rgba(244, 145, 14, 0.80); // bright orange 
 } 
 
 h2 { 
 color: #FA8072; //salmon 
 } 
```

您还可以为颜色添加Alpha值或透明度。透明度允许文本覆盖在图像上，并且stil可以通过文本部分地查看图像，或者如果文本的前面或后面没有其他元素，则可以使用透明度来更改颜色的阴影。使用`rgba()`或`hsla()`并填写颜色值。 alpha值最后是转换为小数的百分比。 （例如，20％是0.2,75％是0.75等）

```css
body { 
  background-color: hsl(184, 87%, 94%); // bright blue 
 } 
```

上图显示段落为鲜橙色和20％透明，h2元素为鲑鱼粉色，身体背景为亮蓝色。

要获得在CSS中使用的自定义颜色，您可能会发现颜色选择器很有用。一些文本编辑器具有内置颜色选择器，如Visual Studio Code。如果您在Google或DuckDuckGo上搜索“颜色选择器”，您将获得一个可以使用的颜色选择器。谷歌浏览器和Firefox也有可以安装的颜色选择器附加组件。 Adobe Color CC不仅可以帮助您选择颜色，还可以帮助您为网页选择颜色方案！通过使用WebAIM的颜色对比度检查器等工具，检查文本和背景颜色之间是否有足够的对比度是个好主意。

#### 更多信息：

[Adobe Color CC](https://color.adobe.com/) [Chrome网上应用店中的ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) [适用于Firefox的ColorZilla插件](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/) [探索不同的六角颜色](http://www.colorhexa.com/) [WebAIM颜色对比度检查器](https://webaim.org/resources/contrastchecker/) [Flat UI Colors](https://flatuicolors.com/) [Material Palette](https://www.materialpalette.com/) [Color Hunt](https://colorhunt.co/) [0to255](http://www.0to255.com/)
