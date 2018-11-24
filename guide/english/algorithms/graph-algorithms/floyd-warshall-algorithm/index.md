---
title: Floyd Warshall Algorithm
---
## Floyd Warshall Algorithm

Floyd Warshall algorithm is a great algorithm for finding shortest distance between all vertices in graph. It has a very concise algorithm and O(V^3) time complexity (where V is number of vertices). It can be used with negative weights, although negative weight cycles must not be present in the graph.

### Evaluation

Space Complexity: O(V^2)

Worse Case Time Complexity: O(V^3)

### Python implementation

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

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm' target='_blank' rel='nofollow'>Floyd Warshall - Wikipedia</a>
