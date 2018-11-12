---
title: Shortest Path on a Graph
---
## Shortest Path on a Graph

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Finding the shortest path between two points on a graph is a common problem in data structures especially when dealing with optimization. A graph is a series of nodes connected by edges.


## Breadth First Search

For unweighted graphs, the *Breadth First Search* algorithm is useful. Below is a Python 3 implementation.

```python
from collections import deque

def BFS(graph, startNode, endNode):
# Assume graph is written as an adjacency list.
  queue = deque()
  queue.append([startNode])
  visited = set()
  visited.add(startNode)
  
  while queue:
    currentPath = queue.popleft()
    for node in graph[currentPath[-1]]:
      if node == endNode:
        newPath = currentPath.append(node)
        return newPath
      elif node not in visited:
        visited.add(node)
        newPath = currentPath.append(node)
        queue.append(newPath)
  
  return -1
```

However, graphs can be weighted (edges carry values) and directional (edges have direction).

Some applications of this are flight path optimization or <a href='https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon' target='_blank' rel='nofollow'>6 degrees of Kevin Bacon</a>

## Dijkstra's Algorithm

The most common solution for this problem is Dijkstra's algorithm which updates the shortest path between the current node and all of its neighbors. After updating the distance of all of the neighbors it moves to the node with the lowest distance and repeats the process with all unvisted neighbors. This process continues until the entire graph has been visited.


![Image of Levels of Code](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

**Step 0:**

Our graph needs to be setup so that we can record the required values. On any edge we have the distance between the two nodes it connects. On any node we have its shortest distance from the starting node. Lets set the value on every node to positive infinity, and set the value on the starting node to zero.

**Step 1:**

Look at all nodes directly adjacent to the starting node. The values carried by the edges connecting the start and these adjacent nodes are the shortest distances to each respective node. Record these distances on the node - overwriting infinity - and also cross off the nodes, meaning that their shortest path has been found.

**Step 2:**

Select one of the nodes which has had its shortest path calculated, we'll call this our pivot. Look at the nodes adjacent to it (we'll call these our destination nodes) and the distances separating them. For every destination node: if the value in the pivot plus the edge value connecting it totals less than the destination node's value, then update its value, as a new shorter path has been found. If all routes to this destination node have been explored, it can be crossed off.

**Step 3:**

Repeat step 2 until all nodes have been crossed off. We now have a graph where the values held in any node will be the shortest distance to it from the start node.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm' target='_blank' rel='nofollow'>More On Dijkstra's algorithm</a>

<a href='https://en.wikipedia.org/wiki/Shortest_path_problem#Algorithms' target='_blank' rel='nofollow'>Other Shortest path algorithms</a>
