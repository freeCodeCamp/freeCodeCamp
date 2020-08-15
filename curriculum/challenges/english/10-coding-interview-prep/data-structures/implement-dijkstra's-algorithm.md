---
id: 5f3205da41a5bad7f694ce66
title: Implement Dijkstra's Algorithm
challengeType: 1
isHidden: false
forumTopicId: 455362
---

## Description
<section id='description'>

Dijkstra’s Algorithm is an algorithm for determining the shortest path between vertices in a graph. This is useful in a number of applications, including road networks and telecommunications. It does this by having the current vertex check which of its connecting edges has the smallest weight before going to the vertex connected to said edge and so on and so forth until it reaches its destination. An outline of Dijkstra’s Algorithm is given below:

Using an array, keep track of the distance from the starting vertex to each other vertex. Initially, this distance should be infinite for each vertex other than the starting vertex. Then, for each vertex, explore each of its edges, reducing the distances to the vertices connected to it. Do this until each vertex has been finished.

</section>

## Instructions
<section id='instructions'>

In this challenge, you will be given an adjacency matrix that represents a weighted and directed graph. Implement Dijkstra’s Algorithm by writing a function that returns an array representing the weight of the shortest path between strtVrtx to each vertex.

<img class='img-responsive' src='https://user-images.githubusercontent.com/33169217/90173996-e8c94d80-dd6a-11ea-8ef1-fe071e6f8ff9.jpg'>

When Dijkstra’s algorithm is run on the graph above starting at Vertex 1, it should return the array [0, 3, 4, 7, 10].

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function <code>dijkstra(exampleGraph, exampleVrtx)</code> should return an array.
    testString: assert(Array.isArray(dijkstra(exampleGraph, exampleVrtx)))
  - text: The function <code>dijkstra(exampleGraph, 0)</code> should return the array [0,3,4,6,9].
    testString: assert.deepStrictEqual(dijkstra(exampleGraph,0), [0,3,4,6,9]);
  - text: The function <code>dijkstra(exampleGraph, 1)</code> should return the array [14,0,1,3,6].
    testString: assert.deepStrictEqual(dijkstra(exampleGraph,1), [14,0,1,3,6]);
  - text: The function <code>dijkstra(exampleGraph, 2)</code> should return the array [13,6,0,2,5].
    testString: assert.deepStrictEqual(dijkstra(exampleGraph,2), [13,6,0,2,5]);
  - text: The function <code>dijkstra(exampleGraph, 3)</code> should return the array [11,4,5,0,3].
    testString: assert.deepStrictEqual(dijkstra(exampleGraph,3), [11,4,5,0,3]);
  - text: The function <code>dijkstra(exampleGraph, 4)</code> should return the array [8,11,12,14,0].
    testString: assert.deepStrictEqual(dijkstra(exampleGraph,4), [8,11,12,14,0]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dijkstra(graph, strtVrtx) {
	let distances = [Infinity,Infinity, Infinity, Infinity, Infinity];
	distances[strtVrtx] = 0;
	let isFinished = [false, false, false, false, false];
    //Your code goes below here
}

let exampleGraph = [
  [0, 3, 0, 7, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 4, 0, 0, 3],	
  [8, 0, 0, 0, 0]
  ];
dijkstra(exampleGraph, 0);
```

</div>
</section>

## Solution
<section id='solution'>

```js
function dijkstra(graph, strtVrtx) {
  let distances = [Infinity, Infinity, Infinity, Infinity, Infinity];
    distances[strtVrtx] = 0;
    let isFinished = [false, false, false, false, false];
    let currVrtx = strtVrtx;
    while(!isFinished[0] || !isFinished[1] || !isFinished[2] || !isFinished[3] || !isFinished[4]) {
      for(let i = 0; i < 5; i++) {
        if(graph[currVrtx][i] !== 0 && i !== currVrtx) {
            if(distances[currVrtx] + graph[currVrtx][i] < distances[i]) {
                  distances[i] = distances[currVrtx] + graph[currVrtx][i]
                }
            }
      }
        isFinished[currVrtx] = true;
        if(!isFinished[0] || !isFinished[1] || !isFinished[2] || !isFinished[3] || !isFinished[4]) {
          let smallestDistance = Infinity;
            let nextVrtx;
            for(let i = 0; i < 5; i++) {
              if(!isFinished[i] && distances[i] <= smallestDistance) {
                  nextVrtx = i;
                  smallestDistance = distances[i];
                }
            }
          currVrtx = nextVrtx;
        }
    }
    return distances;
}
let exampleGraph = [
  [0, 3, 0, 7, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 4, 0, 0, 3],	
  [8, 0, 0, 0, 0]
  ];
dijkstra(exampleGraph, 0);
```

</section>
