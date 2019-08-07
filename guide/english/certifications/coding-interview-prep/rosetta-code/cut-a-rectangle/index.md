---
title: Cut a rectangle
---
# Cut a rectangle

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function cutRectangle(w, h) {
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

</details>