---
id: 5951815dd895584b06884620
title: 给定半径的圆圈通过两个点
challengeType: 5
videoUrl: ''
dashedName: circles-of-given-radius-through-two-points
---

# --description--

<p>给定平面上的两个点和半径，通常可以通过这些点绘制给定半径的两个圆。 </p>例外：零半径应视为从不描述圆（除非点是重合的）。如果这些点是重合的，则可以绘制无限数量的圆，其圆周上的点可以被绘制，除非半径也等于零，然后将圆圈折叠到一个点。如果点形成直径，则返回单个圆。如果这些点相距太远则无法绘制圆圈。任务：实现一个取两个点和一个半径的函数，并通过这些点返回两个圆。对于每个结果圆，提供每个圆的中心的坐标，四舍五入到四个十进制数字。将每个坐标作为数组返回，并作为数组数组进行坐标。对于边缘情况，请返回以下内容：如果点在直径上，则返回一个点。如果半径也为零，则返回<code>"Radius Zero"</code> 。如果点重合，则返回<code>"Coincident point. Infinite solutions"</code> 。如果点与直径相距更远，则返回<code>"No intersection. Points further apart than circle diameter"</code>更远的<code>"No intersection. Points further apart than circle diameter"</code> 。样本输入： <pre> p1 p2 r
0.1234,0.9876 0.8765,0.2345 2.0
0.0000,2.000000 0.0000,0.0000 1.0
0.1234,0.9876 0.1234,0.9876 2.0
0.1234,0.9876 0.8765,0.2345 0.5
0.1234,0.9876 0.1234,0.9876 0.0
</pre>参考：从数学论坛@Drexel的<a href='http://mathforum.org/library/drmath/view/53027.html' title='链接：http：//mathforum.org/library/drmath/view/53027.html'>2点和半径中找到一个</a>圆心

# --hints--

`getCircles`是一个函数。

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)`应该返回`[[1.8631, 1.9742], [-0.8632, -0.7521]]` 。

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)`应该返回`[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)`应返回`Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)`应返回`No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)`应返回`Radius Zero`

```js
assert.deepEqual(getCircles(...testCases[4]), answers[4]);
```

# --seed--

## --after-user-code--

```js
const testCases = [
  [[0.1234, 0.9876], [0.8765, 0.2345], 2.0],
  [[0.0000, 2.0000], [0.0000, 0.0000], 1.0],
  [[0.1234, 0.9876], [0.1234, 0.9876], 2.0],
  [[0.1234, 0.9876], [0.8765, 0.2345], 0.5],
  [[0.1234, 0.9876], [0.1234, 0.9876], 0.0]
];
const answers = [
  [[1.8631, 1.9742], [-0.8632, -0.7521]],
  [0, 1],
  'Coincident point. Infinite solutions',
  'No intersection. Points further apart than circle diameter',
  'Radius Zero'
];
```

## --seed-contents--

```js
function getCircles(...args) {

  return true;
}
```

# --solutions--

```js
const hDist = (p1, p2) => Math.hypot(...p1.map((e, i) => e - p2[i])) / 2;
const pAng = (p1, p2) => Math.atan(p1.map((e, i) => e - p2[i]).reduce((p, c) => c / p, 1));
const solveF = (p, r) => t => [parseFloat((r * Math.cos(t) + p[0]).toFixed(4)), parseFloat((r * Math.sin(t) + p[1]).toFixed(4))];
const diamPoints = (p1, p2) => p1.map((e, i) => parseFloat((e + (p2[i] - e) / 2).toFixed(4)));

function getCircles(...args) {
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
