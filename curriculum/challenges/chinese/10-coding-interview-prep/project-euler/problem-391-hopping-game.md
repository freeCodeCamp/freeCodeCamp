---
id: 5900f4f31000cf542c510006
challengeType: 5
videoUrl: ''
title: 问题391：跳跃游戏
---

## Description
<section id="description">当将数字从0写入k到二进制时，令sk为1的数。例如，以二进制形式写0到5，我们有0,1,10,11,100,101。有7个1，所以s5 = 7.序列S = {sk：k≥0}开始{0,1 ，2,4,5,7,9,12，......}。 <p>一个游戏由两个玩家玩。在游戏开始之前，选择数字n。计数器c从0开始。每转一圈，玩家选择一个从1到n（含）的数字，然后用该数字增加c。结果值c必须是S的成员。如果没有更多有效的移动，则玩家输掉。 </p><p>例如：设n = 5.c从0开始。玩家1选择4，所以c变为0 + 4 = 4.玩家2选择5，所以c变为4 + 5 = 9.玩家1选择3，所以c变为9 + 3 = 12.等等。请注意，c必须始终属于S，并且每个玩家最多可以将c增加n。 </p><p>设M（n）是第一个玩家在第一个回合强制获胜时可以选择的最高数字，如果没有这样的移动则M（n）= 0。例如，M（2）= 2，M（7）= 1且M（20）= 4。 </p><p>给定Σ（M（n））3 = 8150，1≤n≤20。 </p><p>找Σ（M（n））3表示1≤n≤1000。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler391()</code>应该返回61029882288。
    testString: assert.strictEqual(euler391(), 61029882288);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler391() {
  // Good luck!
  return true;
}

euler391();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
