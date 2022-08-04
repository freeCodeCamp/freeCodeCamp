---
id: 5a23c84252665b21eecc7e06
title: 長方形を切る
challengeType: 1
forumTopicId: 302242
dashedName: cut-a-rectangle
---

# --description--

長方形が *m* × *n* の正方形から作られているとします。 *m* と *n* が両方とも奇数でない場合、(片方を180°回転させて) 長方形が同じ形状のつながった2ピースに分割されるように、正方形の端に沿って長方形を切ることができます。 以下のように、2 × 2 と 4 × 3 の長方形を切ります。

<div style="width: 100%; text-align: center;">
  <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="520" height="170" aria-hidden="true" alt="Diagram showing the possible paths for 2 by 2 and 4 by 3 rectangles">
    <style>
      .diagram-g { fill: none; stroke: #ccc }
      .diagram-s, .diagram-s2 { fill: #bff; stroke: black; fill-opacity: .4 }
      .diagram-s2 { fill: #fbf }
      .diagram-d { stroke:black; fill:none}
    </style>
    <defs>
      <g id="diagram-m">
        <g id="diagram-h4">
          <g id="diagram-h2">
            <path id="diagram-h" d="m0 10h 640" class="diagram-g"/>
            <use xlink:href="#diagram-h" transform="translate(0, 20)"/>
          </g>
          <use xlink:href="#diagram-h2" transform="translate(0, 40)"/>
        </g>
        <use xlink:href="#diagram-h4" transform="translate(0, 80)"/>
        <g id="diagram-v8">
          <g id="diagram-v4">
            <g id="diagram-v2">
              <path id="diagram-v" d="m10 0v160 m 20 0 v-160" class="diagram-g"/>
              <use xlink:href="#diagram-v" transform="translate(40, 0)"/>
            </g>
            <use xlink:href="#diagram-v2" transform="translate(80, 0)"/>
          </g>
          <use xlink:href="#diagram-v4" transform="translate(160, 0)"/>
        </g>
        <use xlink:href="#diagram-v8" transform="translate(320, 0)"/>
      </g>
      <path id="diagram-b" d="m0 0h80v60h-80z" class="diagram-s"/>
    </defs>
    <g transform="translate(.5, .5)">
      <use xlink:href="#diagram-m"/>
      <g transform="translate(10, 10)">
        <path d="m0 0v40h40v-40z" class="diagram-s2"/>
        <path d="m20 0v40" class="diagram-d"/>
        <path d="m60 0v40h40v-40z" class="diagram-s2"/>
        <path d="m60 20h40" class="diagram-d"/>
        <g transform="translate(120, 0)">
          <use xlink:href="#diagram-b"/>
          <path d="m0 20h40v20h40" class="diagram-d"/>
        </g>
        <g transform="translate(220, 0)">
          <use xlink:href="#diagram-b"/>
          <path d="m0 40h40v-20h40" class="diagram-d"/>
        </g>
        <g transform="translate(320, 0)">
          <use xlink:href="#diagram-b"/>
          <path d="m20 0v40h20v-20h20v40" class="diagram-d"/>
        </g>
        <g transform="translate(420, 0)">
          <use xlink:href="#diagram-b"/>
          <path d="m60 0v40h-20v-20h-20v40" class="diagram-d"/>
        </g>
        <g transform="translate(20, 80)">
          <use xlink:href="#diagram-b"/>
          <path d="m40 0v60" class="diagram-d"/>
        </g>
        <g transform="translate(120, 80)">
          <use xlink:href="#diagram-b"/>
          <path d="m60 0v20h-20v20h-20v20" class="diagram-d"/>
        </g>
        <g transform="translate(220, 80)">
          <use xlink:href="#diagram-b"/>
          <path d="m20 0v20h20v20h20v20" class="diagram-d"/>
        </g>
        <g transform="translate(320, 80)">
          <use xlink:href="#diagram-b"/>
          <path d="m0 20h20v20h20v-20h20v20h20" class="diagram-d"/>
        </g>
        <g transform="translate(420, 80)">
          <use xlink:href="#diagram-b"/>
          <path d="m0 40h20v-20h20v20h20v-20h20" class="diagram-d"/>
        </g>
      </g>
    </g>
  </svg>
</div>

# --instructions--

*m* × *n* の長方形の切り方が何通りあるかを計算する関数を作成します。

# --hints--

`cutRectangle` という関数です。

```js
assert(typeof cutRectangle == 'function');
```

`cutRectangle(2, 2)` は数字を返します。

```js
assert(typeof cutRectangle(2, 2) == 'number');
```

`cutRectangle(2, 2)` は `2` を返します。

```js
assert.equal(cutRectangle(2, 2), 2);
```

`cutRectangle(4, 3)` は `9` を返します。

```js
assert.equal(cutRectangle(4, 3), 9);
```

`cutRectangle(4, 4)` は `22` を返します。

```js
assert.equal(cutRectangle(4, 4), 22);
```

`cutRectangle(8, 3)` は `53` を返します。

```js
assert.equal(cutRectangle(8, 3), 53);
```

`cutRectangle(7, 4)` は `151` を返します。

```js
assert.equal(cutRectangle(7, 4), 151);
```

# --seed--

## --seed-contents--

```js
function cutRectangle(w, h) {

}
```

# --solutions--

```js
function cutRectangle(w, h) {
  if (w % 2 == 1 && h % 2 == 1) return;

  var dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

  var grid = new Array(h);
  for (var i = 0; i < grid.length; i++) grid[i] = new Array(w);
  var stack = [];

  var half = Math.floor((w * h) / 2);
  var bits = Math.pow(2, half) - 1;
  var result = 0;
  for (; bits > 0; bits -= 2) {
    for (var i = 0; i < half; i++) {
      var r = Math.floor(i / w);
      var c = i % w;
      grid[r][c] = (bits & (1 << i)) != 0 ? 1 : 0;
      grid[h - r - 1][w - c - 1] = 1 - grid[r][c];
    }

    stack.push(0);
    grid[0][0] = 2;
    var count = 1;
    while (stack.length != 0) {
      var pos = stack.pop();
      var r = Math.floor(pos / w);
      var c = pos % w;

      for (var dir of dirs) {
        var nextR = r + dir[0];
        var nextC = c + dir[1];

        if (nextR >= 0 && nextR < h && nextC >= 0 && nextC < w) {
          if (grid[nextR][nextC] == 1) {
            stack.push(nextR * w + nextC);
            grid[nextR][nextC] = 2;
            count++;
          }
        }
      }
    }

    if (count == half) {
      result++;
    }
  }

  return result;
}
```
