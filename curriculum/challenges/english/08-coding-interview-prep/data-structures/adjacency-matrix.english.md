---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
challengeType: 1
isHidden: false
forumTopicId: 301621
---

## Description
<section id='description'>

Another way to represent a graph is to put it in an <dfn>adjacency matrix</dfn>.
An <dfn>adjacency matrix</dfn> is a two-dimensional (2D) array where each nested array has the same number of elements as the outer array. In other words, it is a matrix or grid of numbers, where the numbers represent the edges. 

<strong>Note</strong>: The numbers to the top and left of the matrix are just labels for the nodes. Inside the matrix, ones mean there exists an edge between the vertices (nodes) representing the row and column.  Finally, zeros mean there is no edge or relationship.
<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>
Above is a very simple, undirected graph where you have three nodes, where the first node is connected to the second and third node. 
Below is a JavaScript implementation of the same thing.

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

Unlike an adjacency list, each "row" of the matrix has to have the same number of elements as nodes in the graph. Here we have a three by three matrix, which means we have three nodes in our graph.
A directed graph would look similar. Below is a graph where the first node has an edge pointing toward the second node, and then the second node has an edge pointing to the third node.

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

Graphs can also have <dfn>weights</dfn> on their edges. So far, we have <dfn>unweighted</dfn> edges where just the presence and lack of edge is binary (<code>0</code> or <code>1</code>). You can have different weights depending on your application.
</section>

## Instructions
<section id='instructions'>

Create an adjacency matrix of an undirected graph with five nodes. This matrix should be in a multi-dimensional array. These five nodes have relationships between the first and fourth node, the first and third node, the third and fifth node, and the fourth and fifth node. All edge weights are one.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> should only contain five nodes.
    testString: assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) );
  - text: There should be an edge between the first and fourth node.
    testString: assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1));
  - text: There should be an edge between the first and third node.
    testString: assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1));
  - text: There should be an edge between the third and fifth node.
    testString: assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1));
  - text: There should be an edge between the fourth and fifth node.
    testString: assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [];
```

</div>
</section>

## Solution
<section id='solution'>

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0]
];
```

</section>
