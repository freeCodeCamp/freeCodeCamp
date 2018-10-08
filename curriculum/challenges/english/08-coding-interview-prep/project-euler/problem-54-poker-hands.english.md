---
id: 5900f3a21000cf542c50feb5
challengeType: 5
title: 'Problem 54: Poker hands'
---

## Description
<section id='description'>
In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:
High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.
Consider the following five hands dealt to two players:

Hand Player 1 Player 2 Winner
1 5H 5C 6S 7S KDPair of Fives 2C 3S 8S 8D TDPair of Eights Player 2
2 5D 8C 9S JS ACHighest card Ace 2C 5C 7D 8S QHHighest card Queen Player 1
3 2D 9C AS AH ACThree Aces 3D 6D 7D TD QDFlush  with Diamonds Player 2
4 4D 6S 9H QH QCPair of QueensHighest card Nine 3D 6D 7H QD QSPair of QueensHighest card Seven Player 1
5 2H 2D 4C 4D 4SFull HouseWith Three Fours 3C 3D 3S 9S 9DFull Housewith Three Threes Player 1

The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.
How many hands does Player 1 win?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler54()</code> should return 376.
    testString: 'assert.strictEqual(euler54(), 376, "<code>euler54()</code> should return 376.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler54() {
  // Good luck!
  return true;
}

euler54();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
