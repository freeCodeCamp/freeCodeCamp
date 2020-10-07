---
id: 565bbe00e9cc8ac0725390f4
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
title: 21点游戏
---

## Description
<section id='description'>
在赌场 21 点游戏中，玩家可以通过计算牌桌上已经发放的卡牌的高低值来让自己在游戏中保持优势，这就叫<a href='https://www.douban.com/note/273781969/' target='_blank'> 21 点算法</a>。
根据下面的表格，每张卡牌都分配了一个值。如果卡牌的值<count>大于 0，那么玩家应该追加赌注。反之，追加少许赌注甚至不追加赌注。
<table class="table table-striped"><thead><tr><th>Count Change</th><th>Cards</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>
你需要写一个函数实现 21 点算法，它根据参数<code>card</code>的值来递增或递减变量<code>count</code>，函数返回一个由当前<code>count</code>和<code>Bet</code>（<code>count>0</code>）或<code>Hold</code>（<code>count<=0</code>）拼接的字符串。注意<code>count</code>和<code>"Bet"</code>或<code>Hold</code>应该用空格分开。

<strong>例如：</strong><br><code>-3 Hold<br>5 Bet</code>

<strong>提示</strong><br>既然 card 的值为 7、8、9 时，count 值不变，那我们就可以忽略这种情况。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Cards Sequence 2, 3, 4, 5, 6 应该返回<code>5 Bet</code>。
    testString: assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })());
  - text: Cards Sequence 7, 8, 9 应该返回 <code>0 Hold</code>。
    testString: assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })());
  - text: Cards Sequence 10, J, Q, K, A 应该返回 <code>-5 Hold</code>。
    testString: assert((function(){ count = 0; cc(10);cc('J');cc('Q');cc('K');var out = cc('A'); if(out === "-5 Hold") {return true;} return false; })());
  - text: Cards Sequence 3, 7, Q, 8, A 应该返回 <code>-1 Hold</code>。
    testString: assert((function(){ count = 0; cc(3);cc(7);cc('Q');cc(8);var out = cc('A'); if(out === "-1 Hold") {return true;} return false; })());
  - text: Cards Sequence 2, J, 9, 2, 7 应该返回 <code>1 Bet</code>。
    testString: assert((function(){ count = 0; cc(2);cc('J');cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })());
  - text: Cards Sequence 2, 2, 10 应该返回 <code>1 Bet</code>。
    testString: assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })());
  - text: Cards Sequence 3, 2, A, 10, K 应该返回 <code>-1 Hold</code>。
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

// Add/remove calls to test your function.
// Note: Only the last will display
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
