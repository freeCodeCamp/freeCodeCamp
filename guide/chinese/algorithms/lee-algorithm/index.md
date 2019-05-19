---
title: Lee's Algorithm
localeTitle: 李的算法
---
## 李的算法

Lee算法是迷宫路由问题的一种可能解决方案。它始终提供最佳解决方案，如果存在，但是 缓慢并需要大内存以进行密集布局。

### 了解它是如何工作的

该算法是基于`breadth-first`算法，它使用`queues`来存储步骤。它通常使用以下步骤：

1.  选择一个起点并将其添加到队列中。
2.  将有效的相邻单元添加到队列中。
3.  从队列中删除您所在的位置并继续下一个元素。
4.  重复步骤2和3，直到队列为空。

### 履行

C ++已经在`<queue>`库中实现了`<queue>` ，但如果您正在使用其他东西，欢迎您实现 你自己的队列版本。

C ++代码：

```cpp
int dl[] = {-1, 0, 1, 0}; // these arrays will help you travel in the 4 directions more easily 
 int dc[] = {0, 1, 0, -1}; 
 
 queue<int> X, Y; // the queues used to get the positions in the matrix 
 
 X.push(start_x); //initialize the queues with the start position 
 Y.push(start_y); 
 
 void lee() 
 { 
  int x, y, xx, yy; 
  while(!X.empty()) // while there are still positions in the queue 
  { 
    x = X.front(); // set the current position 
    y = Y.front(); 
    for(int i = 0; i < 4; i++) 
    { 
      xx = x + dl[i]; // travel in an adiacent cell from the current position 
      yy = y + dc[i]; 
      if('position is valid') //here you should insert whatever conditions should apply for your position (xx, yy) 
      { 
          X.push(xx); // add the position to the queue 
          Y.push(yy); 
          mat[xx][yy] = -1; // you usually mark that you have been to this position in the matrix 
      } 
 
    } 
 
    X.pop(); // eliminate the first position, as you have no more use for it 
    Y.pop(); 
 
  } 
 
 
 } 

```