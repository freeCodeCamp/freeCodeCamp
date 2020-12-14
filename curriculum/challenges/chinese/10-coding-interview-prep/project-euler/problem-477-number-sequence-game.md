---
id: 5900f54a1000cf542c51005c
challengeType: 5
videoUrl: ''
title: 问题477：数字序列游戏
---

## Description
<section id="description">数字序列游戏以写在一行上的N个数字的序列S开始。两名球员交替轮流。在轮到他时，玩家必须选择并删除序列中剩余的第一个或最后一个数字。球员得分是他所取得的所有数字的总和。每个玩家都试图最大化自己的总和。如果N = 4并且S = {1,2,10,3}，则每个玩家最大化他的得分如下：玩家1：移除第一个数字（1）玩家2：从剩余序列移除最后一个数字（3）玩家1：从剩余序列中移除最后一个号码（10）玩家2：移除剩余号码（2）玩家1得分为1 + 10 = 11.如果两个玩家都遵循，则F（N）为玩家1的得分序列的最优策略S = {s1，s2，...，sN}定义为：s1 = 0 si + 1 =（si2 + 45）modulo 1 000 000 007序列以S = {0,45,2070开头，4284945,753524550,478107844,894218625，...}。给出F（2）= 45，F（4）= 4284990，F（100）= 26365463243，F（104）= 2495838522951。求F（108）。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler477()</code>应该返回25044905874565164。
    testString: assert.strictEqual(euler477(), 25044905874565164);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler477() {
  // Good luck!
  return true;
}

euler477();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
