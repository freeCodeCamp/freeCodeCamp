---
id: 5900f5221000cf542c510033
challengeType: 5
title: 'Problem 436: Unfair wager'
forumTopicId: 302107
---

## Description
<section id='description'>
Julie proposes the following wager to her sister Louise.
She suggests they play a game of chance to determine who will wash the dishes.
For this game, they shall use a generator of independent random numbers uniformly distributed between 0 and 1.
The game starts with S = 0.
The first player, Louise, adds to S different random numbers from the generator until S > 1 and records her last random number 'x'.
The second player, Julie, continues adding to S different random numbers from the generator until S > 2 and records her last random number 'y'.
The player with the highest number wins and the loser washes the dishes, i.e. if y > x the second player wins.

For example, if the first player draws 0.62 and 0.44, the first player turn ends since 0.62+0.44 > 1 and x = 0.44.
If the second players draws 0.1, 0.27 and 0.91, the second player turn ends since 0.62+0.44+0.1+0.27+0.91 > 2 and y = 0.91.
Since y > x, the second player wins.

Louise thinks about it for a second, and objects: "That's not fair".
What is the probability that the second player wins?
Give your answer rounded to 10 places behind the decimal point in the form 0.abcdefghij
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler436()</code> should return 0.5276662759.
    testString: assert.strictEqual(euler436(), 0.5276662759);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler436() {

  return true;
}

euler436();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
