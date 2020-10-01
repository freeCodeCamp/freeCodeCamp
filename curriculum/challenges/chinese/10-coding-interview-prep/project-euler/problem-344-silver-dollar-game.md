---
id: 5900f4c51000cf542c50ffd7
challengeType: 5
videoUrl: ''
title: 问题344：银元游戏
---

## Description
<section id="description"> NG de Bruijn的银元游戏的一个变种可以描述如下： <p>在正方形条上放置了许多硬币，每平方最多一枚硬币。只有一枚硬币，称为银元，具有任何价值。两名球员轮流做出动作。在每个回合中，玩家必须进行常规或特殊动作。 </p><p>常规移动包括选择一个硬币并将其移动到左侧的一个或多个方块。硬币不能从条带中移出或跳到另一个硬币上或上方。 </p><p>或者，玩家可以选择将最左边的硬币扒窃而不是定期移动。如果没有可能的常规动作，则玩家被迫掏出最左边的硬币。 </p><p>获胜者是兜售银元的玩家。 </p><p>获胜配置是在条带上的硬币排列，其中第一玩家可以强制获胜而不管第二玩家做什么。 </p><p>设W（n，c）为n个正方形，c个无价值硬币和1个银元的获胜配置数。 </p><p>给出W（10,2）= 324和W（100,10）= 1514704946113500。 </p><p>找到W（1 000 000,100）模数半数1000 036 000 099（= 1 000 003·1 000 033）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler344()</code>应该返回65579304332。
    testString: assert.strictEqual(euler344(), 65579304332);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler344() {
  // Good luck!
  return true;
}

euler344();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
