---
id: 5900f4b11000cf542c50ffc4
challengeType: 5
title: 'Problem 325: Stone Game II'
forumTopicId: 301982
---

## Description
<section id='description'>
A game is played with two piles of stones and two players. At her turn, a player removes a number of stones from the larger pile. The number of stones she removes must be a positive multiple of the number of stones in the smaller pile.



E.g., let the ordered pair(6,14) describe a configuration with 6 stones in the smaller pile and 14 stones in the larger pile, then the first player can remove 6 or 12 stones from the larger pile.



The player taking all the stones from a pile wins the game.



A winning configuration is one where the first player can force a win. For example, (1,5), (2,6) and (3,12) are winning configurations because the first player can immediately remove all stones in the second pile.



A losing configuration is one where the second player can force a win, no matter what the first player does. For example, (2,3) and (3,4) are losing configurations: any legal move leaves a winning configuration for the second player.



Define S(N) as the sum of (xi+yi) for all losing configurations (xi,yi), 0 < xi < yi ≤ N. We can verify that S(10) = 211 and S(104) = 230312207313.



Find S(1016) mod 710.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler325()</code> should return 54672965.
    testString: assert.strictEqual(euler325(), 54672965);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler325() {

  return true;
}

euler325();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
