---
id: 5900f4971000cf542c50ffa9
challengeType: 5
title: 'Problem 298: Selective Amnesia'
forumTopicId: 301950
---

## Description
<section id='description'>
Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.

Both players start with empty memories. Both players always add new missed numbers to their memory but use a different strategy in deciding which number to remove:
Larry's strategy is to remove the number that hasn't been called in the longest time.
Robin's strategy is to remove the number that's been in the memory the longest time.

Example game:Turn
  Callednumber
  Larry'smemory
  Larry'sscore
  Robin'smemory
  Robin'sscore
1
  1
  1
  0
  1
  0
2
  2
  1,2
  0
  1,2
  0
3
  4
  1,2,4
  0
  1,2,4
  0
4
  6
  1,2,4,6
  0
  1,2,4,6
  0
5
  1
  1,2,4,6
  1
  1,2,4,6
  1
6
  8
  1,2,4,6,8
  1
  1,2,4,6,8
  1
7
  10
  1,4,6,8,10
  1
  2,4,6,8,10
  1
8
  2
  1,2,6,8,10
  1
  2,4,6,8,10
  2
9
  4
  1,2,4,8,10
  1
  2,4,6,8,10
  3
10
  1
  1,2,4,8,10
  2
  1,4,6,8,10
  3


Denoting Larry's score by L and Robin's score by R, what is the expected value of |L-R| after 50 turns? Give your answer rounded to eight decimal places using the format x.xxxxxxxx .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler298()</code> should return 1.76882294.
    testString: assert.strictEqual(euler298(), 1.76882294);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler298() {

  return true;
}

euler298();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
