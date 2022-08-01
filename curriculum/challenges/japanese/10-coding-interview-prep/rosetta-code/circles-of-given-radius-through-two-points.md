---
id: 5951815dd895584b06884620
title: 2点を通る指定半径の円
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

平面上の2点と半径が指定されると、指定半径の円が2点を通って2つ描かれます。

**例外:**

<ul>
  <li>半径が0である場合は、2点が完全に一致する場合を除き、円は描かれません。</li>
  <li>2点が完全に一致している場合、円周上にその点が存在する円を無数描くことができます。 ただし、半径もゼロである場合、円が点となります。</li>
  <li>2点が直径を形成する場合は、1つの円を返します。</li>
  <li>2点があまりにも離れている場合、円を描くことができません。</li>
</ul>

# --instructions--

2点と半径を受け取り、2点を通る二つの円を返す関数を作成します。 得られる各円の中心座標を小数点第4位に丸めます。 各座標を配列として、座標を配列の配列として返します。

**エッジケースの場合、以下を返します。**

<ul>
  <li>2点が直径上にある場合は、1 点を返します。 ただし、半径もゼロの場合は、<code>"Radius Zero"</code> を返します。</li>
  <li>2点が完全に一致する場合は、<code>"Coincident point. Infinite solutions"</code> を返します。</li>
  <li>2点が直径よりも離れている場合は、<code>"No intersection. Points further apart than circle diameter"</code> を返します。</li>
</ul>

**入力例**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` という関数です。

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` は `[[1.8631, 1.9742], [-0.8632, -0.7521]]` を返します。

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` は `[0, 1]` を返します。

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` は `Coincident point. Infinite solutions` を返します。

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` は `No intersection. Points further apart than circle diameter` を返します。

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` は`Radius Zero` を返します。

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
