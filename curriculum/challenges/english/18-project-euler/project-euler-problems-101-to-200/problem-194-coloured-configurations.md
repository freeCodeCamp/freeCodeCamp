---
id: 5900f42f1000cf542c50ff40
title: 'Problem 194: Coloured Configurations'
challengeType: 1
forumTopicId: 301832
dashedName: problem-194-coloured-configurations
---

# --description--

Consider graphs built with the units A: <img class="img-responsive" alt="graph unit A" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-1.png" style="display: inline-block; background-color: white; padding: 10px;">
 and B: <img class="img-responsive" alt="graph unit B" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-2.png" style="display: inline-block; background-color: white; padding: 10px;">, where the units are glued along the vertical edges as in the graph <img class="img-responsive" alt="graph with four units glued along the vertical edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-3.png" style="display: inline-block; background-color: white; padding: 10px;">.

A configuration of type $(a,b,c)$ is a graph thus built of $a$ units A and $b$ units B, where the graph's vertices are coloured using up to $c$ colours, so that no two adjacent vertices have the same colour. The compound graph above is an example of a configuration of type $(2,2,6)$, in fact of type $(2,2,c)$ for all $c ≥ 4$

Let $N(a,b,c)$ be the number of configurations of type $(a,b,c)$. For example, $N(1,0,3) = 24$, $N(0,2,4) = 92928$ and $N(2,2,3) = 20736$.

Find the last 8 digits of $N(25,75,1984)$.

# --hints--

`coloredConfigurations()` should return `61190912`.

```js
assert.strictEqual(coloredConfigurations(), 61190912);
```

# --seed--

## --seed-contents--

```js
function coloredConfigurations() {

  return true;
}

coloredConfigurations();
```

# --solutions--

```js
// solution required
```
