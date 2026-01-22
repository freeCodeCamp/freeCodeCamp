---
id: 5900f5431000cf542c510055
title: 'Problem 470: Super Ramvok'
challengeType: 1
forumTopicId: 302146
dashedName: problem-470-super-ramvok
---

# --description--

Consider a single game of Ramvok:

Let $t$ represent the maximum number of turns the game lasts. If $t = 0$, then the game ends immediately. Otherwise, on each turn $i$, the player rolls a die. After rolling, if $i &lt; t$ the player can either stop the game and receive a prize equal to the value of the current roll, or discard the roll and try again next turn. If $i = t$, then the roll cannot be discarded and the prize must be accepted. Before the game begins, $t$ is chosen by the player, who must then pay an up-front cost $ct$ for some constant $c$. For $c = 0$, $t$ can be chosen to be infinite (with an up-front cost of 0). Let $R(d, c)$ be the expected profit (i.e. net gain) that the player receives from a single game of optimally-played Ramvok, given a fair $d$-sided die and cost constant $c$. For example, $R(4, 0.2) = 2.65$. Assume that the player has sufficient funds for paying any/all up-front costs.

Now consider a game of Super Ramvok:

In Super Ramvok, the game of Ramvok is played repeatedly, but with a slight modification. After each game, the die is altered. The alteration process is as follows: The die is rolled once, and if the resulting face has its pips visible, then that face is altered to be blank instead. If the face is already blank, then it is changed back to its original value. After the alteration is made, another game of Ramvok can begin (and during such a game, at each turn, the die is rolled until a face with a value on it appears). The player knows which faces are blank and which are not at all times. The game of Super Ramvok ends once all faces of the die are blank.

Let $S(d, c)$ be the expected profit that the player receives from an optimally-played game of Super Ramvok, given a fair $d$-sided die to start (with all sides visible), and cost constant $c$. For example, $S(6, 1) = 208.3$.

Let $F(n) = \sum_{4 ≤ d ≤ n} \sum_{0 ≤ c ≤ n} S(d, c)$.

Calculate $F(20)$, rounded to the nearest integer.

# --hints--

`superRamvok()` should return `147668794`.

```js
assert.strictEqual(superRamvok(), 147668794);
```

# --seed--

## --seed-contents--

```js
function superRamvok() {

  return true;
}

superRamvok();
```

# --solutions--

```js
// solution required
```
