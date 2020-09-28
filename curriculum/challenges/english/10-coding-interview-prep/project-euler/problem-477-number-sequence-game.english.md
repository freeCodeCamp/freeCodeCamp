---
id: 5900f54a1000cf542c51005c
challengeType: 5
title: 'Problem 477: Number Sequence Game'
forumTopicId: 302154
---

## Description
<section id='description'>
The number sequence game starts with a sequence S of N numbers written on a line.
Two players alternate turns. At his turn, a player must select and remove either the first or the last number remaining in the sequence.
The player score is the sum of all the numbers he has taken. Each player attempts to maximize his own sum.
If N = 4 and S = {1, 2, 10, 3}, then each player maximizes his score as follows:
Player 1: removes the first number (1)
Player 2: removes the last number from the remaining sequence (3)
Player 1: removes the last number from the remaining sequence (10)
Player 2: removes the remaining number (2)
Player 1 score is 1 + 10 = 11.
Let F(N) be the score of player 1 if both players follow the optimal strategy for the sequence S = {s1, s2, ..., sN} defined as:
s1 = 0
si+1 = (si2 + 45) modulo 1 000 000 007
The sequence begins with S = {0, 45, 2070, 4284945, 753524550, 478107844, 894218625, ...}.
You are given F(2) = 45, F(4) = 4284990, F(100) = 26365463243, F(104) = 2495838522951.
Find F(108).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler477()</code> should return 25044905874565164.
    testString: assert.strictEqual(euler477(), 25044905874565164);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler477() {

  return true;
}

euler477();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
