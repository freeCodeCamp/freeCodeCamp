---
id: 5f222f3c5797d75366f4827c
title: Weighted and Directed Graphs
challengeType: 1
isHidden: false
forumTopicId: #Have to figure this out
---

## Description

<section id='description'>

Graphs can also be represented as <dfn>weighted</dfn> and <dfn>directed</dfn>.

A <dfn>weighted</dfn> graph is a graph whose edges have numerical weights (as opposed to uniform weights of 1 or 0 as we have seen before).

Example of a weighted graph:

<img class='img-responsive' src='https://user-images.githubusercontent.com/54512885/89246180-889f1280-d5d8-11ea-851d-a55d33d90cb8.jpg'>

A <dfn>directed</dfn> graph is a graph where every edge has a direction (i.e., each edge "points" from one vertex to another).
Example of a directed graph:

<img class='img-responsive' src='https://user-images.githubusercontent.com/36285777/89246346-8e90f580-d5d0-11ea-8bcf-7da0516bf8ce.jpg'>

<strong>Note</strong>: Implicitly, the definition of a directed graph means that the adjacency matrix representation of any directed graph is asymmetric.

A weighted and a directed graph has both of these characteristics as shown in the figure below:

<img class='img-responsive' src='https://user-images.githubusercontent.com/36285777/89246338-8a64d800-d5d0-11ea-988c-ad1a1fd5d2ef.jpg'>

Below is the JavaScript adjacency matrix implementation of it:

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
    testString: assert((adjMatWeightedDirected.length === 4) && adjMatWeightedDirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) );
  - text: There should be an edge of length 7 from the second node to the first node.
    testString: assert((adjMatWeightedDirected[1][0] === 7));
  - text: There should be an edge of length 9 from the second node to the third node.
    testString: assert((adjMatWeightedDirected[1][2] === 9));
  - text: There should be an edge of length 3 from the second node to the fourth node.
    testString: assert((adjMatWeightedDirected[1][3] === 3));
  - text: There should be an edge of length 1 from the third node to the first node.
    testString: assert((adjMatWeightedDirected[2][0] === 1));
  - text: There should be no extraneous edges.
    testString: assert((adjMatWeightedDirected[0][0] === 0) && (adjMatWeightedDirected[0][1] === 0) && (adjMatWeightedDirected[0][2] === 0) && (adjMatWeightedDirected[0][3] === 0) && (adjMatWeightedDirected[1][1] === 0) && (adjMatWeightedDirected[2][1] === 0) && (adjMatWeightedDirected[2][2] === 0) && (adjMatWeightedDirected[2][3] === 0) && (adjMatWeightedDirected[3][0] === 0) && (adjMatWeightedDirected[3][1] === 0) && (adjMatWeightedDirected[3][2] === 0) && (adjMatWeightedDirected[3][3] === 0));
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
