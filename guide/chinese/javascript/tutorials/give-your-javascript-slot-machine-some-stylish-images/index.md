---
title: Give Your JavaScript Slot Machine Some Stylish Images
localeTitle: 给你的JavaScript老虎机一些时尚的图像
---
我们已经在一个名为images的数组中为你设置了图像。我们可以使用不同的索引来获取每个索引。

以下是我们如何设置第一个插槽以显示不同的图像，具体取决于其随机数生成的数字：
```
$($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">'); 

```