---
id: 5900f4e51000cf542c50fff7
title: 'Problem 376: Intransitives Würfel-Set'
challengeType: 1
forumTopicId: 302038
dashedName: problem-376-nontransitive-sets-of-dice
---

# --description--

Consider the following set of dice with nonstandard pips:

$$\begin{array}{}   \text{Die A: } & 1 & 4 & 4 & 4 & 4 & 4 \\\\
  \text{Die B: } & 2 & 2 & 2 & 5 & 5 & 5 \\\\   \text{Die C: } & 3 & 3 & 3 & 3 & 3 & 6 \\\\
\end{array}$$

Ein Spiel wird von zwei Spielern gespielt, die einen Würfel nehmen und ihn werfen. Der Spieler, der den höchsten Wert wirft, gewinnt.

If the first player picks die $A$ and the second player picks die $B$ we get

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

If the first player picks die $B$ and the second player picks die $C$ we get

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

If the first player picks die $C$ and the second player picks die $A$ we get

$P(\text{second player wins}) = \frac{25}{36} > \frac{1}{2}$

So whatever die the first player picks, the second player can pick another die and have a larger than 50% chance of winning. Ein Würfelpaar, das diese Eigenschaft hat, wird als intransitive Würfel bezeichnet.

Wir wollen untersuchen, wie viele Reihen von intransitiven Würfeln es gibt. We will assume the following conditions:

- There are three six-sided dice with each side having between 1 and $N$ pips, inclusive.
- Dice with the same set of pips are equal, regardless of which side on the die the pips are located.
- The same pip value may appear on multiple dice; if both players roll the same value neither player wins.
- Die Würfel-Sets $\\{A, B, C\\}$, $\\{B, C, A\\}$ und $\\{C, A, B\\}$ sind die gleichen Sets.

Für $N = 7$ gibt es 9780 Sätze.

How many are there for $N = 30$?

# --hints--

`nontransitiveSetsOfDice()` should return `973059630185670`.

```js
assert.strictEqual(nontransitiveSetsOfDice(), 973059630185670);
```

# --seed--

## --seed-contents--

```js
function nontransitiveSetsOfDice() {

  return true;
}

nontransitiveSetsOfDice();
```

# --solutions--

```js
// solution required
```
