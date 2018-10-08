---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
challengeType: 5
---

## Description
<section id='description'>
<p>Given two points on a plane and a radius, usually two circles of given radius can be drawn through the points.</p>
Exceptions:
A radius of zero should be treated as never describing circles (except in the case where the points are coincident).
If the points are coincident then an infinite number of circles with the point on their circumference can be drawn, unless the radius is equal to zero as well which then collapses the circles to a point.
If the points form a diameter then return a single circle.
If the points are too far apart then no circles can be drawn.Task:
Implement a function that takes two points and a radius and returns the two circles through those points. For each resulting circle, provide the coordinates for the center of each circle rounded to four decimal digits. Return each coordinate as an array, and coordinates as an array of arrays.
For edge cases, return the following:
If points are on the diameter, return one point. If the radius is also zero however, return <code>"Radius Zero"</code>.
If points are coincident, return <code>"Coincident point. Infinite solutions"</code>.
If points are farther apart than the diameter, return <code>"No intersection. Points further apart than circle diameter"</code>.
Sample inputs:
<pre>
      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>
Ref:
<a href="http://mathforum.org/library/drmath/view/53027.html" title="link: http://mathforum.org/library/drmath/view/53027.html">Finding the Center of a Circle from 2 Points and Radius</a> from Math forum @ Drexel
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code> is a function.
    testString: 'assert(typeof getCircles === "function", "<code>getCircles</code> is a function.");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.'
    testString: 'assert.deepEqual(getCircles(...testCases[0]), answers[0], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.");'
  - text: '<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[1]), answers[1], "<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[2]), answers[2], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[3]), answers[3], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>");'
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>'
    testString: 'assert.deepEqual(getCircles(...testCases[4]), answers[4], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles (...args) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
const hDist = (p1, p2) => Math.hypot(...p1.map((e, i) => e - p2[i])) / 2;
const pAng = (p1, p2) => Math.atan(p1.map((e, i) => e - p2[i]).reduce((p, c) => c / p, 1));
const solveF = (p, r) => t => [parseFloat((r * Math.cos(t) + p[0]).toFixed(4)), parseFloat((r * Math.sin(t) + p[1]).toFixed(4))];
const diamPoints = (p1, p2) => p1.map((e, i) => parseFloat((e + (p2[i] - e) / 2).toFixed(4)));

function getCircles (...args) {
  const [p1, p2, s] = args;
  const solve = solveF(p1, s);
  const halfDist = hDist(p1, p2);

  let msg = [];
  switch (Math.sign(s - halfDist)) {
    case 0:
      msg = s ? diamPoints(p1, p2) :
        'Radius Zero';
      break;
    case 1:
      if (!halfDist) {
        msg = 'Coincident point. Infinite solutions';
      }
      else {
        const theta = pAng(p1, p2);
        const theta2 = Math.acos(halfDist / s);
        [1, -1].map(e => solve(theta + e * theta2)).forEach(
          e => msg.push(e));
      }
      break;
    case -1:
      msg = 'No intersection. Points further apart than circle diameter';
      break;
    default:
      msg = 'Reached the default';
  }
  return msg;
}

```

</section>
