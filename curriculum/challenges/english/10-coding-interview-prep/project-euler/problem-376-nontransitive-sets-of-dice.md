---
id: 5900f4e51000cf542c50fff7
title: 'Problem 376: Nontransitive sets of dice'
challengeType: 5
forumTopicId: 302038
dashedName: problem-376-nontransitive-sets-of-dice
---

# --description--

Consider the following set of dice with nonstandard pips:

Die A: 1 4 4 4 4 4 Die B: 2 2 2 5 5 5 Die C: 3 3 3 3 3 6

A game is played by two players picking a die in turn and rolling it. The player who rolls the highest value wins.

If the first player picks die A and the second player picks die B we get P(second player wins) = 7/12 > 1/2

If the first player picks die B and the second player picks die C we get P(second player wins) = 7/12 > 1/2

If the first player picks die C and the second player picks die A we get P(second player wins) = 25/36 > 1/2

So whatever die the first player picks, the second player can pick another die and have a larger than 50% chance of winning. A set of dice having this property is called a nontransitive set of dice.

We wish to investigate how many sets of nontransitive dice exist. We will assume the following conditions:There are three six-sided dice with each side having between 1 and N pips, inclusive. Dice with the same set of pips are equal, regardless of which side on the die the pips are located. The same pip value may appear on multiple dice; if both players roll the same value neither player wins. The sets of dice {A,B,C}, {B,C,A} and {C,A,B} are the same set.

For N = 7 we find there are 9780 such sets. How many are there for N = 30 ?

# --hints--

`euler376()` should return 973059630185670.

```js
assert.strictEqual(euler376(), 973059630185670);
```

# --seed--

## --seed-contents--

```js
function euler376() {

  return true;
}

euler376();
```

# --solutions--

```js
// solution required
```
