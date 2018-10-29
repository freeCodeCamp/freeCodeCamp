---
title: Us State Map Visualization Using D3js
localeTitle: 我们使用D3js的状态图可视化
---
![截屏2016-05-19 at 6 29 43 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a4a31935c10185c660c713ba7651a30e0a11f1e8.png)

## 项目说明：

**我们有美国各州的样本数据：美国各州**报告的严重事故数量。

_我们将这些数据分为三类：_一个月报告的最低数量，一年中平均报告的事故数和一个月内报告的最高数，如下面的样本数据所示。

我们想要绘制一个美国地图并可视化这些数据，这样当我们将鼠标悬停在一个状态上时，它应该显示该特定状态的数据。

## 样本数据：

`AZ: 13 41 57`

`CA: 41 60 81`

`NY: 6 35 54`等等。

## 提示和资源：

### 分步说明：

*   首先，我们需要创建一张美国地图。
    
    1.  您可以使用像 - [Stately](https://intridea.github.io/stately/)这样的来源从头开始创建地图[。](https://intridea.github.io/stately/)
        
    2.  从[freehtml5maps](http://freehtml5maps.com)获取已创建的地图或使用此[Javascript](http://bl.ocks.org/NPashaP/raw/a74faf20b492ad377312/3513ad985b2fa93ea35f2fc864cb30540c298171/uStates.js)
        
*   将地图添加到用于可视化的主要JavaScript中
    

例如， `(script src="uStates.js")(/script) (!-- creates uStates. --)`

*   创建Div标签以保存工具提示并创建SVG以保存地图。

例如，

`javascript (div id="tooltip")(/div) (svg width="960" height="600" id="statesvg")(/svg)`

*   创建工具提示功能以在工具提示div中创建html内容字符串。

这个工具提示函数将返回一个表，只要我们将鼠标悬停在状态上，就会显示该表。表格应该是这样的（如第一张图所示）：Arizona Low 13 Average 41 High 57

*   使用数据和工具提示函数在id上绘制状态（在我们的示例中为#statesvg）。

例如， `uStates.draw("#statesvg", sampleData, tooltipFunc);`

**最终输出将是这样的:(鼠标悬停在加利福尼亚州）**

![屏幕截图2016-05-19在6 37 57 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2c17548386b8591d84ac8f2541fecd8d68e7365c.png)

## 参考文献：

1.  [**D3.js**](https://d3js.org)示例和文档。
2.  [**NPashaP GitHub**](https://github.com/NPashaP)
3.  [**庄严**](https://intridea.github.io/stately/)
4.  [**FreeHTML5Maps**](http://freehtml5maps.com)