---
title: Graphs
---
## Graphs
A graph is a data structure you can use to solve routing problems, such as "Are these two components connected?" and "What is the shortest path from point a to point b?"

A graph consists of nodes and edges.
A node (i.e. vertex) is an object in your graph. 
A node can contain information such as the name of the node and which edges it is attached to.
An edge is a link that connects two nodes.
The edge can contain information such as the weight of the edge.
If two nodes are connected by an edge, they are neighbours (i.e. adjacent).

Depending on the problem you can use either two-way (undirected) or one-way (directed) edges.
If you have an undirected edge from a to b, there is also a way from b to a.
If you have a directed edge from a to b, there is not necessarily a way from b to a (as this would require a separate directed edge from b to a, which may not exist).

You can use graphs to formulate situations such as:
* Geographical maps 
   * Each city in your country is a node
   * If two cities are connected by a road there is an edge between them
        * Roads can be one- or two-way (both directed and undirected edges)
        * The weight can be the length of the road
* Flow of water
    * Each floodgate is a node
    * Each canal is an edge
        * Water will only flow in one direction so the edges are directed
        * The weight can be the maximum water capacity of the flow

Example: a graph that has as nodes the capitals of the Nordic countries, and as (undirected) edges the driving distance to the cities connected by a direct road.
```
.     +---------+
.     |Reykjavik|
.     +---------+
.
.
.         529 km   +---------+  1760 km  +--------+
.    +------------+|Stockholm|+---------+|Helsinki|
.    |             +---------+           +--------+
.    +                                        +
. +----+                    1991 km           |
. |Oslo|+-------------------------------------+
. +----+
.         +----------+
.         |Copenhagen|
.         +----------+
```


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Wikipedia](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md' target='_blank' rel='nofollow'>Breadth First Search (BFS)</a>

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md' target='_blank' rel='nofollow'>Depth First Search (DFS)</a>

