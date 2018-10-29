---
title: SVG
localeTitle: SVG
---
## SVG

SVG或可缩放矢量图形是用于在网页中定义基于矢量的图形的Web标准。基于XML，SVG标准提供标记来描述视口中的路径，形状和文本。标记可以直接嵌入到HTML中以供显示，也可以保存到`.svg`文件中，并像任何其他图像一样插入。您可以手动编写SVG，但可以在矢量图形编辑器（如Illustrator或InkScape）中设计更复杂的图形，并将其导出为SVG文件或代码。

## SVG基础知识

开发人员使用`<svg>`标记和XML命名空间启动SVG图形，如下所示：

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> 
 
 </svg> 
```

该示例还包含`version`属性。 `version`属性是可选的，但建议使用带有XML规范的complaince。

此示例不会显示任何内容，它只是建立了一个视口。您可以添加`height`和`width`属性来设置视口的显示大小，这实际上建立了一个供您使用的画布。

使用视口，您可以添加基本图形，文本和路径元素。

```svg
<svg 
     version="1.1" 
     width="100%" 
     viewbox="0 0 600 300" 
     xmlns="http://www.w3.org/2000/svg"> 
  <rect x="10" y="10" width="100" height="100" fill="#f7b2c1" /> 
  <circle cx="240" cy="60" r="50" fill="#c1b2f7" stroke="#b2c1f7" stroke-width="15"/> 
  <text x="450" y="70" font-size="20" text-anchor="middle">SVG Text is browser readable!</text> 
  <g stroke="#b2c1f7"> <!-- g is for group --> 
    <path stroke-width="2" d="M10 170 l590 0" /> 
    <path stroke-width="4" d="M10 190 l590 0" /> 
    <path stroke-width="6" d="M10 210 l590 0" /> 
  </g> 
 </svg> 
```

您可以看到输出并使用[此codepen中](https://codepen.io/SgiobairOg/pen/OxbNpW)的代码。

在开始的`svg`标记中，我们添加一个width属性来将视口的宽度设置为容器宽度的100％，您可以使用百分比或像素宽度。开放的svg标签还有`viewbox`属性，该属性定义了一个窗口，通过该窗口可以看到svg的元素，在这种情况下，视图框的范围从（0,0）到（600,300）。在SVG空间中，X轴从左侧开始为零，向右增加; Y轴从顶部开始为零，向下增加。

第一个新标记是`<rect />`标记，它在SVG视口中定义了一个矩形。在这种情况下，我们定义一个从顶部和左侧10个单位和100个单位高和宽的正方形。 `fill`属性设置形状的填充颜色。

接下来，我们使用`<circle />`标签定义圆形或椭圆形。样本定义了一个以（240,60）为中心的圆，半径为50个单位。 `stroke`和`stroke-width`属性设置笔触颜色和笔划大小。

您可以使用`text`标记向图形添加文本。示例文本从文本的中间锚定到（450,70）处，并且字体大小为20个单位。 SVG中文本的优点在于它可以与您的图形的其余部分一起扩展，但它仍然可以被浏览器和Web机器人读取。

如果要将相同的属性或CSS样式应用于多个SVG元素，可以使用`<g>`标记对它们进行分组。分配给`<g>`标记的属性（如示例中的`stroke`属性）将应用于组中的所有元素。在这种情况下，有三个`<path />`元素。

`<path />`元素定义视口中的矢量路径。路径由`d`属性定义。在第一个例子中，定义读取'移动到绝对坐标（10,170） _并_绘制一条线到X方向的相对坐标590和Y方向的0。

以下命令可用于创建路径：

M =搬到 L =行到 H =水平线到 V =垂直线到 Z =关闭路径 C =（三次贝塞尔曲线）曲线 S =平滑曲线 Q =二次贝塞尔曲线到 T =平滑的二次贝塞尔曲线 A =弧

### 画布元素

画布图形可以绘制到

元件。你可以给suchan元素的宽度和高度属性来确定它的大小（以像素为单位）。一个新的画布是空的，这意味着它是完全透明的，并且简单地说就是文档中的空白空间。 该

标签旨在支持不同的绘图风格。要访问实际的绘图界面，我们首先需要创建一个上下文，这是一个对象，其方法提供绘图界面。目前有两种广泛支持的绘图样式：“2d”用于二维图形和通过OpenGL界面用于三维图形的“webgl”。

通过getContext方法创建上下文

元件。
```
<p > Before canvas . </p > 
 < canvas width ="120" height ="60" > </ canvas > 
 <p > After canvas . </p > 
 < script > 
 var canvas = document . querySelector (" canvas ") ; 
 var context = canvas . getContext ("2 d ") ; 
 context . fillStyle = " red "; 
 context . fillRect (10 , 10 , 100 , 50) ; 
 </ script > 
```

![](http://www.crwflags.com/fotw/images/s/sly@stt.gif)

创建上下文对象后，该示例绘制一个红色矩形100 像素宽，50像素高，其左上角在坐标处 （10,10）。

### 绘制饼图

results变量包含一个表示对象的对象数组 调查回复。
```
var results = [ 
 { name : " Satisfied " , count : 1043 , color : " lightblue "} , 
 { name : " Neutral " , count : 563 , color : " lightgreen "} , 
 { name : " Unsatisfied " , count : 510 , color : " pink "} , 
 { name : " No comment " , count : 175 , color : " silver "} 
 ]; 
```

为了绘制饼图，我们绘制了许多饼图切片，每个切片由弧线和一对线条组成，位于该弧线的中心。我们可以通过将整圆（2π）除以响应的总数，然后将该数字（每个响应的角度）乘以选择给定选择的人数来计算每个弧所占用的角度。
```
< canvas width ="200" height ="200" > </ canvas > 
 < script > 
 var cx = document . querySelector (" canvas ") . getContext ("2 d ") ; 
 var total = results . reduce ( function ( sum , choice ) { 
 return sum + choice . count ; 
 } , 0) ; 
 
 // Start at the top 
 
 var currentAngle = -0.5 * Math . PI ; 
 results . forEach ( function ( result ) { 
 var sliceAngle = ( result . count / total ) * 2 * Math . PI ; 
 cx . beginPath () ; 
 // center =100 ,100 , radius =100 
 // from current angle , clockwise by slice ' s angle 
 cx . arc (100 , 100 , 100 , 
 currentAngle , currentAngle + sliceAngle ); 
 currentAngle += sliceAngle ; 
 cx . lineTo (100 , 100) ; 
 cx . fillStyle = result . color ; 
 cx . fill () ; 
 }) ; 
 </ script > 
```

这绘制了以下图表： ![](https://pbs.twimg.com/media/CTDvkA8UwAAdJg5.png)

### 浏览器支持

所有现代浏览器都提供[对SVG的浏览器支持](https://caniuse.com/#feat=svg) 。 IE 9到IE 11中存在一些缩放问题，但是可以通过使用`width` ， `height` ， `viewbox`和CSS来克服它们。

## 编者

*   [Vectr](https://vectr.com) - 免费提供和创建和编辑SVG图形的网络和桌面工具

## 用于创建SVG的工具

可用于以绘图程序的形式创建SVG的工具很少。

*   [Inkscape](https://www.inkscape.org/) - 它是一个开源工具，用于使用易于使用的图形界面进行最先进的矢量绘图。
*   [Adobe Illustrator](https://www.adobe.com/products/illustrator/) - Adob​​e Illustrator是Vector Imagery的商业工具。

有关更多工具，请参阅[支持SVG的W3C工具列表](https://https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)

## 为什么要使用SVG

作为矢量图像格式，它允许您调整图像大小而不会降低质量和特别轻的重量。 作为XML格式，它允许您从JavaScript的全部功能中受益，尤其是CSS。

## 资源

*   [W3C，可缩放矢量图形（SVG）1.1（第二版）](https://www.w3.org/TR/SVG/)
*   [Mozilla开发者网络，SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)