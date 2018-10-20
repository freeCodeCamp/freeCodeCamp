---
title: Johnson's algorithm
---
## Johnson's algorithm

Johnson's algorithm solves the problem of finding shortest distance between all vertices in graph. This algorithm, like floyd warshall, is able to find optimal solution for graphs with negative weights. Although they both solve same problem, there is a major use-case difference.

Floyd Warshall algorithm is faster on dense graphs (all vertices connected to other) as it only depends on the number of vertices and has a time complexity of `O(V^3)`.

Johnson's algorithm is faster on sparse graphs (most of vertices are not connected) as it depends on the number of edges. It has time complexity of `O(V^2*log(V) + V*E)`. On Dense graph the time complexity will become `O(V^4)`.

The time complexity of Johnson's algorithm can be better understood by following intuition, for every node `O(V)`, we are performing the dijkstra's algorithm which with fibonacci heap implementation has, `O(V*log(V) + E)` time complexity. So overall the time complexity becomes `O(V^2*log(V) + V*E)`.

### Steps
1. First you add a node in the graph and connect it to all others with zero weight.
2. Now you run Bellman Ford algorithm to detect negative weight cycles as well as make a transformation tree i.e. find the shortest distance from extra node to all others.
3. You use the transformation tree to update the original weights. `weight(u, v) = weight(u, v) + height(u) - height(v)`.
4. This operation makes all the weights positive. Now you can use Dijkstra's algorithm for finding shortest distance between all pairs.

### Implementation
Note: Excludes graph, dijkstra and bellman-ford's algorithm implementation for clarity.
```python
# A large value as infinity
inf = 1e10 

def johnson_algorithm(graph):
    graph_copy = graph.copy()
    num_vertices = graph_copy.get_num_vertices()
    new_vertex_id = num_vertices + 1
    graph_copy.add_vertex(new_vertex_id)
    for i in range(num_vertices):
        graph_copy.add_edge(0, new_vertex_id, i)

    # Compute the distance from extra node to all other nodes
    height_of_vertex = [inf for i in range(num_vertices)]
    for i in range(num_vertices):
        try:
            height_of_vertex[i] = bellman_ford(graph_copy, new_vertex_id, i)
        except NegativeWeightCycleFound:
            print('Negative weight cycle found')
            return None

    # Reweight to make all weights positive
    for (u, v) in graph_copy.get_edges():
        original_weight = graph_copy.get_weight(u, v)
        graph_copy.set_weight(u, v, original_weight + height_of_vertex[u] - height_of_vertex[v])

    # Make a V*V matrix for distances
    distance_matrix = [[inf] * num_vertices for i in range(num_vertices)]
    for u in range(num_vertices):
        distances = dijkstra(graph_copy, u)
        for v in range(num_vertices):
            distance_matrix[u][v] = distances[v] + height_of_vertex[v] - height_of_vertex[u]

    return distance_matrix
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://en.wikipedia.org/wiki/Johnson%27s_algorithm' target='_blank' rel='nofollow'>Johnson's Algorithm - Wikipedia</a>
