---
title: Font Size Property
localeTitle: 字体大小属性
---
## 字体大小属性

### 定义和用法

`font-size`属性用于设置元素字体的大小。以下是此属性的默认语法。

```css
font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit; 
```

如上所示，此属性可以采用多个值。默认值为_medium_ ，从_xx-small_到_xx-large的_值将字体大小设置为从非常小到非常大（如服装尺寸）。 _较小_和_较大的_值将字体大小设置为小于父元素的字体大小，并分别大于父元素的字体大小。尽管有上述值，但最常用的值是长度单位。长度单位可以包括： **px** ， **％** ， **em** ， **rem**和**pt** 。

### 长度单位解释

#### PX

您可以使用\* _px_单位为元素设置固定的字体大小（以像素为单位）。一个像素是用户屏幕上的一个点。由于像素提供固定的字体大小，因此字体大小无法响应。这是一个负面因素，因为字体大小在不同的屏幕尺寸上可能看起来不太好，您必须使用媒体查询来缩放字体。

**例：**

```css
p { 
  font-size: 20px; 
 } 
```

**结果：** ![例一](https://image.prntscr.com/image/TI_29z3FRO20dJD2Dc7JJA.png)

#### ％

您可以使用百分比**％**单位设置相对于body元素字体大小的字体大小。默认值为16px，因此100％将等于16px。如果更改了正文的字体大小，则正文中包含的值为百分比的任何元素的字体大小也将更改。此单元允许在各种屏幕尺寸上缩放字体。

**例：**

```css
p { 
  font-size: 120%; 
 } 
```

**结果：** ![例二](https://image.prntscr.com/image/P9HTpWbETeyjZhxzf9z-SA.png) 上面的代码将字体大小更改为默认字体大小的120％，即16px。

#### EM

可以用于字体大小的另一个单元是**em**单元。一个**em**单位等于最近父元素的默认字体大小。这意味着2em将是字体大小的两倍，而4em将是字体大小的4倍。 **em**单元正在变得越来越流行，因为它可以扩展并且适合移动设备。

**例：**

```css
p { 
  font-size: 1.4em; 
 } 
```

**结果：** ![例三](https://image.prntscr.com/image/AeCJ0TCbRHqOTAFJ9CYNUQ.png) 上面的代码将段落的字体大小设置为其最近父节点（即body元素）的字体大小的1.4倍。 body元素的默认字体大小为16px，因此该段的字体大小为1.4 \* 16 = 22.4px。

#### REM

**rem**单元与**em**单元非常相似，但字体大小相对于根元素的默认字体大小。根元素是`<html>`元素。

**例：**

```css
html { 
    font-size: 12px; 
 } 
 p { 
    font-size: 1.4rem; 
 } 
```

**结果：** ![例四](https://image.prntscr.com/image/V5bn69UmSPOHSVM5YSAcyw.png) 上面的段落有1.4em的字体大小。这次根元素的字体大小已更改为12px，因此段落的字体现在为12 \* 1.4 = 16.8px。 **rem**单元不考虑body元素的字体，尽管它仍然是16px。

#### PT

字体大小的最终单位是点（ **pt** ）值。此值与文本的实际大小相关。一个**PT**等于在纸上1/72英寸，所以72pt等于1英寸。点值在纸上是准确的，但在不同的浏览器上看起来可能不同。仅当您需要打印具有精确字体大小的页面时，此单位才有用。 **pt**单元不可扩展。

**例：**

```css
p { 
  font-size: 16pt; 
 } 
```

**结果：** ![例五](https://image.prntscr.com/image/IyOOr_WCT963wa0DoWyoOg.png) 上面的字体大小是16pt。

如果您想阅读有关此主题的更多信息，我已在下面附上了一些文章链接。

#### 更多信息：

*   https://css-tricks.com/css-font-size/
*   https://www.w3schools.com/cssref/pr _font_ font-size.asp
*   https://css-tricks.com/confused-rem-em/
*   https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/