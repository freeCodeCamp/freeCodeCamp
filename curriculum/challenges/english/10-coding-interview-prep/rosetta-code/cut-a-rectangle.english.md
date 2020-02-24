---
id: 5a23c84252665b21eecc7e06
title: Cut a rectangle
challengeType: 5
isHidden: false
forumTopicId: 302242
---

## Description

<section id='description'>

A given rectangle is made from <i>m</i> × <i>n</i> squares. If <i>m</i> and <i>n</i> are not both odd, then it is possible to cut a path through the rectangle along the square edges such that the rectangle splits into two connected pieces with the same shape (after rotating one of the pieces by 180°). All such paths for 2 × 2 and 4 × 3 rectangles are shown below.

<div style="width: 100%; text-align: center;">
  <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="520" height="170" aria-hidden="true" alt="Diagram showing the possible paths for 2 by 2 and 4 by 3 rectangles">
    <style>
    .g { fill: none; stroke: #ccc }
    .s, .s2 { fill: #bff; stroke: black; fill-opacity: .4 }
    .s2 { fill: #fbf }
    .d { stroke:black; fill:none}
    </style>
    <defs>	<g id="m">
      <g id="h4"><g id="h2">
      <path id="h" d="m0 10h 640" class="g"/>
      <use xlink:href="#h" transform="translate(0,20)"/></g>
      <use xlink:href="#h2" transform="translate(0, 40)"/></g>
      <use xlink:href="#h4" transform="translate(0,80)"/>
      <g id="v8"><g id="v4"><g id="v2">
      <path id="v" d="m10 0v160 m 20 0 v-160" class="g"/>
      <use xlink:href="#v" transform="translate(40,0)"/></g>
      <use xlink:href="#v2" transform="translate(80,0)"/></g>
      <use xlink:href="#v4" transform="translate(160,0)"/></g>
      <use xlink:href="#v8" transform="translate(320,0)"/></g>
      <path id="b" d="m0 0h80v60h-80z" class="s"/>
    </defs>
    <g transform="translate(.5,.5)">
    <use xlink:href="#m"/>
    <g transform="translate(10,10)">
    <path d="m0 0v40h40v-40z" class="s2"/><path d="m20 0v40" class="d"/>
    <path d="m60 0v40h40v-40z" class="s2"/><path d="m60 20h40" class="d"/>
    <g transform="translate(120, 0)">
    <use xlink:href="#b"/><path d="m0 20h40v20h40" class="d"/></g>
    <g transform="translate(220, 0)">
    <use xlink:href="#b"/><path d="m0 40h40v-20h40" class="d"/></g>
    <g transform="translate(320, 0)">
    <use xlink:href="#b"/><path d="m20 0v40h20v-20h20v40" class="d"/></g>
    <g transform="translate(420, 0)">
    <use xlink:href="#b"/><path d="m60 0v40h-20v-20h-20v40" class="d"/></g>
    <g transform="translate(20, 80)">
    <use xlink:href="#b"/><path d="m40 0v60" class="d"/></g>
    <g transform="translate(120, 80)">
    <use xlink:href="#b"/><path d="m60 0v20h-20v20h-20v20" class="d"/></g>
    <g transform="translate(220, 80)">
    <use xlink:href="#b"/><path d="m20 0v20h20v20h20v20" class="d"/></g>
    <g transform="translate(320, 80)">
    <use xlink:href="#b"/><path d="m0 20h20v20h20v-20h20v20h20" class="d"/></g>
    <g transform="translate(420, 80)">
    <use xlink:href="#b"/><path d="m0 40h20v-20h20v20h20v-20h20" class="d"/></g>
    </g></g>
    </svg>
  </div>
</section>

## Instructions

<section id='instructions'>
Write a function that calculates the number of different ways to cut an <i>m</i> × <i>n</i> rectangle.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>cutRectangle</code> should be a function.
    testString: assert(typeof cutRectangle == 'function');
  - text: <code>cutRectangle(2, 2)</code> should return a number.
    testString: assert(typeof cutRectangle(2, 2) == 'number');
  - text: <code>cutRectangle(2, 2)</code> should return <code>2</code>.
    testString: assert.equal(cutRectangle(2, 2), 2);
  - text: <code>cutRectangle(4, 3)</code> should return <code>9</code>.
    testString: assert.equal(cutRectangle(4, 3), 9);
  - text: <code>cutRectangle(4, 4)</code> should return <code>22</code>.
    testString: assert.equal(cutRectangle(4, 4), 22);
  - text: <code>cutRectangle(8, 3)</code> should return <code>53</code>.
    testString: assert.equal(cutRectangle(8, 3), 53);
  - text: <code>cutRectangle(7, 4)</code> should return <code>151</code>.
    testString: assert.equal(cutRectangle(7, 4), 151);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function cutRectangle(w, h) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

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

</section>
