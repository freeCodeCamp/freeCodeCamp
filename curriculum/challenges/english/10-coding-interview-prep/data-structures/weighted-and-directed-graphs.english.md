---
id: 5f222f3c5797d75366f4827c
title: Weighted and Directed Graphs
challengeType: 1
isHidden: false
forumTopicId: #Have to figure this out
---

## Description

<section id='description'>

Two types of graphs are <dfn>weighted</dfn> and <dfn>directed</dfn> graphs.

A <dfn>weighted</dfn> graph is a graph whose edges have numerical weights (as opposed to uniform weights of 1 that are present in unweighted graphs). This means that path length for weighted graphs is not based on the number of edges in the path, but rather on the weights of the edges.

Example of a weighted graph:

<img class='img-responsive' src='https://user-images.githubusercontent.com/54512885/89246180-889f1280-d5d8-11ea-851d-a55d33d90cb8.jpg'>

A <dfn>directed</dfn> graph is a graph in which each edges have an orientation (i.e., each edge "points" from one vertex to another).

Example of a directed graph:

<img class='img-responsive' src='https://user-images.githubusercontent.com/36285777/89246346-8e90f580-d5d0-11ea-8bcf-7da0516bf8ce.jpg'>

<strong>Note</strong>: Implicitly, the definition of a directed graph means that the adjacency matrix representation of any directed graph is asymmetric.

<img class='img-responsive' src='https://user-images.githubusercontent.com/36285777/89246338-8a64d800-d5d0-11ea-988c-ad1a1fd5d2ef.jpg'>

Below is a JavaScript adjacency matrix implementation of the weighted and directed graph shown above:

```js
var adjMatWeightedDirected = [
  [0, 2, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 0],
  [0, 8, 1, 0]
];
```

</section>

## Instructions

<section id='instructions'>

Create an adjacency matrix of a weighted, directed graph with five nodes. This matrix should reflect the graph shown below:

<img class='img-responsive' src='https://user-images.githubusercontent.com/36285777/89246340-8c2e9b80-d5d0-11ea-87c1-fe9d6416262e.jpg'>
</section>

## Tests

<section id='tests'>

```yml
#Change this based on the picture we select
tests:
  - text: <code>undirectedAdjList</code> should only contain four nodes.
    testString: assert((adjMatUndirected.length === 4) && adjMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) );
  - text: There should be an edge of length 7 from the second node to the first node.
    testString: assert((adjMatUndirected[1][0] === 7));
  - text: There should be an edge of length 9 from the second node to the third node.
    testString: assert((adjMatUndirected[1][2] === 9));
  - text: There should be an edge of length 3 from the second node to the fourth node.
    testString: assert((adjMatUndirected[1][3] === 3));
  - text: There should be an edge of length 1 from the third node to the first node.
    testString: assert((adjMatUndirected[2][0] === 1));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatWeightedDirected = [];
```

</div>
</section>

## Solution

<section id='solution'>

```js
var adjMatWeightedDirected = [
  [0, 0, 0, 0],
  [7, 0, 9, 3],
  [1, 0, 0, 0],
  [0, 0, 0, 0]
];
```

</section>
