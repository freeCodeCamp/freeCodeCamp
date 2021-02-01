---
id: 5a23c84252665b21eecc7ed5
title: Knight's tour
challengeType: 5
forumTopicId: 302297
dashedName: knights-tour
---

# --description--

[Knight's Tour](https://en.wikipedia.org/wiki/Knight%27s_tour)Problem: You have an empty `w` \* `h` chessboard, but for a single knight on some square. The knight must perform a sequence of legal moves that result in the knight visiting every square on the chessboard exactly once. Note that it is *not* a requirement that the tour be "closed"; that is, the knight need not end within a single move of its start position.

# --instructions--

Write a function that takes `w` and `h` as parameters and returns the number of initial positions from where it is possible to achieve the task stated above.

# --hints--

`knightTour` should be a function.

```js
assert(typeof knightTour == 'function');
```

`knightTour(6, 6)` should return a number.

```js
assert(typeof knightTour(6, 6) == 'number');
```

`knightTour(6, 6)` should return `35`.

```js
assert.equal(knightTour(6, 6), 35);
```

`knightTour(5, 6)` should return `20`.

```js
assert.equal(knightTour(5, 6), 20);
```

`knightTour(4, 6)` should return `10`.

```js
assert.equal(knightTour(4, 6), 10);
```

`knightTour(7, 3)` should return `4`.

```js
assert.equal(knightTour(7, 3), 4);
```

`knightTour(8, 6)` should return `47`.

```js
assert.equal(knightTour(8, 6), 47);
```

# --seed--

## --seed-contents--

```js
function knightTour(w, h) {

}
```

# --solutions--

```js
function knightTour(w, h) {
  var b,
    cnt = 0;

  var dx = [-2, -2, -1, 1, 2, 2, 1, -1];
  var dy = [-1, 1, 2, 2, 1, -1, -2, -2];

  function init_board() {
    var i, j, k, x, y;
    // * b is board; a is board with 2 rows padded at each side

    for (i = 0; i < h; i++) {
      for (j = 0; j < w; j++) {
        b[i][j] = 255;
      }
    }

    for (i = 0; i < h; i++) {
      for (j = 0; j < w; j++) {
        for (k = 0; k < 8; k++) {
          (x = j + dx[k]), (y = i + dy[k]);
          if (b[i][j] == 255) b[i][j] = 0;
          if (x >= 0 && x < w && y >= 0 && y < h) b[i][j]++;
        }
      }
    }
  }

  function walk_board(x, y) {
    var i, nx, ny, least;
    var steps = 0;
    // printf(E"H"E"J"E"%d;%dH"E"32m[]"E"m", y + 1, 1 + 2 * x);

    while (1) {
      // * occupy cell
      b[y][x] = 255;

      // * reduce all neighbors' neighbor count
      for (i = 0; i < 8; i++)
        if (y + dy[i] >= 0 && x + dx[i] >= 0 && y + dy[i] < h && x + dx[i] < w)
          b[y + dy[i]][x + dx[i]]--;

      // find neighbor with lowest neighbor count
      least = 255;
      for (i = 0; i < 8; i++) {
        if (y + dy[i] >= 0 && x + dx[i] >= 0 && y + dy[i] < h && x + dx[i] < w)
          if (b[y + dy[i]][x + dx[i]] < least) {
            nx = x + dx[i];
            ny = y + dy[i];
            least = b[ny][nx];
          }
      }

      if (least > 7) {
        return steps == w * h - 1;
      }

      steps++;
      (x = nx), (y = ny);
    }
  }

  function solve(x, y) {
    b = new Array(h);
    for (var i = 0; i < h; i++) b[i] = new Array(w);

    init_board();
    if (walk_board(x, y)) {
      cnt++;
    }
  }

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      solve(j, i);
    }
  }

  return cnt;
}
```
