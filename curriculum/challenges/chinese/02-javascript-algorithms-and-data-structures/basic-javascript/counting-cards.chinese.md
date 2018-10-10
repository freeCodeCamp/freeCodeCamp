---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: ''
localeTitle: 计数卡
---

## Description
<section id="description">在赌场游戏Blackjack中，玩家可以通过跟踪牌组中剩余的高牌和低牌的相对数量来获得优势。这称为<a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank">卡计数</a> 。在牌组中剩下更多高牌有利于玩家。根据下表为每张卡分配一个值。当计数为正数时，玩家应该下注。当计数为零或负数时，玩家应该下注低。 <table class="table table-striped"><thead><tr><th>计数变化</th><th>牌</th></tr></thead><tbody><tr><td> +1 </td><td> 2,3,4,5,6 </td></tr><tr><td> 0 </td><td> 7,8,9 </td></tr><tr><td> -1 </td><td> 10，&#39;J&#39;，&#39;Q&#39;，&#39;K&#39;，&#39;A&#39; </td></tr></tbody></table>你会写一个卡计数功能。它将接收一个<code>card</code>参数，可以是数字或字符串，并根据卡的值递增或递减全局<code>count</code>变量（参见表格）。然后，该函数将返回一个包含当前计数的字符串，如果计数为正则返回字符串<code>Bet</code> ，如果计数为零或为负，则返回<code>Hold</code> 。当前计数和玩家的决定（ <code>Bet</code>或<code>Hold</code> ）应该由一个空格分隔。 <strong>示例输出</strong> <br> <code>-3 Hold</code> <br> <code>5 Bet</code> <strong>提示</strong> <br>当值为7,8或9时，请勿将<code>count</code>重置为0。 <br>不要返回数组。 <br>不要在输出中包含引号（单引号或双引号）。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 牌序列<code>5 Bet</code>应该返回<code>5 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), "Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>");'
  - text: '卡片序列7,8,9应返回<code>0 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), "Cards Sequence 7, 8, 9 should return <code>0 Hold</code>");'
  - text: 卡序列10，J，Q，K，A应返回<code>-5 Hold</code>
    testString: 'assert((function(){ count = 0; cc(10);cc("J");cc("Q");cc("K");var out = cc("A"); if(out === "-5 Hold") {return true;} return false; })(), "Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>");'
  - text: '卡序列3,7，Q，8，A应返回<code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(7);cc("Q");cc(8);var out = cc("A"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>");'
  - text: 牌序列2，J， <code>1 Bet</code>应该返回<code>1 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc("J");cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>");'
  - text: 牌序列<code>1 Bet</code>应该返回<code>1 Bet</code>
    testString: 'assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, 2, 10 should return <code>1 Bet</code>");'
  - text: '卡序列3,2，A，10，K应返回<code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(2);cc("A");cc(10);var out = cc("K"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>");'

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
// solution required
```
</section>
