---
title: Flood Fill Algorithm
localeTitle: 洪水填充算法
---
## 洪水填充算法

洪水填充是一种主要用于确定连接到多维阵列中给定节点的有界区域的算法。它是 与绘图程序中的桶工具非常相似。

最接近的算法实现是基于堆栈的递归函数，这就是我们要谈的内容 下一个。

### 它是如何工作的？

问题非常简单，通常遵循以下步骤：

1.  采取起点的位置。
2.  决定是否想要沿4个方向（ **N，S，W，E** ）或8个方向（ **N，S，W，E，NW，NE，SW，SE** ）行进。
3.  选择替换颜色和目标颜色。
4.  沿着那些方向旅行。
5.  如果您着陆的瓷砖是目标，请使用所选颜色重新获得。
6.  重复4和5，直到你到达边界内的任何地方。

我们以下面的数组为例：

![替代文字](https://github.com/firealex2/Codingame/blob/master/small%208%20grid%20paintefffd.png)

红色方块是起点，灰色方块是所谓的墙。

有关更多详细信息，请参阅此处描述该函数的代码：

```cpp
int wall = -1; 
 
 void flood_fill(int pos_x, int pos_y, int target_color, int color) 
 { 
 
   if(a[pos_x][pos_y] == wall || a[pos_x][pos_y] == color) // if there is no wall or if i haven't been there 
      return;                                              // already go back 
 
   if(a[pos_x][pos_y] != target_color) // if it's not color go back 
      return; 
 
   a[pos_x][pos_y] = color; // mark the point so that I know if I passed through it. 
 
   flood_fill(pos_x + 1, pos_y, color);  // then i can either go south 
   flood_fill(pos_x - 1, pos_y, color);  // or north 
   flood_fill(pos_x, pos_y + 1, color);  // or east 
   flood_fill(pos_x, pos_y - 1, color);  // or west 
 
   return; 
 
 } 
```

如上所示，我的出发点是（4,4）。在调用起始坐标**x = 4**和**y = 4**的函数后， 我可以开始检查当场是否有墙壁或颜色。如果这是有效的我用一个**“颜色”**标记斑点 并开始检查其他的adiacent正方形。

向南走，我们将指向（5,4）并且该功能再次运行。

### 运动问题

我一直认为使用新学习的算法解决（或更多）问题是完全理解的最佳方式 这个概念。

所以这是一个：

**声明：**

在二维数组中，您将获得n个**“孤岛”** 。试着找到岛上最大的区域 相应的岛号。 0标记水和1和n之间的任何其他x标记距表面对应的一个方格 到岛屿x。

**输入**

*   **n** - 岛屿数量。
*   **l，c** - 矩阵的尺寸。
*   接下来的**l**行， **c**号给出矩阵的第**l**行。

**产量**

*   **i** - 面积最大的岛屿数量。
*   **A** - **我**岛的**一个**区域。

**例如：**

您有以下输入：

```cpp
2 4 4 
 0 0 0 1 
 0 0 1 1 
 0 0 0 2 
 2 2 2 2 
```

你会得到岛屿没有。 2作为最大的岛屿，面积为5平方。

### 提示

问题很简单，但这里有一些提示：
```
1. Use the flood-fill algorithm whenever you encounter a new island. 
 2. As opposed to the sample code, you should go through the area of the island and not on the ocean (0 tiles). 

```