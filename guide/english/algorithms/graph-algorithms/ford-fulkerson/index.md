---
title: Ford Fulkerson algorithm
---
## Ford Fulkerson algorithm

Ford Fulkerson's algorithm solves the maximum flow graph problem. It finds the best organisation of flow through the edges of graphs such that you get maximum flow out on the other end. The source has a specific rate of input and each edge has a weight associated with it which is the maximum substance that can be passed through that edge.

Ford Fulkerson algorithm is also called Edmund-Karp algorithm as the algorithm was provided in complete specification by Jack Edmonds and Richard Karp.

It works by creating augmenting paths i.e. paths from source to sink that have a non-zero flow. We pass the flow through the paths and we update the limits. This can lead to situation where we have no more moves left. That's where the 'undo' ability of this algorithm plays a big role. In case of being stuck, we decrease the flow and open up the edge to pass our current substance.

## Steps
1. Set zero flow for all edges.
2. While there is a path from source to sink do,
    1. Find the minimum weight on the path, let it be `limit`.
    2. For all edges (u, v) on the path do,
        1. Add `limit` to flow from u to v. (For current move)
        2. Subtract `limit` from flow from v to u. (For undo in later move)

### Evaluation

Time Complexity: O(V*E^2)

### Python implementation

```python
# Large number as infinity
inf = 1e10

def maximum_flow(graph, source, sink):
  max_flow = 0
  parent = bfs(graph, source, sink)
  while path:
    limit = inf
    v = sink
    while v != source:
        u = parent[s]
        path_flow = min(limit, graph[u][v])
        v = parent[v]
    max_flow += path_flow

    v = sink
    while v != source:
        u = parent[v]
        graph[u][v] -= path_flow
        graph[v][u] += path_flow
        v = parent[v]

    path = bfs(graph, source, sink)
  return max_flow
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://en.wikipedia.org/wiki/Ford–Fulkerson_algorithm' target='_blank' rel='nofollow'>Ford Fulkerson - Wikipedia</a>
