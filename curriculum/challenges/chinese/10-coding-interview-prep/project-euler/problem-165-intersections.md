---
id: 5900f4111000cf542c50ff24
title: 'Problem 165: Intersections'
challengeType: 1
forumTopicId: 301799
dashedName: problem-165-intersections
---

# --description--

A segment is uniquely defined by its two endpoints. By considering two line segments in plane geometry there are three possibilities: the segments have zero points, one point, or infinitely many points in common.

Moreover when two segments have exactly one point in common it might be the case that that common point is an endpoint of either one of the segments or of both. If a common point of two segments is not an endpoint of either of the segments it is an interior point of both segments.

We will call a common point $T$ of two segments $L_1$ and $L_2$ a true intersection point of $L_1$ and $L_2$ if $T$ is the only common point of $L_1$ and $L_2$ and $T$ is an interior point of both segments.

Consider the three segments $L_1$, $L_2$, and $L_3$:

$$\begin{align}   & L_1: (27, 44) \\;\text{to}\\; (12, 32) \\\\
  & L_2: (46, 53) \\;\text{to}\\; (17, 62) \\\\   & L_3: (46, 70) \\;\text{to}\\; (22, 40) \\\\
\end{align}$$

It can be verified that line segments $L_2$ and $L_3$ have a true intersection point. We note that as the one of the end points of $L_3$: (22, 40) lies on $L_1$ this is not considered to be a true point of intersection. $L_1$ and $L_2$ have no common point. So among the three line segments, we find one true intersection point.

Now let us do the same for 5000 line segments. To this end, we generate 20000 numbers using the so-called "Blum Blum Shub" pseudo-random number generator.

$$\begin{align}   & s_0 = 290797 \\\\
  & s_{n + 1} = s_n × s_n (\text{modulo}\\; 50515093) \\\\   & t_n = s_n (\text{modulo}\\; 500) \\\\
\end{align}$$

To create each line segment, we use four consecutive numbers $t_n$. That is, the first line segment is given by:

($_t$1, $t_2$) to ($t_3$, $t_4$)

The first four numbers computed according to the above generator should be: 27, 144, 12 and 232. The first segment would thus be (27, 144) to (12, 232).

How many distinct true intersection points are found among the 5000 line segments?

# --hints--

`distinctIntersections()` should return `2868868`.

```js
assert.strictEqual(distinctIntersections(), 2868868);
```

# --seed--

## --seed-contents--

```js
function distinctIntersections() {

  return true;
}

distinctIntersections();
```

# --solutions--

```js
// solution required
```
