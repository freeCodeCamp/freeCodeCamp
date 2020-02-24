---
id: 5a23c84252665b21eecc801c
title: Spiral matrix
challengeType: 5
isHidden: false
forumTopicId: 302321
---

## Description

<section id='description'>

Produce a spiral array.
A <i>spiral array</i> is a square arrangement of the first N<sup>2</sup> natural numbers, where the numbers increase sequentially as you go around the edges of the array spiraling inwards.
For example, given <b>5</b>, produce this array:

<pre>
0  1  2  3  4
15 16 17 18 5
14 23 24 19 6
13 22 21 20 7
12 11 10  9 8
</pre>
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>spiralArray</code> should be a function.
    testString: assert(typeof spiralArray=='function');
  - text: <code>spiralArray(3)</code> should return an array.
    testString: assert(Array.isArray(spiralArray(3)));
  - text: <code>spiralArray(3)</code> should return <code>[[0, 1, 2],[7, 8, 3],[6, 5, 4]]</code>.
    testString: assert.deepEqual(spiralArray(3), [[0, 1, 2], [7, 8, 3], [6, 5, 4]]);
  - text: <code>spiralArray(4)</code> should return <code>[[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]]</code>.
    testString: assert.deepEqual(spiralArray(4), [[0, 1, 2, 3], [11, 12, 13, 4], [10, 15, 14, 5], [9, 8, 7, 6]]);
  - text: <code>spiralArray(5)</code> should return <code>[[0, 1, 2, 3, 4],[15, 16, 17, 18, 5],[14, 23, 24, 19, 6],[13, 22, 21, 20, 7],[12, 11, 10, 9, 8]]</code>.
    testString: assert.deepEqual(spiralArray(5), [[0, 1, 2, 3, 4], [15, 16, 17, 18, 5], [14, 23, 24, 19, 6], [13, 22, 21, 20, 7], [12, 11, 10, 9, 8]]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function spiralArray(n) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function spiralArray(n) {
  var arr = Array(n),
    x = 0,
    y = n,
    total = n * n--,
    dx = 1,
    dy = 0,
    i = 0,
    j = 0;
  while (y) arr[--y] = [];
  while (i < total) {
    arr[y][x] = i++;
    x += dx;
    y += dy;
    if (++j == n) {
      if (dy < 0) {
        x++;
        y++;
        n -= 2;
      }
      j = dx;
      dx = -dy;
      dy = j;
      j = 0;
    }
  }
  return arr;
}
```

</section>
