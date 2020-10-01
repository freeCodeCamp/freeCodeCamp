---
id: 5a23c84252665b21eecc7ed5
title: Knight's tour
challengeType: 5
forumTopicId: 302297
---

## Description

<section id='description'>
<a href="https://en.wikipedia.org/wiki/Knight%27s_tour">Knight's Tour</a>Problem: You have an empty <code>w</code> * <code>h</code> chessboard, but for a single knight on some square. The knight must perform a sequence of legal moves that result in the knight visiting every square on the chessboard exactly once. Note that it is <i>not</i> a requirement that the tour be "closed"; that is, the knight need not end within a single move of its start position.
</section>

## Instructions

<section id='instructions'>
Write a function that takes <code>w</code> and <code>h</code> as parameters and returns the number of initial positions from where it is possible to achieve the task stated above.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>knightTour</code> should be a function.
    testString: assert(typeof knightTour == 'function');
  - text: <code>knightTour(6, 6)</code> should return a number.
    testString: assert(typeof knightTour(6, 6) == 'number');
  - text: <code>knightTour(6, 6)</code> should return <code>35</code>.
    testString: assert.equal(knightTour(6, 6), 35);
  - text: <code>knightTour(5, 6)</code> should return <code>20</code>.
    testString: assert.equal(knightTour(5, 6), 20);
  - text: <code>knightTour(4, 6)</code> should return <code>10</code>.
    testString: assert.equal(knightTour(4, 6), 10);
  - text: <code>knightTour(7, 3)</code> should return <code>4</code>.
    testString: assert.equal(knightTour(7, 3), 4);
  - text: <code>knightTour(8, 6)</code> should return <code>47</code>.
    testString: assert.equal(knightTour(8, 6), 47);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function knightTour(w, h) {

}
```

</div>
</section>

## Solution

<section id='solution'>

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

</section>
