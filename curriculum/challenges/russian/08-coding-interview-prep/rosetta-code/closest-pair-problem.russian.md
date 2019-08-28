---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
forumTopicId: 302232
localeTitle: Проблема ближайшей пары
---

## Description
<section id='description'>
Задача: <p> Предоставить функцию для поиска ближайших двух точек среди множества заданных точек в двух измерениях, т. <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Ближайшая проблема с двумя точками">Е. Решить задачу Ближайшей пары точек</a> в плоском случае. </p><p> Прямым решением является алгоритм O (n <sup>2</sup> ) (который мы можем назвать алгоритмом грубой силы); псевдокод (с использованием индексов) может быть простым: </p><pre> bruteForceClosestPair из P (1), P (2), ... P (N)
если N &lt;2, то
  return ∞
еще
  minDistance ← | P (1) - P (2) |
  minPoints ← {P (1), P (2)}
  foreach i ∈ [1, N-1]
    foreach j ∈ [i + 1, N]
      если | P (i) - P (j) | &lt;minDistance тогда
        minDistance ← | P (i) - P (j) |
        minPoints ← {P (i), P (j)}
      ENDIF
    ENDFOR
  ENDFOR
  return minDistance, minPoints
ENDIF
</pre><p> Лучший алгоритм основан на подходе рекурсивного разделения и покорения, как это объясняется также в <a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp: Ближайшая проблема с двумя точками # Planar_case">самой близкой проблеме точек Википедии</a> , которая является O (n log n); псевдокод может быть: </p><pre> ближайшая пара (xP, yP)
  где xP - P (1) .. P (N), отсортированная по координате x, и
  yP - P (1). P (N), отсортированный по координате y (по возрастанию)
если N ≤ 3, то
  возвращать ближайшие точки xP с использованием алгоритма грубой силы
еще
  xL ← точки xP от 1 до ⌈N / 2⌉
  xR ← точки xP от ⌈N / 2⌉ + 1 до N
  xm ← xP (⌈N / 2⌉) <sub>x</sub>
  yL ← {p ∈ yP: p <sub>x</sub> ≤ xm}
  yR ← {p ∈ yP: p <sub>x</sub> &gt; xm}
  (dL, pairL) ← ближайшая пара (xL, yL)
  (dR, pairR) ← ближайшая пара (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  если dL &lt;dR, тогда
    (dmin, pairMin) ← (dL, pairL)
  ENDIF
  yS ← {p ∈ yP: | xm - p <sub>x</sub> | &lt;dmin}
  nS ← число точек в yS
  (ближайший, ближайший) ← (dmin, pairMin)
  для i от 1 до nS - 1
    k ← i + 1
    в то время как k ≤ nS и yS (k) <sub>y</sub> - yS (i) <sub>y</sub> &lt;dmin
      если | yS (k) - yS (i) | &lt;ближе
        (ближайший ближайший Pair) ← (| yS (k) - yS (i) |, {yS (k), yS (i)})
      ENDIF
      k ← k + 1
    ENDWHILE
  ENDFOR
  вернуться ближайший, ближайший
ENDIF
</pre> Ссылки и дальнейшие чтения: <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="ссылка: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Самая близкая</a> <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp: Ближайшая проблема с двумя точками">пара проблем точек</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="ссылка: http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">Ближайшая пара (McGill)</a> <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="ссылка: http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">Ближайшая пара (UCSB)</a> <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="ссылка: http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">Ближайшая пара (WUStL)</a> <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="ссылка: http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">Ближайшая пара (IUPUI)</a> <p> Для ввода предположим, что аргумент представляет собой массив объектов (точек) с элементами <code>x</code> и <code>y</code> установленными в числа. Для вывода возвращаем объект, содержащий пары ключ: значение для <code>distance</code> и <code>pair</code> (т. Е. Пару из двух ближайших точек). </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code> is a function.
    testString: assert(typeof getClosestPair === 'function');
  - text: Distance should be the following.
    testString: assert.equal(getClosestPair(points1).distance, answer1.distance);
  - text: Points should be the following.
    testString: assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair);
  - text: Distance should be the following.
    testString: assert.equal(getClosestPair(points2).distance, answer2.distance);
  - text: Points should be the following.
    testString: assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

const points2 = [
  new Point(37100, 13118),
  new Point(37134, 1963),
  new Point(37181, 2008),
  new Point(37276, 21611),
  new Point(37307, 9320)
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

const benchmarkPoints = [
  new Point(16909, 54699),
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
  new Point(13041, 39745),
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

```

</div>

</section>

## Solution
<section id='solution'>

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
        pair: closestPair
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

</section>
