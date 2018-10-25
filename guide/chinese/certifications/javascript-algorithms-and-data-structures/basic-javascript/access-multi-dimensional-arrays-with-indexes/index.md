---
title: Access Multi-Dimensional Arrays With Indexes
localeTitle: 访问带索引的多维数组
---
## 访问带索引的多维数组

考虑以下多维数组：

```javascript
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
```

这是表格形式的样子。

|职位| 0 | 1 | 2 | 3 | | --- | --- | --- | --- | --- | | **0** | 1 | 4 | 7 | 10 | | **1** | 2 | 5 | 8 | 11 | | **2** | 3 | 6 | 9 | 12 |

现在你需要做的就是选择你想要的数据的坐标！例如，如果我们想让`myNum`等于8，那么......

```javascript
var myNum = arr[2][1]; // Equal to 8 
```

或者，如果你想要它等于1.你做...

```javascript
var myNum = arr[0][0]; // Equal to 1 
```

首先，您可以选择该数字所在的列，然后选择该行。它有点像xy坐标平面！