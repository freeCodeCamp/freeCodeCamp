---
id: 5900f4701000cf542c50ff83
title: 'Problem 260: Stone Game'
challengeType: 5
forumTopicId: 301909
dashedName: problem-260-stone-game
---

# --description--

A game is played with three piles of stones and two players.

At her turn, a player removes one or more stones from the piles. However, if she takes stones from more than one pile, she must remove the same number of stones from each of the selected piles.

In other words, the player chooses some N>0 and removes: N stones from any single pile; or N stones from each of any two piles (2N total); or N stones from each of the three piles (3N total). The player taking the last stone(s) wins the game.

A winning configuration is one where the first player can force a win. For example, (0,0,13), (0,11,11) and (5,5,5) are winning configurations because the first player can immediately remove all stones.

A losing configuration is one where the second player can force a win, no matter what the first player does. For example, (0,1,2) and (1,3,3) are losing configurations: any legal move leaves a winning configuration for the second player.

Consider all losing configurations (xi,yi,zi) where xi ≤ yi ≤ zi ≤ 100. We can verify that Σ(xi+yi+zi) = 173895 for these.

Find Σ(xi+yi+zi) where (xi,yi,zi) ranges over the losing configurations with xi ≤ yi ≤ zi ≤ 1000.

# --hints--

`euler260()` should return 167542057.

```js
assert.strictEqual(euler260(), 167542057);
```

# --seed--

## --seed-contents--

```js
function euler260() {

  return true;
}

euler260();
```

# --solutions--

```js
// solution required
```
