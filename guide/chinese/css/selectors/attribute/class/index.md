---
title: Class
localeTitle: 类
---
## 类

CSS“类”选择器用于将相同的样式应用于页面上的多个元素。想到这一点的好方法就像汽车或建筑的蓝图。在设计实际布局一次后，蓝图将允许您以相同的方式构建多个汽车或多个建筑物。

### 用例

与CSS“ID”不同，类名不是唯一的。因此，如果您希望这些元素应用相同的样式，则可以多次使用“类”。事实上，这将是您使用“类”的好时机。如果您希望HTML中的三个“div”元素具有蓝色背景，您可以在CSS中使用一次类，如示例中所示下面。
```
<html> 
 <style> 
  .blueBg { 
    background-color: blue; 
  } 
 </style> 
  <body> 
    <div class="blueBg"></div> 
    <div class="blueBg"></div> 
    <div class="blueBg"></div> 
  </body> 
 </html> 
```

#### 更多信息：

如果您想了解有关CSS“类”选择器的更多信息，请访问[此页面](https://css-tricks.com/the-difference-between-id-and-class/)