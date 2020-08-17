---
id: 5900f4971000cf542c50ffa9
challengeType: 5
title: 'Problem 298: Selective Amnesia'
videoUrl: ''
localeTitle: 问题298：选择性健忘症
---

## Description
<section id="description">
拉里（Larry）和罗宾（Robin）玩着一场记忆游戏，其中涉及一个随机数序列，介于1到10之间（含1和10），每次被召唤一个。每个玩家最多可以记住5个先前的数字。当被叫号码在玩家的记忆中时，该玩家将获得积分。如果不是，则播放器将被叫号码添加到他的记忆中，如果他的记忆已满，则删除另一个号码。

两位选手都以空洞的回忆开始。两位玩家总是向他们的记忆中添加新的遗漏号码，但是在决定删除哪个号码时使用不同的策略：
拉里（Larry）的策略是删除最长时间内未拨打的电话。
Robin的策略是删除内存中时间最长的数字。

范例游戏：Turn
  被叫号码
  拉里的记忆
  拉里的比分
  罗宾的记忆
  罗宾的分数
1个
  1个
  1个
  0
  1个
  0
2
  2
  1,2
  0
  1,2
  0
3
  4
  1,2,4
  0
  1,2,4
  0
4
  6
  1,2,4,6
  0
  1,2,4,6
  0
5
  1个
  1,2,4,6
  1个
  1,2,4,6
  1个
6
  8
  1,2,4,6,8
  1个
  1,2,4,6,8
  1个
7
  10
  1,4,6,8,10
  1个
  2,4,6,8,10
  1个
8
  2
  1,2,6,8,10
  1个
  2,4,6,8,10
  2
9
  4
  1,2,4,8,10
  1个
  2,4,6,8,10
  3
10
  1个
  1,2,4,8,10
  2
  1,4,6,8,10
  3


用L表示拉里的分数，用R表示罗宾的分数，| L-R |的期望值是多少？ 50转后？使用x.xxxxxxxx格式将答案四舍五入到小数点后八位。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler298()</code>应该返回1.76882294。
    testString: assert.strictEqual(euler298(), 1.76882294);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler298() {
  // Good luck!
  return true;
}

euler298();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
