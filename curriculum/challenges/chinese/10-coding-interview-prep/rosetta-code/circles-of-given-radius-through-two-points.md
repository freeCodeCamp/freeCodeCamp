---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
challengeType: 5
videoUrl: ''
localeTitle: 给定半径的圆圈通过两个点
---

## Description
<section id="description"><p>给定平面上的两个点和半径，通常可以通过这些点绘制给定半径的两个圆。 </p>例外：零半径应视为从不描述圆（除非点是重合的）。如果这些点是重合的，则可以绘制无限数量的圆，其圆周上的点可以被绘制，除非半径也等于零，然后将圆圈折叠到一个点。如果点形成直径，则返回单个圆。如果这些点相距太远则无法绘制圆圈。任务：实现一个取两个点和一个半径的函数，并通过这些点返回两个圆。对于每个结果圆，提供每个圆的中心的坐标，四舍五入到四个十进制数字。将每个坐标作为数组返回，并作为数组数组进行坐标。对于边缘情况，请返回以下内容：如果点在直径上，则返回一个点。如果半径也为零，则返回<code>&quot;Radius Zero&quot;</code> 。如果点重合，则返回<code>&quot;Coincident point. Infinite solutions&quot;</code> 。如果点与直径相距更远，则返回<code>&quot;No intersection. Points further apart than circle diameter&quot;</code>更远的<code>&quot;No intersection. Points further apart than circle diameter&quot;</code> 。样本输入： <pre> p1 p2 r
0.1234,0.9876 0.8765,0.2345 2.0
0.0000,2.000000 0.0000,0.0000 1.0
0.1234,0.9876 0.1234,0.9876 2.0
0.1234,0.9876 0.8765,0.2345 0.5
0.1234,0.9876 0.1234,0.9876 0.0
</pre>参考：从数学论坛@Drexel的<a href="http://mathforum.org/library/drmath/view/53027.html" title="链接：http：//mathforum.org/library/drmath/view/53027.html">2点和半径中找到一个</a>圆心</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code>是一个函数。
    testString: assert(typeof getCircles === 'function');
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code>应该返回<code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code> 。'
    testString: assert.deepEqual(getCircles(...testCases[0]), answers[0]);
  - text: '<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code>应该返回<code>[0, 1]</code>'
    testString: assert.deepEqual(getCircles(...testCases[1]), answers[1]);
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code>应返回<code>Coincident point. Infinite solutions</code>'
    testString: assert.deepEqual(getCircles(...testCases[2]), answers[2]);
  - text: '<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code>应返回<code>No intersection. Points further apart than circle diameter</code>'
    testString: assert.deepEqual(getCircles(...testCases[3]), answers[3]);
  - text: '<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code>应返回<code>Radius Zero</code>'
    testString: assert.deepEqual(getCircles(...testCases[4]), answers[4]);

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
// solution required
```

/section>
