---
title: Floyd Warshall Algorithm
localeTitle: Floyd Warshall算法
---
## Floyd Warshall算法

Floyd Warshall算法是一种很好的算法，用于查找图中所有顶点之间的最短距离。它具有非常简洁的算法和O（V ^ 3）时间复杂度（其中V是顶点数）。它可以与负权重一起使用，但图表中不得出现负权重循环。

### 评估

空间复杂度：O（V ^ 2）

更糟糕的案例时间复杂性：O（V ^ 3）

### Python实现

```python
# A large value as infinity 
 inf = 1e10 
 
 def floyd_warshall(weights): 
    V = len(weights) 
    distance_matrix = weights 
    for k in range(V): 
        next_distance_matrix = [list(row) for row in distance_matrix] # make a copy of distance matrix 
        for i in range(V): 
            for j in range(V): 
                # Choose if the k vertex can work as a path with shorter distance 
                next_distance_matrix[i][j] = min(distance_matrix[i][j], distance_matrix[i][k] + distance_matrix[k][j]) 
        distance_matrix = next_distance_matrix # update 
    return distance_matrix 
 
 # A graph represented as Adjacency matrix 
 graph = [ 
    [0, inf, inf, -3], 
    [inf, 0, inf, 8], 
    [inf, 4, 0, -2], 
    [5, inf, 3, 0] 
 ] 
 
 print(floyd_warshall(graph)) 
```

#### 更多信息：

[图表](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Floyd Warshall - 维基百科](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)