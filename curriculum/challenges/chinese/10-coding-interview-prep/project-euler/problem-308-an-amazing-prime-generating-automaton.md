---
id: 5900f4a11000cf542c50ffb3
challengeType: 5
videoUrl: ''
title: 问题308：惊人的生成素数的自动机
---

## Description
<section id="description">
用编程语言Fractran编写的程序包含一个分数列表。

Fractran虚拟机的内部状态是一个正整数，该整数最初设置为种子值。 Fractran程序的每次迭代都将状态整数乘以列表中的第一个分数，从而将其保留为整数。

例如，约翰·霍顿·康威（John Horton Conway）为黄金一代编写的Fractran程序之一，由以下14个部分组成：1791
，
7885
，
1951年
，
2338
，
2933
，
7729
，
9523
，
7719
，
117
，
1113
，
1311
，
152
，
17
，
551
。
从种子整数2开始，程序的连续迭代产生以下序列：
15，825，725，1925，2275，425，...，68，4，30，...，136，8，60，...，544，32，240，...

此序列中出现的2的幂是22、23、25，...
可以证明，该序列中所有2的幂都具有质数指数，并且所有质数都以正确的顺序显示为2的幂指数！

如果有人使用上面的Fractran程序来解决Project Euler问题7（找到第10001个素数），那么在该程序产生第210001个素数之前，将需要进行几次迭代？
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler308()</code>应该返回1539669807660924。
    testString: assert.strictEqual(euler308(), 1539669807660924);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler308() {
  // Good luck!
  return true;
}

euler308();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
