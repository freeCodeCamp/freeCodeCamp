---
title: Floyd Warshall Algorithm
localeTitle: Алгоритм Флойда Варшалла
---
## Алгоритм Флойда Варшалла

Алгоритм Флойда Варшалла - отличный алгоритм для нахождения кратчайшего расстояния между всеми вершинами в графе. Он имеет очень сжатый алгоритм и временную сложность O (V ^ 3) (где V - число вершин). Его можно использовать с отрицательными весами, хотя отрицательные весовые циклы не должны присутствовать на графике.

### оценка

Космическая сложность: O (V ^ 2)

Хуже того, сложность времени: O (V ^ 3)

### Реализация Python

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

#### Дополнительная информация:

[диаграммы](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Флойд Варшалл - Википедия](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)