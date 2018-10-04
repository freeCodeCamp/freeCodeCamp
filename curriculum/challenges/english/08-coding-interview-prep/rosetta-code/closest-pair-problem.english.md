---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Provide a function to find the closest two points among a set of given points in two dimensions,  i.e. to solve the  <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Closest pair of points problem">Closest pair of points problem</a>  in the  planar  case.</p><p>The straightforward solution is a  O(n<sup>2</sup>)  algorithm  (which we can call brute-force algorithm);  the pseudo-code (using indexes) could be simply:</p>
<pre>
bruteForceClosestPair of P(1), P(2), ... P(N)
if N &lt; 2 then
  return ∞
else
  minDistance ← |P(1) - P(2)|
  minPoints ← { P(1), P(2) }
  foreach i ∈ [1, N-1]
    foreach j ∈ [i+1, N]
      if |P(i) - P(j)| < minDistance then
        minDistance ← |P(i) - P(j)|
        minPoints ← { P(i), P(j) }
      endif
    endfor
  endfor
  return minDistance, minPoints
endif
</pre>
<p>A better algorithm is based on the recursive divide&amp;conquer approach, as explained also at  <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: Closest pair of points problem#Planar_case">Wikipedia's Closest pair of points problem</a>,  which is  O(n log n);  a pseudo-code could be:</p>
<pre>
closestPair of (xP, yP)
  where xP is P(1) .. P(N) sorted by x coordinate, and
  yP is P(1) .. P(N) sorted by y coordinate (ascending order)
if N ≤ 3 then
  return closest points of xP using brute-force algorithm
else
  xL ← points of xP from 1 to ⌈N/2⌉
  xR ← points of xP from ⌈N/2⌉+1 to N
  xm ← xP(⌈N/2⌉)<sub>x</sub>
  yL ← { p ∈ yP : p<sub>x</sub> ≤ xm }
  yR ← { p ∈ yP : p<sub>x</sub> &gt; xm }
  (dL, pairL) ← closestPair of (xL, yL)
  (dR, pairR) ← closestPair of (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  if dL &lt; dR then
    (dmin, pairMin) ← (dL, pairL)
  endif
  yS ← { p ∈ yP : |xm - p<sub>x</sub>| &lt; dmin }
  nS ← number of points in yS
  (closest, closestPair) ← (dmin, pairMin)
  for i from 1 to nS - 1
    k ← i + 1
    while k ≤ nS and yS(k)<sub>y</sub> - yS(i)<sub>y</sub> &lt; dmin
      if |yS(k) - yS(i)| &lt; closest then
        (closest, closestPair) ← (|yS(k) - yS(i)|, {yS(k), yS(i)})
      endif
      k ← k + 1
    endwhile
  endfor
  return closest, closestPair
endif
</pre>
References and further readings:
 <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Closest pair of points problem">Closest pair of points problem</a>
 <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="link: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">Closest Pair (McGill)</a>
 <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="link: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Closest Pair (UCSB)</a>
 <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="link: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Closest pair (WUStL)</a>
 <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="link: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Closest pair (IUPUI)</a> 
<p>For the input, expect the argument to be an array of objects (points) with <code>x</code> and <code>y</code> members set to numbers. For the output, return an object containing the key:value pairs for  <code>distance</code> and <code>pair</code> (i.e., the pair of two closest points).</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> is a function.
    testString: 'assert(typeof getClosestPair === ''function'', ''<code>getClosestPair</code> is a function.'');'
  - text: Distance should be the following.
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, ''Distance should be the following.'');'
  - text: Points should be the following.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, ''Points should be the following.'');'
  - text: Distance should be the following.
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, ''Distance should be the following.'');'
  - text: Points should be the following.
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair, ''Points should be the following.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

function getClosestPair (pointsArr) {
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
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

const mergeSort = function mergeSort(points, comp) {
	if(points.length < 2) return points;

	var n = points.length,
		i = 0,
		j = 0,
		leftN = Math.floor(n / 2),
		rightN = leftN;

	var leftPart = mergeSort( points.slice(0, leftN), comp),
		rightPart = mergeSort( points.slice(rightN), comp );

	var sortedPart = [];

	while((i < leftPart.length) && (j < rightPart.length)) {
		if(comp(leftPart[i], rightPart[j]) < 0) {
			sortedPart.push(leftPart[i]);
			i += 1;
		}
		else {
			sortedPart.push(rightPart[j]);
			j += 1;
		}
	}
	while(i < leftPart.length) {
		sortedPart.push(leftPart[i]);
		i += 1;
	}
	while(j < rightPart.length) {
		sortedPart.push(rightPart[j]);
		j += 1;
	}
	return sortedPart;
};

const closestPair = function _closestPair(Px, Py) {
	if(Px.length < 2) return { distance: Infinity, pair: [ new Point(0, 0), new Point(0, 0) ] };
	if(Px.length < 3) {
		//find euclid distance
		var d = Math.sqrt( Math.pow(Math.abs(Px[1].x - Px[0].x), 2) + Math.pow(Math.abs(Px[1].y - Px[0].y), 2) );
		return {
			distance: d,
			pair: [ Px[0], Px[1] ]
		};
	}

	var	n = Px.length,
		leftN = Math.floor(n / 2),
		rightN = leftN;

	var Xl = Px.slice(0, leftN),
		Xr = Px.slice(rightN),
		Xm = Xl[leftN - 1],
		Yl = [],
		Yr = [];
	//separate Py
	for(var i = 0; i < Py.length; i += 1) {
		if(Py[i].x <= Xm.x)
			Yl.push(Py[i]);
		else
			Yr.push(Py[i]);
	}

	var dLeft = _closestPair(Xl, Yl),
		dRight = _closestPair(Xr, Yr);

	var minDelta = dLeft.distance,
		closestPair = dLeft.pair;
	if(dLeft.distance > dRight.distance) {
		minDelta = dRight.distance;
		closestPair = dRight.pair;
	}

	//filter points around Xm within delta (minDelta)
	var closeY = [];
	for(i = 0; i < Py.length; i += 1) {
		if(Math.abs(Py[i].x - Xm.x) < minDelta) closeY.push(Py[i]);
	}
	//find min within delta. 8 steps max
	for(i = 0; i < closeY.length; i += 1) {
		for(var j = i + 1; j < Math.min( (i + 8), closeY.length ); j += 1) {
			var d = Math.sqrt( Math.pow(Math.abs(closeY[j].x - closeY[i].x), 2) + Math.pow(Math.abs(closeY[j].y - closeY[i].y), 2) );
			if(d < minDelta) {
				minDelta = d;
				closestPair = [ closeY[i], closeY[j] ]
			}
		}
	}

	return {
		distance: minDelta,
		pair: closestPair
	};
};

function getClosestPair (points) {
  const sortX = function (a, b) { return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0); }
  const sortY = function (a, b) { return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0); }

  const Px = mergeSort(points, sortX);
  const Py = mergeSort(points, sortY);

  return closestPair(Px, Py);
}

```

</section>
