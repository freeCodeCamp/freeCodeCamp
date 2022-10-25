---
id: 5a23c84252665b21eecc8045
title: サザーランド・ホッジマン・ポリゴンクリッピング
challengeType: 1
forumTopicId: 302336
dashedName: sutherland-hodgman-polygon-clipping
---

# --description--

The Sutherland-Hodgman clipping algorithm finds the polygon that is the intersection between an arbitrary polygon (the "subject polygon") and a convex polygon (the "clip polygon"). これは、表示する必要のないポリゴンのパーツを排除することによって、シーンの表示の複雑さを軽減するためにコンピュータグラフィックス (特に2Dグラフィックス) に使用されます。 点によって定義されたクローズドポリゴンを取ります:

<pre>[(50, 150), (200, 50), (350, 150), (350, 300), (250, 300), (200, 250), (150, 350), (100, 250), (100, 200)]</pre>

点によって定義された長方形でクリッピングします:

<pre>[(100, 100), (300, 100), (300, 300), (100, 300)]</pre>

# --instructions--

パラメータとして 2 つの配列を取る関数を記述してください。 最初の配列にはサブジェクトポリゴンの点が、2番目の配列にはクリップポリゴンの点が含まれます。 この関数は、クリップされたポリゴンの点を含む配列を返さなければなりません。 各数値は小数点以下3桁に丸められます。

# --hints--

`clip` は関数とします。

```js
assert(typeof clip == 'function');
```

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` は配列を返す必要があります。

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

`clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])` は `[[100, 116.667], [125, 100], [275, 100], [300, 116.667], [300, 300], [250, 300], [200, 250], [175, 300], [125, 300], [100, 250]]` を返す必要があります。

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

`clip([[150, 200], [400, 450], [30, 50]], [[10, 10], [300, 200], [400, 600], [100, 300]])` は `[[150, 200], [350, 400], [348.611, 394.444], [30, 50]]` を返す必要があります。

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

`clip([[250, 200], [100, 450], [130, 250]], [[50, 60], [100, 230], [400, 600], [100, 300]])` は `[[129.167, 329.167], [119.565, 319.565], [121.854, 304.305]]` を返す必要があります。

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
