---
id: 5951a53863c8a34f02bf1bdc
title: Задача про найближчу пару
challengeType: 1
forumTopicId: 302232
dashedName: closest-pair-problem
---

# --description--

Надайте функцію для пошуку двох найближчих точок серед поданого набору точок у двох вимірах.

Найпростіше рішення це $O(n^2)$ алгоритм (який ми можемо назвати *brute-force algorithm*); цей псевдо-код (з використанням індексів) може бути простим:

<pre><strong>bruteForceClosestPair</strong> of P(1), P(2), ... P(N)
<strong>if</strong> N &#x3C; 2 <strong>then</strong>
  <strong>return</strong> ∞
<strong>else</strong>
  minDistance ← |P(1) - P(2)|
  minPoints ← { P(1), P(2) }
  <strong>foreach</strong> i ∈ [1, N-1]
    <strong>foreach</strong> j ∈ [i+1, N]
      <strong>if</strong> |P(i) - P(j)| &#x3C; minDistance <strong>then</strong>
        minDistance ← |P(i) - P(j)|
        minPoints ← { P(i), P(j) }
      <strong>endif</strong>
    <strong>endfor</strong>
  <strong>endfor</strong>
  <strong>return</strong> minDistance, minPoints
<strong>endif</strong>
</pre>

Кращий алгоритм базується на рекурсивному розподілі та підхопленні, який є псевдо-кодом $O(n\log n)$:

<pre><strong>closestPair</strong> of (xP, yP)
  where xP is P(1) .. P(N) sorted by x coordinate, and
  yP is P(1) .. P(N) sorted by y coordinate (ascending order)
<strong>if</strong> N ≤ 3 <strong>then</strong>
  <strong>return</strong> closest points of xP using brute-force algorithm
<strong>else</strong>
  xL ← points of xP from 1 to ⌈N/2⌉
  xR ← points of xP from ⌈N/2⌉+1 to N
  xm ← xP(⌈N/2⌉)<sub>x</sub>
  yL ← { p ∈ yP : p<sub>x</sub> ≤ xm }
  yR ← { p ∈ yP : p<sub>x</sub> > xm }
  (dL, pairL) ← closestPair of (xL, yL)
  (dR, pairR) ← closestPair of (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  <strong>if</strong> dL &#x3C; dR <strong>then</strong>
    (dmin, pairMin) ← (dL, pairL)
  <strong>endif</strong>
  yS ← { p ∈ yP : |xm - p<sub>x</sub>| &#x3C; dmin }
  nS ← number of points in yS
  (closest, closestPair) ← (dmin, pairMin)
  <strong>for</strong> i <strong>from</strong> 1 <strong>to</strong> nS - 1
    k ← i + 1
    <strong>while</strong> k ≤ nS <strong>and</strong> yS(k)<sub>y</sub> - yS(i)<sub>y</sub> &#x3C; dmin
      <strong>if</strong> |yS(k) - yS(i)| &#x3C; closest <strong>then</strong>
        (closest, closestPair) ← (|yS(k) - yS(i)|, {yS(k), yS(i)})
      <strong>endif</strong>
      k ← k + 1
    <strong>endwhile</strong>
  <strong>endfor</strong>
  <strong>return</strong> closest, closestPair
<strong>endif</strong>
</pre>

Для вхідних даних, слід очікувати, що аргумент буде масивом з `Point` об'єктами, і `x` та `y` заданими числами. Поверніть об'єкт, що містить ключові пари значень для `distance` та `pair` (пара двох найближчих точок).

Наприклад, `getClosestPair` з вхідним масивом `points`:

```js
const points = [
  new Point(1, 2),
  new Point(3, 3),
  new Point(2, 2)
];
```

Має повернути:

```js
{
  distance: 1,
  pair: [
    {
      x: 1,
      y: 2
    },
    {
      x: 2,
      y: 2
    }
  ]
}
```

**Note:** Сортуйте `pair` масиви за їхніми `x` значеннями у зростаючому порядку.


# --hints--

`getClosestPair` має бути функцією.

```js
assert(typeof getClosestPair === 'function');
```

`getClosestPair(points1).distance` має бути `0.0894096443343775`.

```js
assert.equal(getClosestPair(points1).distance, answer1.distance);
```

`getClosestPair(points1).pair` має бути `[ { x: 7.46489, y: 4.6268 }, { x: 7.46911, y: 4.71611 } ]`.

```js
assert.deepEqual(
  JSON.parse(JSON.stringify(getClosestPair(points1))).pair,
  answer1.pair
);
```

`getClosestPair(points2).distance` має бути `65.06919393998976`.

```js
assert.equal(getClosestPair(points2).distance, answer2.distance);
```

`getClosestPair(points2).pair` має бути `[ { x: 37134, y: 1963 }, { x: 37181, y: 2008 } ]`.

```js
assert.deepEqual(
  JSON.parse(JSON.stringify(getClosestPair(points2))).pair,
  answer2.pair
);
```

`getClosestPair(points3).distance` має бути `6754.625082119658`.

```js
assert.equal(getClosestPair(points3).distance, answer3.distance);
```

`getClosestPair(points3).pair` має бути `[ { x: 46817, y: 64975 }, { x: 48953, y: 58567 } ]`.

```js
assert.deepEqual(
  JSON.parse(JSON.stringify(getClosestPair(points3))).pair,
  answer3.pair
);
```

# --seed--

## --after-user-code--

```js
const points1 = [
    new Point(0.748501, 4.09624),
    new Point(3.00302, 5.26164),
    new Point(3.61878,  9.52232),
    new Point(7.46911,  4.71611),
    new Point(5.7819,   2.69367),
    new Point(2.34709,  8.74782),
    new Point(2.87169,  5.97774),
    new Point(6.33101,  0.463131),
    new Point(7.46489,  4.6268),
    new Point(1.45428,  0.087596)
];

const answer1 = {
  distance: 0.0894096443343775,
  pair: [
    {
      x: 7.46489,
      y: 4.6268
    },
    {
      x: 7.46911,
      y: 4.71611
    }
  ]
};

const points2 = [
  new Point(37100, 13118),
  new Point(37134, 1963),
  new Point(37181, 2008),
  new Point(37276, 21611),
  new Point(37307, 9320)
];

const answer2 = {
  distance: 65.06919393998976,
  pair: [
    {
      x: 37134,
      y: 1963
    },
    {
      x: 37181,
      y: 2008
    }
  ]
};

const points3 = [
  new Point(16910, 54699),
  new Point(14773, 61107),
  new Point(95547, 45344),
  new Point(95951, 17573),
  new Point(5824, 41072),
  new Point(8769, 52562),
  new Point(21182, 41881),
  new Point(53226, 45749),
  new Point(68180, 887),
  new Point(29322, 44017),
  new Point(46817, 64975),
  new Point(10501, 483),
  new Point(57094, 60703),
  new Point(23318, 35472),
  new Point(72452, 88070),
  new Point(67775, 28659),
  new Point(19450, 20518),
  new Point(17314, 26927),
  new Point(98088, 11164),
  new Point(25050, 56835),
  new Point(8364, 6892),
  new Point(37868, 18382),
  new Point(23723, 7701),
  new Point(55767, 11569),
  new Point(70721, 66707),
  new Point(31863, 9837),
  new Point(49358, 30795),
  new Point(13041, 39744),
  new Point(59635, 26523),
  new Point(25859, 1292),
  new Point(1551, 53890),
  new Point(70316, 94479),
  new Point(48549, 86338),
  new Point(46413, 92747),
  new Point(27186, 50426),
  new Point(27591, 22655),
  new Point(10905, 46153),
  new Point(40408, 84202),
  new Point(52821, 73520),
  new Point(84865, 77388),
  new Point(99819, 32527),
  new Point(34404, 75657),
  new Point(78457, 96615),
  new Point(42140, 5564),
  new Point(62175, 92342),
  new Point(54958, 67112),
  new Point(4092, 19709),
  new Point(99415, 60298),
  new Point(51090, 52158),
  new Point(48953, 58567)
];

const answer3 = {
  distance: 6754.625082119658,
  pair: [
    {
      x: 46817,
      y: 64975
    },
    {
      x: 48953,
      y: 58567
    }
  ]
}
```

## --seed-contents--

```js
const Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function() {
  return this.x;
};
Point.prototype.getY = function() {
  return this.y;
};

function getClosestPair(pointsArr) {

  return true;
}
```

# --solutions--

```js
const Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function() {
  return this.x;
};
Point.prototype.getY = function() {
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

    var n = Px.length,
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
        pair: closestPair.sort((pointA, pointB) => pointA.x - pointB.x)
    };
};

function getClosestPair(points) {
  const sortX = function(a, b) { return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0); }
  const sortY = function(a, b) { return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0); }

  const Px = mergeSort(points, sortX);
  const Py = mergeSort(points, sortY);

  return closestPair(Px, Py);
}
```
