---
id: 5900f4551000cf542c50ff67
title: 'Problem 232: The Race'
challengeType: 1
forumTopicId: 301876
dashedName: problem-232-the-race
---

# --description--

Two players share an unbiased coin and take it in turns to play "The Race".

On Player 1's turn, he tosses the coin once: if it comes up Heads, he scores one point; if it comes up Tails, he scores nothing.

On Player 2's turn, she chooses a positive integer $T$ and tosses the coin $T$ times: if it comes up all Heads, she scores $2^{T - 1}$ points; otherwise, she scores nothing.

Player 1 goes first. The winner is the first to 100 or more points.

On each turn Player 2 selects the number, $T$, of coin tosses that maximises the probability of her winning.

What is the probability that Player 2 wins?

Give your answer rounded to eight decimal places in the form 0.abcdefgh .

# --hints--

`theRace()` should return `0.83648556`.

```js
assert.strictEqual(theRace(), 0.83648556);
```

# --seed--

## --seed-contents--

```js
function theRace() {

  return true;
}

theRace();
```

# --solutions--

```js
// solution required
```
