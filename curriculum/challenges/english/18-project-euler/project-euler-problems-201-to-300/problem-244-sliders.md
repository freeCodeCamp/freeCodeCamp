---
id: 5900f4601000cf542c50ff72
title: 'Problem 244: Sliders'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

You probably know the game Fifteen Puzzle. Here, instead of numbered tiles, we have seven red tiles and eight blue tiles.

A move is denoted by the uppercase initial of the direction (Left, Right, Up, Down) in which the tile is slid, e.g. starting from configuration ($S$), by the sequence $LULUR$ we reach the configuration ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($E$) <img class="img-responsive" alt="configuration E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;">

For each path, its checksum is calculated by (pseudocode):

$$\begin{align}
  & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007
\end{align}$$

where $m_k$ is the ASCII value of the $k^{\text{th}}$ letter in the move sequence and the ASCII values for the moves are:

$$\begin{array}{|c|c|}
  \hline
  L & 76 \\\\ \hline
  R & 82 \\\\ \hline
  U & 85 \\\\ \hline
  D & 68 \\\\ \hline
\end{array}$$

For the sequence $LULUR$ given above, the checksum would be 19761398. Now, starting from configuration ($S$), find all shortest ways to reach configuration ($T$).

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($T$) <img class="img-responsive center-block" alt="configuration T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;">

What is the sum of all checksums for the paths having the minimal length?

# --hints--

`sliders()` should return `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```
