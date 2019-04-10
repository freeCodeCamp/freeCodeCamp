---
title: Point Size
localeTitle: 点大小
---
## 点大小

点大小是一种将标准化引入排版的方法。点大小是最小的测量单位。

在金属类型中，磅值是指铸造字体字符的金属主体的高度。在数字字体中，金属体被称为_em方形_的隐形盒取代。每个字符都适合于em square或em box。 **字体**的**em大小等于它的磅值。**

```css
html{ 
  font-size:16px; 
 } 
 
 body{ 
  font-size:1em;  // 1em is equal to 16px 
 } 
```

除了字体大小之外，点大小还用于测量前导（线高），线长和其他元素。  
在数字字体中， **一个点等于1/72英寸** 。十二点成为一个异食癖。六张皮卡制成一英寸。表示picas和积分的常用方法如下：

*   1 pica = 1p
*   1分= 1分或p1分
*   6皮卡和3点= 6p3
*   7分Open Sans，9分领先优势= 7/9 Open Sans

打印的最佳点尺寸通常在10-12点之间，而对于网页，最佳点尺寸在15-25点之间。 在CSS中，您应该将字体大小设置为ems或rems而不是像素，因为前者本质上是可伸缩的。最近，有很多关于使用新引入的单元vw和vh的流体排版的讨论。在此处了解更多信息： [流体排版](https://www.smashingmagazine.com/2016/05/fluid-typography/)

请记住，设置在相同点大小的不同字体由于其各自的特性（即x高度，笔划调制或对比度和字符宽度）而看起来不会具有相同的大小。

#### 更多信息：

*   [点大小](https://practicaltypography.com/point-size.html)实用排版
*   [点大小](https://en.wikipedia.org/wiki/Point_(typography))维基百科
*   [用类型](http://amzn.to/2yDqGNR)思维[与类型](http://amzn.to/2yDqGNR)思考