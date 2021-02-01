---
id: 5951a53863c8a34f02bf1bdc
title: 最近对的问题
challengeType: 5
videoUrl: ''
dashedName: closest-pair-problem
---

# --description--

任务：

提供一个函数来在二维中找到一组给定点中最接近的两个点，即求解平面情况下的[最近点对问题](<https://en.wikipedia.org/wiki/Closest pair of points problem> "wp：最近点的问题") 。

直接的解决方案是O（n <sup>2</sup> ）算法（我们可以称之为强力算法）;伪代码（使用索引）可以简单地：

```
 bruteForceClosestPair of P（1），P（2），... P（N）
如果N <2那么
返回∞
其他
minDistance←| P（1） -  P（2）|
minPoints←{P（1），P（2）}
foreachi∈[1，N-1]
foreachj∈[i + 1，N]
if | P（i） -  P（j）| <minDistance然后
minDistance←| P（i） -  P（j）|
minPoints←{P（i），P（j）}
万一
ENDFOR
ENDFOR
return minDistance，minPoints
万一
```

</pre><p>一个更好的算法是基于递归分而治之的方法，正如<a href='https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case' title='wp：最近点的问题#Planar_case'>维基百科最近的一对点问题</a>所解释的那样，即O（n log n）;伪代码可以是： </p><pre>最近的（xP，yP）
  其中xP是P（1）.. P（N）按x坐标排序，和
  yP是P（1）.. P（N）按y坐标排序（升序）
如果N≤3那么
  使用强力算法返回xP的最近点
其他
  xL←xP点从1到⌈N/2⌉
  xR←xP点从⌈N/2⌉+ 1到N.
  xm←xP（⌈N/2⌉） <sub>x</sub>
  基←{P∈YP：P <sub>X≤XM}</sub>
  yR←{p∈yP：p <sub>x</sub> > xm}
  （dL，pairL）←nearestPair（xL，yL）
  （dR，pairR）←nearestRair（xR，yR）
  （dmin，pairMin）←（dR，pairR）
  如果dL &#x3C;dR则
    （dmin，pairMin）←（dL，pairL）
  万一
  yS←{p∈yP：| xm  -  p <sub>x</sub> | &#x3C;dmin}
  nS←yS中的点数
  （最近，最近的公里）←（dmin，pairMin）
  我从1到nS  -  1
    k←i + 1
    而k≤nS和yS（k） <sub>y</sub> -yS（i） <sub>y</sub> &#x3C;dmin
      if | yS（k） -  yS（i）| &#x3C;最接近的
        （最近，最近的公里）←（| yS（k） -  yS（i）|，{yS（k），yS（i）}）
      万一
      k←k + 1
    ENDWHILE
  ENDFOR
  返回最近，最近的
万一
</pre>参考和进一步阅读： <a href='https://en.wikipedia.org/wiki/Closest pair of points problem' title='wp：最近点的问题'>最近的一对点问题</a>  <a href='http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html' title='链接：http：//www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html'>最近的一对（麦吉尔）</a>  <a href='http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf' title='链接：http：//www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf'>最近的一对（UCSB）</a>  <a href='http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf' title='链接：http：//classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf'>最近的一对（WUStL）</a>  <a href='http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt' title='链接：http：//www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt'>最近的一对（IUPUI）</a>  <p>对于输入，期望参数是一个对象（点）数组，其中<code>x</code>和<code>y</code>成员设置为数字。对于输出，返回一个包含键的对象： <code>distance</code>和<code>pair</code>值对（即两对最近点的对）。 </p>

# --hints--

`getClosestPair`是一个函数。

```js
assert(typeof getClosestPair === 'function');
```

距离应如下。

```js
assert.equal(getClosestPair(points1).distance, answer1.distance);
```

要点应如下。

```js
assert.deepEqual(
  JSON.parse(JSON.stringify(getClosestPair(points1))).pair,
  answer1.pair
);
```

距离应如下。

```js
assert.equal(getClosestPair(points2).distance, answer2.distance);
```

要点应如下。

```js
assert.deepEqual(
  JSON.parse(JSON.stringify(getClosestPair(points2))).pair,
  answer2.pair
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
