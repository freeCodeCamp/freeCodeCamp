---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
videoUrl: ''
localeTitle: 最近对的问题
---

## Description
<section id="description">任务： <p>提供一个函数来在二维中找到一组给定点中最接近的两个点，即求解平面情况下的<a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp：最近点的问题">最近点对问题</a> 。 </p><p>直接的解决方案是O（n <sup>2</sup> ）算法（我们可以称之为强力算法）;伪代码（使用索引）可以简单地： </p><pre> bruteForceClosestPair of P（1），P（2），... P（N）
如果N &lt;2那么
  返回∞
其他
  minDistance←| P（1） -  P（2）|
  minPoints←{P（1），P（2）}
  foreachi∈[1，N-1]
    foreachj∈[i + 1，N]
      if | P（i） -  P（j）| &lt;minDistance然后
        minDistance←| P（i） -  P（j）|
        minPoints←{P（i），P（j）}
      万一
    ENDFOR
  ENDFOR
  return minDistance，minPoints
万一
</pre><p>一个更好的算法是基于递归分而治之的方法，正如<a href="https://en.wikipedia.org/wiki/Closest pair of points problem#Planar_case" title="wp：最近点的问题#Planar_case">维基百科最近的一对点问题</a>所解释的那样，即O（n log n）;伪代码可以是： </p><pre>最近的（xP，yP）
  其中xP是P（1）.. P（N）按x坐标排序，和
  yP是P（1）.. P（N）按y坐标排序（升序）
如果N≤3那么
  使用强力算法返回xP的最近点
其他
  xL←xP点从1到⌈N/2⌉
  xR←xP点从⌈N/2⌉+ 1到N.
  xm←xP（⌈N/2⌉） <sub>x</sub>
  基←{P∈YP：P <sub>X≤XM}</sub>
  yR←{p∈yP：p <sub>x</sub> &gt; xm}
  （dL，pairL）←nearestPair（xL，yL）
  （dR，pairR）←nearestRair（xR，yR）
  （dmin，pairMin）←（dR，pairR）
  如果dL &lt;dR则
    （dmin，pairMin）←（dL，pairL）
  万一
  yS←{p∈yP：| xm  -  p <sub>x</sub> | &lt;dmin}
  nS←yS中的点数
  （最近，最近的公里）←（dmin，pairMin）
  我从1到nS  -  1
    k←i + 1
    而k≤nS和yS（k） <sub>y</sub> -yS（i） <sub>y</sub> &lt;dmin
      if | yS（k） -  yS（i）| &lt;最接近的
        （最近，最近的公里）←（| yS（k） -  yS（i）|，{yS（k），yS（i）}）
      万一
      k←k + 1
    ENDWHILE
  ENDFOR
  返回最近，最近的
万一
</pre>参考和进一步阅读： <a href="https://en.wikipedia.org/wiki/Closest pair of points problem" title="wp：最近点的问题">最近的一对点问题</a> <a href="http://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html" title="链接：http：//www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">最近的一对（麦吉尔）</a> <a href="http://www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf" title="链接：http：//www.cs.ucsb.edu/~suri/cs235/ClosestPair.pdf">最近的一对（UCSB）</a> <a href="http://classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf" title="链接：http：//classes.cec.wustl.edu/~cse241/handouts/closestpair.pdf">最近的一对（WUStL）</a> <a href="http://www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt" title="链接：http：//www.cs.iupui.edu/~xkzou/teaching/CS580/Divide-and-conquer-closestPair.ppt">最近的一对（IUPUI）</a> <p>对于输入，期望参数是一个对象（点）数组，其中<code>x</code>和<code>y</code>成员设置为数字。对于输出，返回一个包含键的对象： <code>distance</code>和<code>pair</code>值对（即两对最近点的对）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getClosestPair</code>是一个函数。
    testString: assert(typeof getClosestPair === 'function');
  - text: 距离应如下。
    testString: assert.equal(getClosestPair(points1).distance, answer1.distance);
  - text: 要点应如下。
    testString: assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair);
  - text: 距离应如下。
    testString: assert.equal(getClosestPair(points2).distance, answer2.distance);
  - text: 要点应如下。
    testString: assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair);

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
// solution required
```

/section>
