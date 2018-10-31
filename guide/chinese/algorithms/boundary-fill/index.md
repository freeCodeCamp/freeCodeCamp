---
title: Boundary Fill
localeTitle: 边界填充
---
## 边界填充

边界填充是计算机图形中经常使用的算法，用于在具有相同边界的闭合多边形内填充所需颜色 所有方面的颜色。

最接近的算法实现是基于堆栈的递归函数。

### 工作：

问题非常简单，通常遵循以下步骤：

1.  取起点和边界颜色的位置。
2.  决定是否想要沿4个方向（N，S，W，E）或8个方向（N，S，W，E，NW，NE，SW，SE）行进。
3.  选择填充颜色。
4.  沿着那些方向旅行。
5.  如果您着陆的像素不是填充颜色或边界颜色，请将其替换为填充颜色。
6.  重复4和5，直到你到达边界内的任何地方。

### 某些限制：

*   对于多边形的所有边，边界颜色应该相同。
*   起点应在多边形内。

### 代码片段：
```
void boundary_fill(int pos_x, int pos_y, int boundary_color, int fill_color) 
 { 
   current_color= getpixel(pos_x,pos_y);  //get the color of the current pixel position 
   if( current_color!= boundary_color || currrent_color != fill_color) // if pixel not already filled or part of the boundary then 
   { 
     putpixel(pos_x,pos_y,fill_color);  //change the color for this pixel to the desired fill_color 
     boundary_fill(pos_x + 1, pos_y,boundary_color,fill_color);  // perform same function for the east pixel 
     boundary_fill(pos_x - 1, pos_y,boundary_color,fill_color);  // perform same function for the west pixel 
     boundary_fill(pos_x, pos_y + 1,boundary_color,fill_color);  // perform same function for the north pixel 
     boundary_fill(pos_x, pos_y - 1,boundary_color,fill_color);  // perform same function for the south pixel 
    } 
 } 
```

从给定的代码中，您可以看到，对于您登陆的任何像素，首先要检查是否可以将其更改为fill\_color，然后执行此操作 对于它的邻居，直到检查了边界内的所有像素。