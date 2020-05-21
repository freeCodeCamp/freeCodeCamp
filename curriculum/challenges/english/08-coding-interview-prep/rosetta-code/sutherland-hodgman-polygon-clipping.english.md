---
id: 5a23c84252665b21eecc8045
title: Sutherland-Hodgman polygon clipping
challengeType: 5
isHidden: false
forumTopicId: 302336
---

## Description

<section id='description'>

The <a href="https://en.wikipedia.org/wiki/Sutherland-Hodgman clipping algorithm" target="_blank">Sutherland-Hodgman clipping algorithm</a> finds the polygon that is the intersection between an arbitrary polygon (the "subject polygon") and a convex polygon (the "clip polygon").
It is used in computer graphics (especially 2D graphics) to reduce the complexity of a scene being displayed by eliminating parts of a polygon that do not need to be displayed.
Take the closed polygon defined by the points:

<pre>[(50, 150), (200, 50), (350, 150), (350, 300), (250, 300), (200, 250), (150, 350), (100, 250), (100, 200)]</pre>

and clip it by the rectangle defined by the points:

<pre>[(100, 100), (300, 100), (300, 300), (100, 300)]</pre>
</section>

## Instructions

<section id='instructions'>

Write a function that takes 2 arrays as parameters. The first array contains the points of the subject polygon and the second array contains the points of the clipping polygon. The function should return an array containing the points of the clipped polygon. Each number should be rounded to 3 decimal places.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>clip</code> should be a function.
    testString: assert(typeof clip == 'function');
  - text: <code>clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])</code> should return an array.
    testString: assert(Array.isArray(clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])));
  - text: <code>clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]])</code> should return <code>[[100, 116.667], [125, 100], [275, 100], [300, 116.667], [300, 300], [250, 300], [200, 250], [175, 300], [125, 300], [100, 250]]</code>.
    testString: assert.deepEqual(clip([[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]], [[100, 100], [300, 100], [300, 300], [100, 300]]), [[100, 116.667], [125, 100], [275, 100], [300, 116.667], [300, 300], [250, 300], [200, 250], [175, 300], [125, 300], [100, 250]]);
  - text: <code>clip([[150, 200], [400, 450], [30, 50]], [[10, 10], [300, 200], [400, 600], [100, 300]])</code> should return <code>[[150, 200], [350, 400], [348.611, 394.444], [30, 50]]</code>.
    testString: assert.deepEqual(clip([[150, 200], [400, 450], [30, 50]], [[10, 10], [300, 200], [400, 600], [100, 300]]), [[150, 200], [350, 400], [348.611, 394.444], [30, 50]]);
  - text: <code>clip([[250, 200], [100, 450], [130, 250]], [[50, 60], [100, 230], [400, 600], [100, 300]])</code> should return <code>[[129.167, 329.167], [119.565, 319.565], [121.854, 304.305]]</code>.
    testString: assert.deepEqual(clip([[250, 200], [100, 450], [130, 250]], [[50, 60], [100, 230], [400, 600], [100, 300]]), [[129.167, 329.167], [119.565, 319.565], [121.854, 304.305]]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function clip(subjectPolygon, clipPolygon) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

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

</section>
