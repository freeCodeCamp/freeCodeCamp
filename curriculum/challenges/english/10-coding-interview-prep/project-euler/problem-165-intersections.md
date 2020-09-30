---
id: 5900f4111000cf542c50ff24
challengeType: 5
title: 'Problem 165: Intersections'
forumTopicId: 301799
---

## Description
<section id='description'>
A segment is uniquely defined by its two endpoints. By considering two line segments in plane geometry there are three possibilities:
the segments have zero points, one point, or infinitely many points in common.
Moreover when two segments have exactly one point in common it might be the case that that common point is an endpoint of either one of the segments or of both. If a common point of two segments is not an endpoint of either of the segments it is an interior point of both segments.
We will call a common point T of two segments L1 and L2 a true intersection point of L1 and L2  if T is the only common point of L1 and L2  and T is an interior point of both segments.

Consider the three segments L1, L2, and L3:
L1: (27, 44) to (12, 32)
L2: (46, 53) to (17, 62)
L3: (46, 70) to (22, 40)
It can be verified that line segments L2 and L3 have a true intersection point. We note that as the one of the end points of L3: (22,40) lies on L1 this is not considered to be a true point of intersection. L1 and L2 have no common point. So among the three line segments, we find one true intersection point.
Now let us do the same for 5000 line segments. To this end, we generate 20000 numbers using the so-called "Blum Blum Shub" pseudo-random number generator.
s0 = 290797
sn+1 = sn×sn (modulo 50515093)
tn = sn (modulo 500)
To create each line segment, we use four consecutive numbers tn. That is, the first line segment is given by:
(t1, t2) to (t3, t4)
The first four numbers computed according to the above generator should be: 27, 144, 12 and 232. The first segment would thus be (27,144) to (12,232).
How many distinct true intersection points are found among the 5000 line segments?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler165()</code> should return 2868868.
    testString: assert.strictEqual(euler165(), 2868868);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler165() {

  return true;
}

euler165();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
