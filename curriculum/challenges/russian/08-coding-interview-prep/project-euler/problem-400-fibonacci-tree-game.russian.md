---
id: 5900f4fe1000cf542c510010
challengeType: 5
title: 'Problem 400: Fibonacci tree game'
forumTopicId: 302067
localeTitle: 'Задача 400: игра дерева Фибоначчи'
---

## Description
<section id='description'>
A Fibonacci tree is a binary tree recursively defined as:T(0) is the empty tree.
T(1) is the binary tree with only one node.
T(k) consists of a root node that has T(k-1) and T(k-2) as children.

On such a tree two players play a take-away game. On each turn a player selects a node and removes that node along with the subtree rooted at that node.
The player who is forced to take the root node of the entire tree loses.

Here are the winning moves of the first player on the first turn for T(k) from k=1 to k=6.

Let f(k) be the number of winning moves of the first player (i.e. the moves for which the second player has no winning strategy) on the first turn of the game when this game is played on T(k).

For example, f(5) = 1 and f(10) = 17.

Find f(10000). Give the last 18 digits of your answer.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler400()</code> should return 438505383468410600.
    testString: assert.strictEqual(euler400(), 438505383468410600);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler400() {
  // Good luck!
  return true;
}

euler400();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
