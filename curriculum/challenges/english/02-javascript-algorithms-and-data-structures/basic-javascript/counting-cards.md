---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
---

## Description
<section id='description'>
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called <a href='https://en.wikipedia.org/wiki/Card_counting' target='_blank'>Card Counting</a>.
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
<table class="table table-striped"><thead><tr><th>Count Change</th><th>Cards</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>
You will write a card counting function. It will receive a <code>card</code> parameter, which can be a number or a string, and increment or decrement the global <code>count</code> variable according to the card's value (see table). The function will then return a string with the current count and the string <code>Bet</code> if the count is positive, or <code>Hold</code> if the count is zero or negative. The current count and the player's decision (<code>Bet</code> or <code>Hold</code>) should be separated by a single space.
<strong>Example Output</strong><br><code>-3 Hold</code><br><code>5 Bet</code>
<strong>Hint</strong><br>Do NOT reset <code>count</code> to 0 when value is 7, 8, or 9.<br>Do NOT return an array.<br>Do NOT include quotes (single or double) in the output.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })());
  - text: Cards Sequence 7, 8, 9 should return <code>0 Hold</code>
    testString: assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })());
  - text: Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>
    testString: assert((function(){ count = 0; cc(10);cc('J');cc('Q');cc('K');var out = cc('A'); if(out === "-5 Hold") {return true;} return false; })());
  - text: Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>
    testString: assert((function(){ count = 0; cc(3);cc(7);cc('Q');cc(8);var out = cc('A'); if(out === "-1 Hold") {return true;} return false; })());
  - text: Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc('J');cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })());
  - text: Cards Sequence 2, 2, 10 should return <code>1 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })());
  - text: Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>
    testString: assert((function(){ count = 0; cc(3);cc(2);cc('A');cc(10);var out = cc('K'); if(out === "-1 Hold") {return true;} return false; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

</div>



</section>

## Solution
<section id='solution'>


```js
var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

</section>
