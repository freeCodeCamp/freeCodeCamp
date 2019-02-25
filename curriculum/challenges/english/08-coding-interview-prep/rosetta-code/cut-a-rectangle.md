---
id: 5a23c84252665b21eecc7e06
title: Cut a rectangle
challengeType: 5
---

## Description
<section id='description'>
A given rectangle is made from <i>m</i> × <i>n</i> squares. If <i>m</i> and <i>n</i> are not both odd, then it is possible to cut a path through the rectangle along the square edges such that the rectangle splits into two connected pieces with the same shape (after rotating one of the pieces by 180°). All such paths for 2 × 2 and 4 × 3 rectangles are shown below.
<div style="width: 100%; text-align: center;">
  <a href="http://rosettacode.org/wiki/file:rect-cut.svg" target="_blank">
    <img src="https://rosettacode.org/mw/images/5/55/Rect-cut.svg" width="520" height="170" alt="Picture of cut rectangles">
  </a>
</div>
Write a function that calculates the number of different ways to cut an <i>m</i> × <i>n</i> rectangle.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>cutRectangle</code> should be a function.
    testString: assert(typeof cutRectangle == 'function', '<code>cutRectangle</code> should be a function.');
  - text: <code>cutRectangle(2, 2)</code> should return a number.
    testString: assert(typeof cutRectangle(2, 2) == 'number', '<code>cutRectangle(2, 2)</code> should return a number.');
  - text: <code>cutRectangle(2, 2)</code> should return <code>2</code>.
    testString: assert.equal(cutRectangle(2, 2), 2, '<code>cutRectangle(2, 2)</code> should return <code>2</code>.');
  - text: <code>cutRectangle(4, 3)</code> should return <code>9</code>.
    testString: assert.equal(cutRectangle(4, 3), 9, '<code>cutRectangle(4, 3)</code> should return <code>9</code>.');
  - text: <code>cutRectangle(4, 4)</code> should return <code>22</code>.
    testString: assert.equal(cutRectangle(4, 4), 22, '<code>cutRectangle(4, 4)</code> should return <code>22</code>.');
  - text: <code>cutRectangle(8, 3)</code> should return <code>53</code>.
    testString: assert.equal(cutRectangle(8, 3), 53, '<code>cutRectangle(8, 3)</code> should return <code>53</code>.');
  - text: <code>cutRectangle(7, 4)</code> should return <code>151</code>.
    testString: assert.equal(cutRectangle(7, 4), 151, '<code>cutRectangle(7, 4)</code> should return <code>151</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function cutRectangle (w, h) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function cutRectangle (w, h) {
  if (w % 2 == 1 && h % 2 == 1)
    return;

  var dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

  var grid = new Array(h); for (var i = 0; i < grid.length; i++) grid[i]=new Array(w);
  var stack = [];

  var half = Math.floor((w * h) / 2);
  var bits = Math.pow(2, half) - 1;
  var result=0;
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
    while (stack.length!=0) {

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