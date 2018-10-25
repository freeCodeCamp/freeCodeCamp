---
title: Font Weight and Style
localeTitle: 字体重量和样式
---
## 字体重量和样式

字体粗细可以写为文本值：
```
font-weight: normal; 
 font-weight: bold; 
```

或者作为`100`到`900`的数值（以100的倍数表示）：
```
font-weight: 400;  /* equal to 'normal' above */ 
 font-weight: 700; /* equal to 'bold' above */ 
```

数值及其共同描述

|价值|共同描述| | ----- | ---------------------------- | | 100 |薄（发际线）| | 200 |超轻（超轻）| | 300 |光| | 400 |正常| | 500 |中| | 600 |半大胆（Demi Bold）| | 700 |大胆| | 800 |额外大胆（超大胆）| | 900 |黑色（重）|

并非所有字体都可以使用所有权重。某些专用字体可能仅在一个重量（通常为`normal` `400` ）中可用。

也可以相对于元素的父元素指定字体粗细（如果字体具有多个权重）：
```
font-weight: lighter; 
 font-weight: bolder; 

```