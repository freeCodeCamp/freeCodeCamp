---
title: Units
localeTitle: 单位
---
## 单位

许多CSS属性，如`width` ， `margin` ， `padding` ， `font-size`等需要很长的时间。 CSS有一种表达多个单元长度的方法。长度是数字和单位的组合，没有空格。例如`5px` ， `0.9em`等

### 长度

#### 常用长度单位

CSS使用几个单位来表示长度。所有浏览器都支持旧版本：

*   **rem** - “r”代表“root”：“root em” - ，它等于固定到根元素的字体大小（几乎总是`<html>` ）。
*   **vh**和**vw** - 许多响应式网页设计技术严重依赖于百分比规则。但是，CSS百分比度量并不总是解决所有问题的最佳方法。度量**vh**等于视口高度的1/100。因此，例如，如果浏览器的高度为800px，则1vh等于8px，同样，如果视口的宽度为650px，则1vw等于6.5px。
*   **vmin**和**vmax** - 这些单位与**vh**和**vw**的最大值或最小值有关。例如，如果浏览器设置为1200px宽，高度为600px，则1vmin为6px，1vmax为12px。但是，如果宽度设置为700px且高度设置为1080px，则vmin将等于7px且vmax为10.8px。
*   **ex**和**ch** - 这些单位与**em**和**rem**类似，依赖于当前的字体和字体大小。但是，与**em**和**rem**不同，这些单元还依赖于`font-family`因为它们是根据每种字体特有的度量来确定的。 **ch**单位（“字符单位”）被定义为字符零（“0”）的宽度。 **ex**单位定义为“当前字体的当前x高度或1em的一半”。给定字体的height-x是该字体的小写“x”的高度。它通常是字体的中间标记。

|单位|说明| | --------------- | ----------------------- | | em | 1 em是使用它的元素上font-size的计算值。 | | ex | 1 ex是当前字体的x高度。 x高度通常（但不总是，例如，如果字体中没有'x'）等于小写'x'|的高度。 | ch | 1 ch是当前字体中'0'（零）字形的前进。 'ch'代表人物。 | | rem | 1 rem是文档根元素的font-size属性的计算值 | vw | 1vw是视口宽度的1％。 'vw'代表'视口宽度'。 | | vh | 1vh是视口高度的1％。 'vh'代表'viewport height'。 | | vmin |等于'vw'或'vh'|中较小的一个 | vmax |等于'vw'或'vh'|中的较大者

CSS中有两种用于长度和大小的单位：相对和绝对。

### 相对单位

相对单位相对于元素的当前字体大小或其他设置而变化。一些相关单位是

*   `em`
*   当前元素的`font-size`的大写字母M的宽度。
*   字体大小从父元素继承。
*   例： `html div { font-size: 16px; } div h3 { font-size: 2rem; }` 这里`<h3>`将等于`32px`因为当前或父元素的`font-size`是`16px` 。
*   `rem`
*   root `em` ，或默认基本`font-size`的大写字母M的宽度。
*   父字体大小无效。
*   例： `html body { font-size: 16px; } p { font-size: 1.5rem; }` 由于默认基本`font-size`为`16px`因此`<p>`将等于`24px` 。
*   `%`
*   相对于父母大小的百分比大小。
*   例： `html div { width: 400px; } div p { width: 75%; }` 由于父级的宽度为`400px` ，内部段的宽度将为`300px` ，即`400px` 75％。
*   `vw`
*   视图宽度，或视口宽度的1/100
*   例： `html body { width: 100vw; }` `body`填充视口的宽度，无论是417像素，690像素还是任何宽度。
*   `vh`
*   视图高度，或视口高度的1/100
*   例： `html div { height: 50vh; }` 此`div`将填充视口高度的一半，无论是1080px，1300px还是任何高度。

### 绝对单位

无论屏幕尺寸或其他设置如何，绝对单位都是相同的。一些绝对单位是

*   `px`
*   像素
*   像素数相对于观看设备屏幕的质量
*   `in` ， `cm` ， `mm`
*   英寸，厘米，毫米
*   小屏幕或大屏幕上的英寸是一英寸
*   `pt` ， `pc`
*   分（1/72英寸）和皮卡（12分）

例

```html

p { 
  font-size: 24px; 
 } 
 div { 
  width: 3in; 
  border-width: 3pt; 
 } 
```

`font-size: 24px`段落将在手机，平板电脑或桌面屏幕上显示为24px。

`div`将显示为3英寸宽，无论屏幕大小如何， `div`上的`border`将为3/72英寸厚。

### 更多信息：

*   [Web平台了解像素和其他CSS单位](https://webplatform.github.io/docs/tutorials/understanding-css-units/)
*   [MDN Web Docs - CSS单位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
*   [网页设计教程]('https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)
*   [CSS单元的HTML帮助](http://www.htmlhelp.com/reference/css/units.html)