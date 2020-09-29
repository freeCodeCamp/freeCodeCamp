---
id: 5900f5371000cf542c51004a
challengeType: 5
title: 'Problem 459: Flipping game'
forumTopicId: 302133
---

## Description
<section id='description'>
The flipping game is a two player game played on a N by N square board.
Each square contains a disk with one side white and one side black.
The game starts with all disks showing their white side.

A turn consists of flipping all disks in a rectangle with the following properties:
the upper right corner of the rectangle contains a white disk
the rectangle width is a perfect square (1, 4, 9, 16, ...)
the rectangle height is a triangular number (1, 3, 6, 10, ...)


Players alternate turns. A player wins by turning the grid all black.

Let W(N) be the number of winning moves for the first player on a N by N board with all disks white, assuming perfect play.
W(1) = 1, W(2) = 0, W(5) = 8 and W(102) = 31395.

For N=5, the first player's eight winning first moves are:




Find W(106).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler459()</code> should return 3996390106631.
    testString: assert.strictEqual(euler459(), 3996390106631);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler459() {

  return true;
}

euler459();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
