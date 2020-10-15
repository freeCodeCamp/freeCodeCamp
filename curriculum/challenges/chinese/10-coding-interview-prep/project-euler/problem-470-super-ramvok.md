---
id: 5900f5431000cf542c510055
challengeType: 5
videoUrl: ''
title: 问题470：超级拉姆沃克
---

## Description
<section id="description">考虑一下Ramvok的单一游戏： <p>设t表示游戏持续的最大转弯次数。如果t = 0，则游戏立即结束。否则，在每个回合i，玩家掷骰子。在滚动之后，如果玩家可以停止游戏并获得等于当前滚动值的奖励，或者丢弃滚动并在下一轮再试一次。如果i = t，则不能丢弃卷筒并且必须接受奖品。在比赛开始之前，t由玩家选择，然后玩家必须为某些常数c支付前期成本ct。对于c = 0，可以选择t为无穷大（前期成本为0）。设R（d，c）是玩家从单次最佳玩法Ramvok游戏中获得的预期利润（即净收益），给定公平的d-die模具和成本常数c。例如，R（4,0.2）= 2.65。假设玩家有足够的资金支付任何/所有前期费用。 </p><p>现在考虑一个超级拉姆沃克游戏： </p><p>在超级拉姆沃克，拉姆沃克的比赛是反复播放，但略有修改。每场比赛后，骰子都会被改变。改变过程如下：模具滚动一次，如果得到的面部有可见的点，则该面被改为空白。如果面部已经是空白，则会将其更改回原始值。在进行改变之后，可以开始另一场Ramvok游戏（并且在这样的游戏中，在每个回合中，掷骰子被滚动直到出现具有其值的面部）。玩家知道哪些面是空白的，哪些面不是。一旦模具的所有面都空白，超级拉姆沃克的游戏结束。 </p><p>设S（d，c）是玩家从Super Ramvok最佳玩游戏中获得的预期利润，给出一个公平的d-side模具开始（所有边都可见），并且成本常数c。例如，S（6,1）= 208.3。 </p><p>设F（n）=Σ4≤d≤nΣ0≤c≤nS（d，c）。 </p><p>计算F（20），四舍五入到最接近的整数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler470()</code>应该返回147668794。
    testString: assert.strictEqual(euler470(), 147668794);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler470() {
  // Good luck!
  return true;
}

euler470();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
