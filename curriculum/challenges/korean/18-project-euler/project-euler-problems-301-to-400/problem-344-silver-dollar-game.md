---
id: 5900f4c51000cf542c50ffd7
title: 'Problem 344: Silver dollar game'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

On a strip of squares a number of coins are placed, at most one coin per square. Only one coin, called the silver dollar, has any value. Two players take turns making moves. At each turn a player must make either a regular or a special move.

A regular move consists of selecting one coin and moving it one or more squares to the left. The coin cannot move out of the strip or jump on or over another coin.

Alternatively, the player can choose to make the special move of pocketing the leftmost coin rather than making a regular move. If no regular moves are possible, the player is forced to pocket the leftmost coin.

The winner is the player who pockets the silver dollar.

<img class="img-responsive center-block" alt="silver dollar game" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;" />

A winning configuration is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.

Let $W(n, c)$ be the number of winning configurations for a strip of $n$ squares, $c$ worthless coins and one silver dollar.

You are given that $W(10, 2) = 324$ and $W(100, 10) = 1\\,514\\,704\\,946\\,113\\,500$.

Find $W(1\\,000\\,000, 100)$ modulo the semiprime $1000\\,036\\,000\\,099 (= 1\\,000\\,003 \times 1\\,000\\,033)$.

# --hints--

`silverDollarGame()` should return `65579304332`.

```js
assert.strictEqual(silverDollarGame(), 65579304332);
```

# --seed--

## --seed-contents--

```js
function silverDollarGame() {

  return true;
}

silverDollarGame();
```

# --solutions--

```js
// solution required
```
