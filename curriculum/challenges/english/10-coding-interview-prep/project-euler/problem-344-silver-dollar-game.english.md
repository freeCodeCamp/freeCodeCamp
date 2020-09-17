---
id: 5900f4c51000cf542c50ffd7
challengeType: 5
title: 'Problem 344: Silver dollar game'
forumTopicId: 302003
---

## Description
<section id='description'>
One variant of N.G. de Bruijn's silver dollar game can be described as follows:

On a strip of squares a number of coins are placed, at most one coin per square. Only one coin, called the silver dollar, has any value. Two players take turns making moves. At each turn a player must make either a regular or a special move.

A regular move consists of selecting one coin and moving it one or more squares to the left. The coin cannot move out of the strip or jump on or over another coin.

Alternatively, the player can choose to make the special move of pocketing the leftmost coin rather than making a regular move. If no regular moves are possible, the player is forced to pocket the leftmost coin.

The winner is the player who pockets the silver dollar.





A winning configuration is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.

Let W(n,c) be the number of winning configurations for a strip of n squares, c worthless coins and one silver dollar.

You are given that W(10,2) = 324 and W(100,10) = 1514704946113500.

Find W(1 000 000, 100) modulo the semiprime 1000 036 000 099 (= 1 000 003 · 1 000 033).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler344()</code> should return 65579304332.
    testString: assert.strictEqual(euler344(), 65579304332);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler344() {

  return true;
}

euler344();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
