---
title: Bellman Ford's Algorithm
---
# Bellman Ford's Algorithm

Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights. Bellman ford's algorithm is also great for detecting negative weight cycles as the algorithm converges to an optimal solution in O(V*E) steps. If the resultant is not optimal, then graph contains a negative weight cycle.

Here is an implementation in Python,

```python
infinity = 1e10

def bellman_ford(graph, start, end):
    num_vertices = graph.get_num_vertices()
    edges = graph.get_edges()

    distance = [infinity for vertex in range(num_vertices)]
    previous = [None for vertex in range(num_vertices)]

    distance[start] = 0
    for i range(end+1):
        for (u, v) in edges:
            if distance[v] > distance[u] + graph.get_weight(u, v):
                distance[v] = distance[u] + graph.get_weight(u, v)
                previous[v] = u

    for (u,v) in edges:
        if distance[v] > distance[u] + graph.get_weight(u, v):
            raise NegativeWeightCycleError()
    return distance, previous
# 'distance' is the distance from start to that node in the shortest path, useful for printing the shortest distance.
# Previous is an array that tells the node that comes previous to current, useful for printing out the path.
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://brilliant.org/wiki/bellman-ford-algorithm/' target='_blank' rel='nofollow'>Bellman-Ford's algorithm</a>
