---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
---

## Description
<section id='description'>
Yet another way to represent a graph is to put it in an <dfn>incidence matrix.</dfn>
An <dfn>incidence matrix</dfn> is a two-dimensional (2D) array. Generally speaking, an incidence matrix relates two different classes of objects between its two dimensions. This kind of matrix is similar to an adjacency matrix. However, the rows and columns mean something else here.
In graphs, we have edges and nodes. These will be our "two different classes of objects". This matrix will have the rows be the nodes and columns be the edges. This means that we can have an uneven number of rows and columns.
Each column will represent a unique edge. Also, each edge connects two nodes. To show that there is an edge between two nodes, you will put a 1 in the two rows of a particular column. Below is a 3 node graph with one edge between node 1 and node 3.
<blockquote>    1<br>   ---<br>1 | 1<br>2 | 0<br>3 | 1</blockquote>
Here is an example of an <code>incidence matrix</code> with 4 edges and 4 nodes. Remember, the columns are the edges and rows are the nodes themselves.
<blockquote>    1 2 3 4<br>   --------<br>1 | 0 1 1 1<br>2 | 1 1 0 0<br>3 | 1 0 0 1<br>4 | 0 0 1 0</blockquote>
Below is a JavaScript implementation of the same thing.
<blockquote>var incMat = [<br>  [0, 1, 1, 1],<br>  [1, 1, 0, 0],<br>  [1, 0, 0, 1],<br>  [0, 0, 1, 0]<br>];</blockquote>
To make a directed graph, use <code>-1</code> for an edge leaving a particular node and <code>1</code> for an edge entering a node.
<blockquote>var incMatDirected = [<br>  [ 0, -1,  1, -1],<br>  [-1,  1,  0,  0],<br>  [ 1,  0,  0,  1],<br>  [ 0,  0, -1,  0]<br>];</blockquote>
Graphs can also have <dfn>weights</dfn> on their edges. So far, we have <dfn>unweighted</dfn> edges where just the presence and lack of edge is binary (<code>0</code> or <code>1</code>). You can have different weights depending on your application. A different weight is represented as numbers greater than 1.
</section>

## Instructions
<section id='instructions'>
Create an incidence matrix of an undirected graph with five nodes and four edges. This matrix should be in a multi-dimensional array.
These five nodes have relationships following relationships. The first edge is between the first and second node. The second edge is between the second and third node. The third edge is between the third and fifth node. And four edge is between the fourth and second node. All edge weights are one and the edge order matters.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>incMatUndirected</code> should only contain five nodes.
  testString: 'assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) , ''<code>incMatUndirected</code> should only contain five nodes.'');'
- text: There should be a first edge between the first and second node.
  testString: 'assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1), ''There should be a first edge between the first and second node.'');'
- text: There should be a second edge between the second and third node.
  testString: 'assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1), ''There should be a second edge between the second and third node.'');'
- text: There should be a third edge between the third and fifth node.
  testString: 'assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1), ''There should be a third edge between the third and fifth node.'');'
- text: There should be a fourth edge between the second and fourth node.
  testString: 'assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1), ''There should be a fourth edge between the second and fourth node.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [
  
];
```

</div>



</section>

## Solution
<section id='solution'>


```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```

</section>
