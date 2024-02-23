---
id: 5a23c84252665b21eecc8045
title: Sutherland-Hodgman 多边形裁剪
challengeType: 1
forumTopicId: 302336
dashedName: sutherland-hodgman-polygon-clipping
---

# --description--

The Sutherland-Hodgman clipping algorithm finds the polygon that is the intersection between an arbitrary polygon (the "subject polygon") and a convex polygon (the "clip polygon"). It is used in computer graphics (especially 2D graphics) to reduce the complexity of a scene being displayed by eliminating parts of a polygon that do not need to be displayed. Take the closed polygon defined by the points:

<pre>[(50, 150), (200, 50), (350, 150), (350, 300), (250, 300), (200, 250), (150, 350), (100, 250), (100, 200)]</pre>

并通过点定义的矩形对其进行剪辑：

<pre>[(100, 100), (300, 100), (300, 300), (100, 300)]</pre>

# --instructions--

编写一个以 2 个数组作为参数的函数。 第一个数组包含主题多边形的点，第二个数组包含裁剪多边形的点。 该函数应返回一个包含裁剪多边形点的数组。 每个数字应四舍五入到小数点后 3 位。

# --hints--

`clip` 应该是一个函数。

```js
assert(typeof clip == 'function');
```

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` 应该返回一个数组。

```js
assert(
  Array.isArray(
    clip(
      [
        [50, 150],
        [200, 50],
        [350, 150],
        [350, 300],
        [250, 300],
        [200, 250],
        [150, 350],
        [100, 250],
        [100, 200]
      ],
      [
        [100, 100],
        [300, 100],
        [300, 300],
        [100, 300]
      ]
    )
  )
);
```

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` 应该返回 `[[100, 116.667], [125, 100], [275, 100], [300, 116.667], [300, 300], [250, 300], [200, 250], [175, 300], [125, 300], [100, 250]]`。

```js
assert.deepEqual(
  clip(
    [
      [50, 150],
      [200, 50],
      [350, 150],
      [350, 300],
      [250, 300],
      [200, 250],
      [150, 350],
      [100, 250],
      [100, 200]
    ],
    [
      [100, 100],
      [300, 100],
      [300, 300],
      [100, 300]
    ]
  ),
  [
    [100, 116.667],
    [125, 100],
    [275, 100],
    [300, 116.667],
    [300, 300],
    [250, 300],
    [200, 250],
    [175, 300],
    [125, 300],
    [100, 250]
  ]
);
```

`clip([[150, 200], [400, 450], [30, 50]], [[10, 10], [300, 200], [400, 600], [100, 300]])` 应该返回 `[[150, 200], [350, 400], [348.611, 394.444], [30, 50]]`。

```js
assert.deepEqual(
  clip(
    [
      [150, 200],
      [400, 450],
      [30, 50]
    ],
    [
      [10, 10],
      [300, 200],
      [400, 600],
      [100, 300]
    ]
  ),
  [
    [150, 200],
    [350, 400],
    [348.611, 394.444],
    [30, 50]
  ]
);
```

`clip([[250, 200], [100, 450], [130, 250]], [[50, 60], [100, 230], [400, 600], [100, 300]])` 应该返回 `[[129.167, 329.167], [119.565, 319.565], [121.854, 304.305]]`。

```js
assert.deepEqual(
  clip(
    [
      [250, 200],
      [100, 450],
      [130, 250]
    ],
    [
      [50, 60],
      [100, 230],
      [400, 600],
      [100, 300]
    ]
  ),
  [
    [129.167, 329.167],
    [119.565, 319.565],
    [121.854, 304.305]
  ]
);
```

# --seed--

## --seed-contents--

```js
function clip(subjectPolygon, clipPolygon) {

}
```

# --solutions--

```js
function clip(subjectPolygon, clipPolygon) {
  var cp1, cp2, s, e, i, j;
  var inside = function(p) {
    return (
      (cp2[0] - cp1[0]) * (p[1] - cp1[1]) > (cp2[1] - cp1[1]) * (p[0] - cp1[0])
    );
  };
  var intersection = function() {
    var dc = [cp1[0] - cp2[0], cp1[1] - cp2[1]],
      dp = [s[0] - e[0], s[1] - e[1]],
      n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
      n2 = s[0] * e[1] - s[1] * e[0],
      n3 = 1.0 / (dc[0] * dp[1] - dc[1] * dp[0]);
    return [(n1 * dp[0] - n2 * dc[0]) * n3, (n1 * dp[1] - n2 * dc[1]) * n3];
  };
  var outputList = subjectPolygon;
  cp1 = clipPolygon[clipPolygon.length - 1];
  for (j in clipPolygon) {
    var cp2 = clipPolygon[j];
    var inputList = outputList;
    outputList = [];
    s = inputList[inputList.length - 1]; //last on the input list
    for (i in inputList) {
      var e = inputList[i];
      if (inside(e)) {
        if (!inside(s)) {
          outputList.push(intersection());
        }
        outputList.push(e);
      } else if (inside(s)) {
        outputList.push(intersection());
      }
      s = e;
    }
    cp1 = cp2;
  }
  return outputList.map(e => e.map(f => Math.round(f * 1000) / 1000));
}
```
