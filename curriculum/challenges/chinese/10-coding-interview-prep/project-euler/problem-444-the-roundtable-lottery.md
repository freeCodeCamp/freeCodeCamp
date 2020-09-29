---
id: 5900f52a1000cf542c51003b
challengeType: 5
title: 'Problem 444: The Roundtable Lottery'
videoUrl: ''
localeTitle: 问题444：圆桌会议彩票
---

## Description
<section id="description">一群人决定坐在圆桌旁玩彩票交易游戏。每个人都是从随机分配的未经批准的彩票开始的。每张票都被划伤，显示全票奖金从1英镑到1英镑不等，没有两张票。游戏的目标是让每个人在离开游戏时最大化他的奖金。 <p>选择任意人作为第一个玩家。围绕桌子，每个玩家只有两个选项之一： </p><ol><li>玩家可以抓住他的票，并向桌上的每个人透露其价值。 </li><li>玩家可以将他未击中的门票换成先前玩家划伤的门票，然后将该门票留给游戏。之前的玩家随后抓住了他新买的机票，并向桌上的每个人展示了它的价值。 </li></ol><p>所有门票都被划伤后游戏结束。仍然留在桌上的所有玩家必须带着他们当前持有的门票。 </p><p>假设每个玩家使用最优策略来最大化他的票奖金的期望值。 </p><p>设E（p）表示当游戏在由p个玩家组成的游戏中结束时留在桌旁的玩家的预期数量（例如当舍入到5个有效数字时E（111）= 5.2912）。 </p><p>设S1（N）= E（p）令Sk（N）= Sk-1（p），其中k&gt; 1 </p><p>找到S20（1014）并用科学记数法将答案写成10位有效数字。使用小写e来分隔尾数和指数（例如S3（100）= 5.983679014e5）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler444()</code>应该返回1.200856722e+263。
    testString: assert.strictEqual(euler444(), 1.200856722e+263);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler444() {
  // Good luck!
  return true;
}

euler444();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
