---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1

videoUrl: ''
localeTitle: Counting Cards
---

## Description
<section id='description'>
当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。
<strong>示例</strong>
<blockquote>function myFun() {<br>&nbsp;&nbsp;console.log("Hello");<br>&nbsp;&nbsp;return "World";<br>&nbsp;&nbsp;console.log("byebye")<br>}<br>myFun();</blockquote>
上面的代码输出"Hello"到控制台、返回 "World"，但没有输出<code>"byebye"</code>，因为函数遇到 return 语句就退出了。
</section>

## Instructions
<section id='instructions'>
修改函数<code>abTest</code>当<code>a</code>或<code>b</code>小于0时，函数立即返回一个<code>undefined</code>并退出。
<strong>提示</strong><br>记住<a href='http://www.freecodecamp.one/challenges/understanding-uninitialized-variables' target='_blank'><code>undefined</code>，是一个关键字，而不是一个字符串。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Cards Sequence 2, 3, 4, 5, 6 应该返回<code>5 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), 'Cards Sequence 2, 3, 4, 5, 6 应该返回 <code>5 Bet</code>');
  - text: Cards Sequence 7, 8, 9 应该返回 <code>0 Hold</code>
    testString: assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), 'Cards Sequence 7, 8, 9 应该返回 <code>0 Hold</code>');
  - text: Cards Sequence 10, J, Q, K, A 应该返回 <code>-5 Hold</code>
    testString: assert((function(){ count = 0; cc(10);cc('J');cc('Q');cc('K');var out = cc('A'); if(out === "-5 Hold") {return true;} return false; })(), 'Cards Sequence 10, J, Q, K, A 应该返回 <code>-5 Hold</code>');
  - text: Cards Sequence 3, 7, Q, 8, A 应该返回 <code>-1 Hold</code>
    testString: assert((function(){ count = 0; cc(3);cc(7);cc('Q');cc(8);var out = cc('A'); if(out === "-1 Hold") {return true;} return false; })(), 'Cards Sequence 3, 7, Q, 8, A 应该返回 <code>-1 Hold</code>');
  - text: Cards Sequence 2, J, 9, 2, 7 应该返回 <code>1 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc('J');cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), 'Cards Sequence 2, J, 9, 2, 7 应该返回 <code>1 Bet</code>');
  - text: Cards Sequence 2, 2, 10 应该返回 <code>1 Bet</code>
    testString: assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), 'Cards Sequence 2, 2, 10 应该返回 <code>1 Bet</code>');
  - text: Cards Sequence 3, 2, A, 10, K 应该返回 <code>-1 Hold</code>
    testString: assert((function(){ count = 0; cc(3);cc(2);cc('A');cc(10);var out = cc('K'); if(out === "-1 Hold") {return true;} return false; })(), 'Cards Sequence 3, 2, A, 10, K 应该返回 <code>-1 Hold</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              