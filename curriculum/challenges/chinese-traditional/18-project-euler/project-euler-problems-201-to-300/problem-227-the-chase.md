---
id: 5900f44f1000cf542c50ff61
title: '問題227：大通'
challengeType: 1
forumTopicId: 301870
dashedName: problem-227-the-chase
---

# --description--

"The Chase" is a game played with two dice and an even number of players.

球員坐在桌子旁;遊戲開始於兩個相對的玩家，每個玩家有一個骰子。 在每個回合中，兩個玩家都會擲骰子。

If the player rolls a 1, he passes the die to his neighbour on the left.

If the player rolls a 6, he passes the die to his neighbour on the right.

Otherwise, he keeps the die for the next turn.

The game ends when one player has both dice after they have been rolled and passed; that player has then lost.

In a game with 100 players, what is the expected number of turns the game lasts? Give your answer rounded to ten significant digits.

# --hints--

`theChase()` should return `3780.618622`.

```js
assert.strictEqual(theChase(), 3780.618622);
```

# --seed--

## --seed-contents--

```js
function theChase() {

  return true;
}

theChase();
```

# --solutions--

```js
// solution required
```
